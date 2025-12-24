import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  bgImage?: string;
}

export function PageHeader({ title, subtitle, bgImage }: PageHeaderProps) {
  return (
    <div 
      className="relative pt-32 pb-20 overflow-hidden bg-slate-900 text-white bg-cover bg-center"
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/85 to-slate-900/90" />

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2"
          animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
}
