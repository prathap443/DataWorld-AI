import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  serviceKey: string;
  bgImage?: string;
}

export function ServiceCard({ icon, title, description, features, serviceKey, bgImage }: ServiceCardProps) {
  return (
    <motion.div 
      className="group relative bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Image Section */}
      {bgImage && (
        <motion.div 
          className="w-full h-40 bg-cover bg-center relative overflow-hidden"
          style={{ backgroundImage: `url(${bgImage})` }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
        </motion.div>
      )}

      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      
      <div className="relative z-10 p-8 flex-grow flex flex-col">
        <motion.div 
          className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {icon}
        </motion.div>
        
        <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
          {description}
        </p>

        <ul className="space-y-2 mb-8">
          {features.map((feature, i) => (
            <motion.li 
              key={i} 
              className="flex items-center gap-2 text-sm text-foreground/80"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              {feature}
            </motion.li>
          ))}
        </ul>

        <Link href={`/services/${serviceKey}`}>
          <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all cursor-pointer">
            Learn More <ArrowRight className="w-4 h-4" />
          </div>
        </Link>
      </div>
    </motion.div>
  );
}
