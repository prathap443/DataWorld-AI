import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Database, LineChart, Code2, Users, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

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
              {/* Unsplash Abstract Tech Image */}
              <img 
                src="https://pixabay.com/get/g498ed0f726bd3f22776d1df106380ff29e67e3fc89a2f4bfe6ed6483f7925e609a89c8d335078582b1022b7de0a6942ca393214fc66722a80795601c01022f9e_1280.jpg" 
                alt="Data Visualization" 
                className="relative rounded-3xl shadow-2xl border border-white/20"
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
      <section className="py-24 bg-slate-50">
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "AI Development",
                desc: "Custom AI models and machine learning solutions tailored to your business needs."
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: "Data Architecture",
                desc: "Scalable, secure, and efficient data infrastructure design and implementation."
              },
              {
                icon: <Code2 className="w-8 h-8" />,
                title: "Data Engineering",
                desc: "Robust pipelines for ETL, data warehousing, and real-time processing."
              }
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials / Social Proof */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="mb-8 flex justify-center text-accent">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                ))}
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
                "DataWorld transformed our raw data into actionable insights that drove a 30% revenue increase in just one quarter."
              </h2>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-700 rounded-full mb-4 overflow-hidden border-2 border-primary">
                  {/* Unsplash User Portrait */}
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="CEO" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Alex Johnson</h4>
                  <p className="text-slate-400">CTO, TechGrowth Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 text-center">
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
