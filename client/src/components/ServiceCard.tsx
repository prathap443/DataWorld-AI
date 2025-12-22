import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

export function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="group relative bg-card p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>

        <ul className="space-y-2 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              {feature}
            </li>
          ))}
        </ul>

        <Link href="/services">
          <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all cursor-pointer">
            Learn More <ArrowRight className="w-4 h-4" />
          </div>
        </Link>
      </div>
    </div>
  );
}
