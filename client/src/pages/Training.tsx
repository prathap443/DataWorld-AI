import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, Calendar, Users, Zap } from "lucide-react";
import { Link } from "wouter";
import techBgImage from "@assets/stock_images/tech_background_data_2c16e47e.jpg";
import neuralNetworkBg from "@assets/stock_images/neural_network_ai_ma_0c31227c.jpg";

interface CourseCardProps {
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  description: string;
  modules: string[];
  popular?: boolean;
}

function CourseCard({ title, level, duration, description, modules, popular }: CourseCardProps) {
  return (
    <div className={`flex flex-col h-full bg-card rounded-2xl p-8 border ${popular ? 'border-primary shadow-xl shadow-primary/10 ring-2 ring-primary/20' : 'border-border shadow-sm hover:shadow-lg'} transition-all duration-300`}>
      {popular && (
        <div className="mb-4">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0 px-3 py-1">Most Popular</Badge>
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2 text-foreground">{title}</h3>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> {level}</span>
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {duration}</span>
        </div>
      </div>

      <p className="text-muted-foreground mb-8 flex-grow">
        {description}
      </p>

      <div className="space-y-3 mb-8">
        <p className="text-sm font-semibold text-foreground">What you'll learn:</p>
        {modules.map((mod, i) => (
          <div key={i} className="flex items-start gap-2 text-sm text-slate-600">
            <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
            <span>{mod}</span>
          </div>
        ))}
      </div>

      <Link href="/contact">
        <Button className={`w-full py-6 text-lg ${popular ? '' : 'variant-outline'}`}>
          Enroll Now
        </Button>
      </Link>
    </div>
  );
}

export default function Training() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader 
        title="Professional Training" 
        subtitle="Upskill your team with industry-leading courses in Data & AI."
        bgImage={techBgImage}
      />
      
      <main className="container mx-auto px-4 md:px-6 py-24">
        {/* Intro Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 max-w-5xl mx-auto text-center">
          {[
            { label: "Students Trained", value: "5,000+" },
            { label: "Expert Instructors", value: "20+" },
            { label: "Corporate Partners", value: "50+" },
            { label: "Course Completion", value: "94%" },
          ].map((stat, i) => (
            <div key={i} className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <CourseCard 
            title="Data Engineering Bootcamp"
            level="Intermediate"
            duration="12 Weeks"
            description="Master the art of building scalable data systems. Learn to design, build, and maintain data pipelines using modern tools."
            modules={[
              "Python & SQL Advanced Concepts",
              "Big Data Frameworks (Spark, Hadoop)",
              "Cloud Data Warehousing (Snowflake, BigQuery)",
              "ETL Pipeline Orchestration (Airflow)",
              "Data Modeling & Architecture"
            ]}
            popular={true}
          />

          <CourseCard 
            title="AI & Machine Learning"
            level="Advanced"
            duration="16 Weeks"
            description="Deep dive into algorithms and neural networks. Build and deploy real-world AI models for business applications."
            modules={[
              "Supervised & Unsupervised Learning",
              "Deep Learning with PyTorch/TensorFlow",
              "NLP & Computer Vision",
              "Model Deployment & MLOps",
              "AI Ethics & Governance"
            ]}
          />

          <CourseCard 
            title="Data Analysis & Visualization"
            level="Beginner"
            duration="8 Weeks"
            description="Learn to tell compelling stories with data. Transform complex datasets into clear, actionable business insights."
            modules={[
              "Data Cleaning & Preparation",
              "Statistical Analysis Fundamentals",
              "Visualization with Tableau/PowerBI",
              "Business Intelligence Strategy",
              "SQL for Analysts"
            ]}
          />

          <CourseCard 
            title="Data Architecting"
            level="Advanced"
            duration="10 Weeks"
            description="Strategic training for senior data professionals. Design enterprise-grade data ecosystems."
            modules={[
              "Enterprise Data Strategy",
              "Modern Data Stack Architecture",
              "Data Governance & Security",
              "Cloud Infrastructure Design",
              "System Scalability & Performance"
            ]}
          />
        </div>

        {/* Tech Stack Section */}
        <div className="mt-32 mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Stack We Teach</h2>
            <p className="text-lg text-muted-foreground">
              Master the most in-demand tools and frameworks used by leading data teams worldwide.
            </p>
          </div>

          <div 
            className="relative rounded-2xl overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${neuralNetworkBg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/80" />
            <div className="relative z-10 p-12 md:p-16">
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-white">
                  <h3 className="font-bold text-lg mb-4">Data Engineering</h3>
                  <ul className="space-y-2 text-sm text-slate-200">
                    <li>• Apache Spark & Hadoop</li>
                    <li>• Apache Airflow</li>
                    <li>• Snowflake & BigQuery</li>
                    <li>• Python & SQL</li>
                  </ul>
                </div>
                <div className="text-white">
                  <h3 className="font-bold text-lg mb-4">Machine Learning</h3>
                  <ul className="space-y-2 text-sm text-slate-200">
                    <li>• PyTorch & TensorFlow</li>
                    <li>• Scikit-learn</li>
                    <li>• NLP & Computer Vision</li>
                    <li>• MLflow & MLOps</li>
                  </ul>
                </div>
                <div className="text-white">
                  <h3 className="font-bold text-lg mb-4">Analytics & BI</h3>
                  <ul className="space-y-2 text-sm text-slate-200">
                    <li>• Tableau & PowerBI</li>
                    <li>• Looker & Metabase</li>
                    <li>• Pandas & NumPy</li>
                    <li>• Advanced SQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Training CTA */}
        <div className="mt-32 bg-slate-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[100px] rounded-full"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Training for Your Team?</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              We offer customized corporate training programs tailored to your company's specific stack and business goals.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="px-8 py-6 text-lg font-semibold">
                Get a Corporate Quote
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
