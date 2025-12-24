import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Target, Lightbulb, Users } from "lucide-react";
import techBgImage from "@assets/stock_images/tech_background_data_7f5c1205.jpg";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader 
        title="About DataWorld" 
        subtitle="Driven by data, powered by intelligence, focused on your success."
        bgImage={techBgImage}
      />
      
      <main className="container mx-auto px-4 md:px-6 py-24">
        {/* Mission / Vision */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At DataWorld, we believe that data is the lifeblood of modern innovation. Our mission is to democratize access to advanced AI and data engineering capabilities, empowering organizations of all sizes to make smarter, faster decisions.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <Target className="w-6 h-6" />, title: "Precision", desc: "We deliver accurate, reliable solutions." },
                { icon: <Lightbulb className="w-6 h-6" />, title: "Innovation", desc: "Constantly pushing the boundaries of what's possible." },
                { icon: <Users className="w-6 h-6" />, title: "Collaboration", desc: "Working alongside you as a true partner." }
              ].map((val, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{val.title}</h4>
                    <p className="text-sm text-muted-foreground">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-2xl transform rotate-3 opacity-20"></div>
            {/* Unsplash Office Team Image */}
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
              alt="Team collaboration" 
              className="relative rounded-2xl shadow-xl border border-white/20"
            />
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
