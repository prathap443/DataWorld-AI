import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

const serviceDetails = {
  ai: {
    title: "AI & Machine Learning",
    description: "Develop intelligent systems that learn, adapt, and automate complex tasks to drive efficiency.",
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Recommendation Systems"],
    fullContent: `Our AI and Machine Learning solutions help you harness the power of intelligent automation. We build custom models trained on your data to solve your specific business challenges. From predicting customer behavior to automating complex decision-making processes, we create AI systems that deliver measurable ROI.

Key capabilities include:
• Predictive analytics for forecasting trends and outcomes
• Natural language processing for text analysis and chatbots
• Computer vision for image recognition and analysis
• Recommendation engines that personalize customer experiences
• Custom model development tailored to your industry

We've helped companies across finance, healthcare, retail, and manufacturing deploy AI solutions that reduce costs, improve accuracy, and unlock new revenue streams.`,
    benefits: [
      "Automate time-consuming manual processes",
      "Improve decision-making with data-driven insights",
      "Detect patterns humans would miss",
      "Scale operations without proportional cost increases",
      "Gain competitive advantage through intelligent automation"
    ]
  },
  data_engineering: {
    title: "Data Engineering",
    description: "Build robust data pipelines and architectures that handle massive scale with reliability.",
    features: ["ETL/ELT Pipeline Design", "Data Warehouse Modernization", "Real-time Streaming", "Database Optimization"],
    fullContent: `Solid data infrastructure is the foundation of any successful data initiative. Our data engineering experts design and build pipelines that reliably move, transform, and load data at any scale. Whether you're processing gigabytes or petabytes, we create systems built for reliability, performance, and maintainability.

Core services include:
• ETL/ELT pipeline design and implementation
• Data warehouse modernization and optimization
• Real-time data streaming and processing
• Database architecture and optimization
• Data quality and validation frameworks
• Migration from legacy systems to modern cloud platforms

We implement industry-standard tools and best practices to ensure your data infrastructure can grow with your business needs.`,
    benefits: [
      "Eliminate data silos across your organization",
      "Enable real-time decision making",
      "Reduce infrastructure costs through optimization",
      "Ensure data quality and consistency",
      "Scale processing capabilities without system failures"
    ]
  },
  data_analytics: {
    title: "Data Analytics",
    description: "Turn raw numbers into visual stories and actionable insights for better decision making.",
    features: ["Business Intelligence Dashboards", "Statistical Analysis", "Data Mining", "Reporting Automation"],
    fullContent: `Transform your raw data into compelling stories that drive action. Our analytics services help you understand what happened, why it happened, and what will happen next. We create interactive dashboards and reports that give stakeholders the insights they need to make confident decisions.

Analytics offerings include:
• Business intelligence dashboards and visualizations
• Statistical analysis and hypothesis testing
• Data mining and pattern discovery
• Reporting automation and scheduling
• Custom KPI tracking and monitoring
• Executive dashboards for C-level insights

From operational metrics to strategic KPIs, we help you measure what matters and optimize accordingly.`,
    benefits: [
      "Make faster, more informed business decisions",
      "Identify untapped revenue opportunities",
      "Monitor performance in real-time",
      "Detect anomalies and risks early",
      "Communicate data insights across the organization"
    ]
  },
  custom_dev: {
    title: "Custom Development",
    description: "Tailored software solutions integrating data capabilities directly into your workflows.",
    features: ["API Development", "Microservices Architecture", "Integration Services", "Legacy Modernization"],
    fullContent: `Sometimes off-the-shelf solutions don't fit your unique business needs. We build custom applications that integrate data and AI capabilities directly into your workflows. From modern microservices to legacy system modernization, we create software built for your specific challenges.

Development services include:
• Custom API development for data access
• Microservices architecture for scalability
• Integration with existing enterprise systems
• Legacy application modernization
• Web and mobile applications with data insights
• Data-driven feature development

Our team works closely with your stakeholders to understand requirements and deliver solutions that your users love.`,
    benefits: [
      "Get exactly what your business needs",
      "Integrate data seamlessly into existing systems",
      "Build competitive advantages with custom features",
      "Reduce dependency on vendor lock-in",
      "Future-proof your technology stack"
    ]
  },
  cloud: {
    title: "Cloud Solutions",
    description: "Leverage the power of cloud computing for scalable, cost-effective data storage and processing.",
    features: ["Cloud Migration", "Serverless Architecture", "Multi-cloud Strategy", "Cost Optimization"],
    fullContent: `Move beyond on-premise limitations with our cloud solutions. We help you design, migrate, and optimize cloud architectures on AWS, Google Cloud, or Azure. Whether you're moving legacy systems or building cloud-native applications, we ensure you get the performance and cost benefits you expect.

Cloud services include:
• Cloud migration strategy and execution
• Serverless architecture design
• Multi-cloud strategy development
• Cloud cost optimization
• Infrastructure as code implementation
• Disaster recovery and backup solutions

We ensure your cloud investments deliver maximum value while maintaining security and compliance.`,
    benefits: [
      "Scale compute and storage on-demand",
      "Reduce capital expenditure on infrastructure",
      "Improve disaster recovery capabilities",
      "Access cutting-edge cloud services",
      "Simplify operations with managed services"
    ]
  },
  governance: {
    title: "Data Governance",
    description: "Ensure your data is secure, compliant, and maintained at the highest quality standards.",
    features: ["Security & Compliance", "Data Quality Management", "Access Control", "Audit Trails"],
    fullContent: `Data is valuable, but only if it's trustworthy. Our governance services ensure your data is secure, compliant with regulations, and maintained at the highest quality standards. From GDPR to HIPAA compliance, we implement frameworks that protect your data while enabling analytics.

Governance offerings include:
• Security and compliance implementation (GDPR, HIPAA, SOC 2)
• Data quality management and monitoring
• Access control and identity management
• Data cataloging and lineage tracking
• Audit trails and compliance reporting
• Privacy-by-design principles

Build trust in your data with robust governance frameworks.`,
    benefits: [
      "Reduce regulatory and compliance risks",
      "Protect sensitive customer and business data",
      "Maintain data quality across the organization",
      "Gain visibility into data provenance",
      "Establish data governance best practices"
    ]
  }
};

interface ServiceDetailProps {
  params: { service?: string };
}

export default function ServiceDetail({ params }: ServiceDetailProps) {
  const service = params?.service as keyof typeof serviceDetails;
  const details = serviceDetails[service] || serviceDetails.ai;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/services">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Button>
          </Link>

          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">{details.title}</h1>
            <p className="text-xl text-muted-foreground mb-12">{details.description}</p>

            <div className="bg-slate-50 rounded-2xl p-8 md:p-12 mb-12">
              <h2 className="text-2xl font-bold mb-6">Overview</h2>
              <p className="text-lg text-foreground/80 leading-relaxed whitespace-pre-wrap">{details.fullContent}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Key Capabilities</h3>
                <ul className="space-y-3">
                  {details.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Business Benefits</h3>
                <ul className="space-y-3">
                  {details.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-16 p-8 bg-primary/5 rounded-2xl border border-primary/20">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-foreground/80 mb-6">
                Let's discuss how {details.title.toLowerCase()} can transform your organization.
              </p>
              <Link href="/contact">
                <Button size="lg" className="rounded-xl">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
