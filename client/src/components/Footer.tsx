import { Database, Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary/20 p-2 rounded-lg text-primary">
                <Database className="w-6 h-6" />
              </div>
              <span className="text-xl font-display font-bold text-white">DataWorld</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering businesses through cutting-edge data engineering, advanced analytics, and AI solutions. We turn data into your most valuable asset.
            </p>
            <div className="flex gap-4 pt-2">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a key={i} href="#" className="p-2 bg-slate-900 rounded-full hover:bg-primary hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Services", href: "/services" },
                { name: "Training Programs", href: "/training" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <span className="text-sm text-slate-400 hover:text-primary transition-colors cursor-pointer">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Data Engineering",
                "AI Development",
                "Cloud Architecture",
                "Business Intelligence",
                "Corporate Training"
              ].map((item) => (
                <li key={item} className="text-sm text-slate-400">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400">20-22 Wenlock Road<br />London, England, N1 7GU</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-slate-400">prathap443@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} DataWorld Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
