# DataWorld - Corporate Website

## Overview

DataWorld is a corporate website for a data engineering, AI, and analytics consulting company. The application showcases services, training programs, company information, and includes a contact form that saves inquiries to a PostgreSQL database and sends email notifications via Resend.

The stack follows a full-stack TypeScript architecture with React on the frontend and Express on the backend, using Drizzle ORM for database operations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library (New York style) built on Radix UI primitives
- **Animations**: Framer Motion for smooth page transitions and scroll animations
- **State Management**: TanStack React Query for server state and data fetching
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with path aliases (`@/` for client/src, `@shared/` for shared code)

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Server**: Node.js with HTTP server
- **API Design**: RESTful endpoints defined in shared routes file with Zod schema validation
- **Development**: tsx for TypeScript execution, Vite middleware for HMR in development
- **Production**: esbuild bundles server code, Vite builds static client assets

### Data Storage
- **Database**: PostgreSQL via node-postgres (pg) driver
- **ORM**: Drizzle ORM with drizzle-zod for schema-to-validation integration
- **Schema Location**: `shared/schema.ts` contains all table definitions
- **Migrations**: Drizzle Kit with `db:push` command for schema synchronization

### Project Structure
```
├── client/          # React frontend
│   └── src/
│       ├── components/   # Reusable UI components
│       ├── pages/        # Route page components
│       ├── hooks/        # Custom React hooks
│       └── lib/          # Utilities and query client
├── server/          # Express backend
│   ├── index.ts     # Server entry point
│   ├── routes.ts    # API route handlers
│   ├── storage.ts   # Database operations
│   └── db.ts        # Database connection
├── shared/          # Shared code between client/server
│   ├── schema.ts    # Drizzle database schemas
│   └── routes.ts    # API route definitions with Zod schemas
└── migrations/      # Drizzle database migrations
```

### Key Design Patterns
- **Shared Types**: Database schemas and API contracts are defined once in `shared/` and used by both client and server
- **Type-Safe APIs**: Route definitions include input/output Zod schemas for runtime validation
- **Storage Abstraction**: `IStorage` interface in `server/storage.ts` abstracts database operations
- **Component Architecture**: shadcn/ui components are copied into the project and customized, not imported from packages

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **Connection**: Uses pg Pool for connection management

### Email Service
- **Resend**: Transactional email service for contact form notifications
- **Environment Variable**: `RESEND_API_KEY` (optional - form submissions work without it)
- **Recipient**: `CONTACT_EMAIL` environment variable or defaults to `de.dataworld@gmail.com`

### Third-Party UI Libraries
- **Radix UI**: Headless UI primitives for accessible components
- **Embla Carousel**: Carousel/slider functionality
- **Recharts**: Charting library (via shadcn/ui chart component)
- **Vaul**: Drawer component

### Development Tools
- **Replit Plugins**: vite-plugin-runtime-error-modal, vite-plugin-cartographer, vite-plugin-dev-banner for Replit-specific development features