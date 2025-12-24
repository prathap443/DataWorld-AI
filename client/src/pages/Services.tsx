import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { Brain, Code, BarChart, Server, Globe, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import techBgImage from "@assets/stock_images/tech_background_data_7f3259ae.jpg";
import analyticsBg from "@assets/stock_images/data_analytics_progr_f19847a2.jpg";

export default function Services() {
  const services = [
    {
      key: "ai",
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Develop intelligent systems that learn, adapt, and automate complex tasks to drive efficiency.",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Recommendation Systems"]
    },
    {
      key: "data_engineering",
      icon: <Server className="w-8 h-8" />,
      title: "Data Engineering",
      description: "Build robust data pipelines and architectures that handle massive scale with reliability.",
      features: ["ETL/ELT Pipeline Design", "Data Warehouse Modernization", "Real-time Streaming", "Database Optimization"]
    },
    {
      key: "data_analytics",
      icon: <BarChart className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Turn raw numbers into visual stories and actionable insights for better decision making.",
      features: ["Business Intelligence Dashboards", "Statistical Analysis", "Data Mining", "Reporting Automation"]
    },
    {
      key: "custom_dev",
      icon: <Code className="w-8 h-8" />,
      title: "Custom Development",
      description: "Tailored software solutions integrating data capabilities directly into your workflows.",
      features: ["API Development", "Microservices Architecture", "Integration Services", "Legacy Modernization"]
    },
    {
      key: "cloud",
      icon: <Globe className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Leverage the power of cloud computing for scalable, cost-effective data storage and processing.",
      features: ["Cloud Migration", "Serverless Architecture", "Multi-cloud Strategy", "Cost Optimization"]
    },
    {
      key: "governance",
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
        bgImage={techBgImage}
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
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              serviceKey={service.key}
            />
          ))}
        </motion.div>

        {/* Tech Stack Section */}
        <div className="mt-32 mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology Arsenal</h2>
            <p className="text-lg text-muted-foreground">
              Enterprise-grade tools and platforms we use to deliver cutting-edge solutions.
            </p>
          </div>

          <div 
            className="relative rounded-2xl overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${analyticsBg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/80" />
            <div className="relative z-10 p-12 md:p-16">
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-white">
                  <h3 className="font-bold text-lg mb-4">Cloud & Infrastructure</h3>
                  <ul className="space-y-2 text-sm text-slate-200">
                    <li>• AWS & Google Cloud</li>
                    <li>• Snowflake & BigQuery</li>
                    <li>• Databricks</li>
                    <li>• Kubernetes & Docker</li>
                  </ul>
                </div>
                <div className="text-white">
                  <h3 className="font-bold text-lg mb-4">AI & Analytics</h3>
                  <ul className="space-y-2 text-sm text-slate-200">
                    <li>• TensorFlow & PyTorch</li>
                    <li>• LLMs & Prompt Engineering</li>
                    <li>• Advanced Analytics</li>
                    <li>• Real-time Processing</li>
                  </ul>
                </div>
                <div className="text-white">
                  <h3 className="font-bold text-lg mb-4">Data Pipeline & Tools</h3>
                  <ul className="space-y-2 text-sm text-slate-200">
                    <li>• Apache Spark & Kafka</li>
                    <li>• dbt & Airflow</li>
                    <li>• Tableau & PowerBI</li>
                    <li>• Python & SQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

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
