import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { Brain, Code, BarChart, Server, Globe, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Develop intelligent systems that learn, adapt, and automate complex tasks to drive efficiency.",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Recommendation Systems"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Data Engineering",
      description: "Build robust data pipelines and architectures that handle massive scale with reliability.",
      features: ["ETL/ELT Pipeline Design", "Data Warehouse Modernization", "Real-time Streaming", "Database Optimization"]
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Turn raw numbers into visual stories and actionable insights for better decision making.",
      features: ["Business Intelligence Dashboards", "Statistical Analysis", "Data Mining", "Reporting Automation"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Development",
      description: "Tailored software solutions integrating data capabilities directly into your workflows.",
      features: ["API Development", "Microservices Architecture", "Integration Services", "Legacy Modernization"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Leverage the power of cloud computing for scalable, cost-effective data storage and processing.",
      features: ["Cloud Migration", "Serverless Architecture", "Multi-cloud Strategy", "Cost Optimization"]
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Data Governance",
      description: "Ensure your data is secure, compliant, and maintained at the highest quality standards.",
      features: ["Security & Compliance", "Data Quality Management", "Access Control", "Audit Trails"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <PageHeader 
        title="Our Expertise" 
        subtitle="End-to-end data and AI solutions designed to propel your business into the future."
      />
      
      <main className="container mx-auto px-4 md:px-6 py-24 -mt-20 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              {...service}
            />
          ))}
        </motion.div>

        {/* Process Section */}
        <div className="mt-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Work</h2>
            <p className="text-lg text-muted-foreground">
              A collaborative, iterative approach to ensure your project's success.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your goals and data landscape." },
              { step: "02", title: "Strategy", desc: "Designing a roadmap tailored to your needs." },
              { step: "03", title: "Execution", desc: "Agile development and implementation." },
              { step: "04", title: "Optimization", desc: "Continuous improvement and support." }
            ].map((item, i) => (
              <div key={i} className="relative p-6 bg-white rounded-xl border border-slate-100 shadow-sm text-center">
                <div className="text-5xl font-display font-bold text-slate-100 absolute top-4 left-1/2 -translate-x-1/2 -z-10 select-none">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2 mt-4">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
