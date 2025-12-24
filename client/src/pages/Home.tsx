import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Database, LineChart, Code2, Users, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import aiImagePath from "@assets/stock_images/ai_artificial_intell_6d1c9ce2.jpg";
import neuralNet1 from "@assets/stock_images/neural_network_machi_745707c9.jpg";
import neuralNet2 from "@assets/stock_images/neural_network_machi_f9af290d.jpg";
import neuralNet3 from "@assets/stock_images/neural_network_machi_61c0bfd4.jpg";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Transforming Data into Intelligence
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6 text-slate-900 tracking-tight">
                Empowering <span className="text-primary">Business</span> with <span className="text-accent">AI & Data</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We build sophisticated AI applications and train the next generation of data experts. Unlock your organization's full potential with DataWorld.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="text-lg px-8 py-6 rounded-xl shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-1 transition-all">
                    Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-xl border-2 hover:bg-muted transition-all">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl transform rotate-3" />
              {/* AI & Data Visualization */}
              <img 
                src={aiImagePath}
                alt="AI & Data Visualization" 
                className="relative rounded-3xl shadow-2xl border border-white/20 w-full h-auto object-cover"
              />
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce hover:animate-none transition-all cursor-pointer">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <LineChart className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Efficiency Boost</p>
                  <p className="text-2xl font-bold text-slate-900">+45%</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-accent blur-[100px] rounded-full" />
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Data Solutions</h2>
            <p className="text-lg text-muted-foreground">
              From infrastructure to insights, we cover the entire data lifecycle.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
          >
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "AI Development",
                desc: "Custom AI models and machine learning solutions tailored to your business needs.",
                image: neuralNet1
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: "Data Architecture",
                desc: "Scalable, secure, and efficient data infrastructure design and implementation.",
                image: neuralNet2
              },
              {
                icon: <Code2 className="w-8 h-8" />,
                title: "Data Engineering",
                desc: "Robust pipelines for ETL, data warehousing, and real-time processing.",
                image: neuralNet3
              }
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
                </div>
                <div className="p-8 pt-6">
                  <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Showcase Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary blur-[120px] rounded-full -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent blur-[120px] rounded-full translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cutting-Edge Technology Stack</h2>
            <p className="text-lg text-muted-foreground">
              We leverage the latest AI and data technologies to deliver superior solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-lg"
            >
              <img 
                src={neuralNet2}
                alt="Machine Learning Technology" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-2xl font-bold mb-6">Advanced AI & Data Solutions</h3>
              <ul className="space-y-4">
                {[
                  "Deep Learning & Neural Networks",
                  "Cloud-Native Architecture",
                  "Real-time Data Processing",
                  "Scalable Infrastructure",
                  "Enterprise-Grade Security"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary blur-[100px] rounded-full -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent blur-[100px] rounded-full translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to innovate?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Whether you need custom AI solutions or training for your team, we're here to help you succeed in the data era.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="px-10 py-6 rounded-xl shadow-xl shadow-primary/25">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
