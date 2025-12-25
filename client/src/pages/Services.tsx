import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { Brain, Code, BarChart, Server, Globe, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import techBgImage from "@assets/stock_images/tech_background_data_7f3259ae.jpg";
import analyticsBg from "@assets/stock_images/data_analytics_progr_f19847a2.jpg";
import analyticsBg2 from "@assets/stock_images/data_analytics_progr_bf0d9cfc.jpg";
import aiBg from "@assets/e0d40668-2459-4df9-88bd-fe9f4742b146_1766664424837.jpeg";
import machineryBg2 from "@assets/stock_images/machinery_industrial_b175bbc4.jpg";
import governanceBg from "@assets/stock_images/tech_background_data_2c16e47e.jpg";
import cloudBg from "@assets/96aed902-1dc6-4823-8738-8f667cd89acd_1766664424837.jpeg";
import dataBg from "@assets/stock_images/data_analytics_progr_09aa2600.jpg";

export default function Services() {
  const services = [
    {
      key: "ai",
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Develop intelligent systems that learn, adapt, and automate complex tasks to drive efficiency.",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Recommendation Systems"],
      bgImage: aiBg
    },
    {
      key: "data_engineering",
      icon: <Server className="w-8 h-8" />,
      title: "Data Engineering",
      description: "Build robust data pipelines and architectures that handle massive scale with reliability.",
      features: ["ETL/ELT Pipeline Design", "Data Warehouse Modernization", "Real-time Streaming", "Database Optimization"],
      bgImage: machineryBg2
    },
    {
      key: "data_analytics",
      icon: <BarChart className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Turn raw numbers into visual stories and actionable insights for better decision making.",
      features: ["Business Intelligence Dashboards", "Statistical Analysis", "Data Mining", "Reporting Automation"],
      bgImage: analyticsBg2
    },
    {
      key: "custom_dev",
      icon: <Code className="w-8 h-8" />,
      title: "Custom Development",
      description: "Tailored software solutions integrating data capabilities directly into your workflows.",
      features: ["API Development", "Microservices Architecture", "Integration Services", "Legacy Modernization"],
      bgImage: dataBg
    },
    {
      key: "cloud",
      icon: <Globe className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Leverage the power of cloud computing for scalable, cost-effective data storage and processing.",
      features: ["Cloud Migration", "Serverless Architecture", "Multi-cloud Strategy", "Cost Optimization"],
      bgImage: cloudBg
    },
    {
      key: "governance",
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Data Governance",
      description: "Ensure your data is secure, compliant, and maintained at the highest quality standards.",
      features: ["Security & Compliance", "Data Quality Management", "Access Control", "Audit Trails"],
      bgImage: governanceBg
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
              bgImage={service.bgImage}
            />
          ))}
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div 
          className="mt-32 mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Technology Arsenal
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Enterprise-grade tools and platforms we use to deliver cutting-edge solutions.
            </motion.p>
          </div>

          <motion.div 
            className="relative rounded-2xl overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${analyticsBg})` }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/80"
              animate={{ opacity: [0.95, 0.98, 0.95] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <div className="relative z-10 p-12 md:p-16">
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    title: "Cloud & Infrastructure",
                    items: ["• AWS & Google Cloud", "• Snowflake & BigQuery", "• Databricks", "• Kubernetes & Docker"]
                  },
                  {
                    title: "AI & Analytics",
                    items: ["• TensorFlow & PyTorch", "• LLMs & Prompt Engineering", "• Advanced Analytics", "• Real-time Processing"]
                  },
                  {
                    title: "Data Pipeline & Tools",
                    items: ["• Apache Spark & Kafka", "• dbt & Airflow", "• Tableau & PowerBI", "• Python & SQL"]
                  }
                ].map((column, idx) => (
                  <motion.div 
                    key={idx}
                    className="text-white"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <h3 className="font-bold text-lg mb-4">{column.title}</h3>
                    <ul className="space-y-2 text-sm text-slate-200">
                      {column.items.map((item, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: (idx * 0.1) + (i * 0.05) }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
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
