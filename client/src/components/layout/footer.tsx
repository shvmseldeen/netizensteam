import { Facebook, Twitter, Instagram, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-secondary text-secondary-foreground pt-20 pb-10 border-t border-white/10"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-white">
                <img
                  src="/Logo.png" // ✅ Static reference from public folder
                  alt="Netizens Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-heading font-bold text-xl">Netizens.</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering individuals with the knowledge to securely and responsibly navigate the digital realm.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/teamnetizens"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/netizensteam"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/netizensteam"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/company/netizensteam"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-slate-400 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#team" className="text-slate-400 hover:text-primary transition-colors">Our Team</a></li>
              <li><a href="#values" className="text-slate-400 hover:text-primary transition-colors">Values</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>netizensteam@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Twitter className="w-5 h-5 text-primary shrink-0" />
                <span>@netizensteam</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6">Stay Updated</h4>
            <p className="text-slate-400 text-sm mb-4">
              Subscribe to our newsletter for the latest cybersecurity tips.
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Enter your email"
                className="bg-white/5 border-white/10 focus-visible:ring-primary text-white placeholder:text-slate-500"
              />
              <Button size="icon" className="shrink-0">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Netizens Team. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}