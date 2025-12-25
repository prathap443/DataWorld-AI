import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "de.dataworld@gmail.com";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);

      // Send email notification
      if (resend) {
        try {
          await resend.emails.send({
            from: 'DataWorld Contact Form <onboarding@resend.dev>',
            to: [CONTACT_EMAIL],
            subject: `New Inquiry: ${input.subject}`,
            html: `
              <h2>New Message from DataWorld Website</h2>
              <p><strong>Name:</strong> ${input.name}</p>
              <p><strong>Email:</strong> ${input.email}</p>
              <p><strong>Subject:</strong> ${input.subject}</p>
              <p><strong>Message:</strong></p>
              <p>${input.message}</p>
              <hr />
              <p>This message was sent via the contact form on your DataWorld corporate website.</p>
            `,
          });
          console.log(`Email sent successfully for inquiry ${inquiry.id}`);
        } catch (emailErr) {
          console.error('Failed to send email:', emailErr);
          // We don't fail the request if email fails, as the inquiry is saved to DB
        }
      } else {
        console.warn('RESEND_API_KEY not configured, skipping email notification');
      }

      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}
