import { motion } from "framer-motion";
import { CheckCircle2, Target, Compass } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30 border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Who is Netizens?</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Netizens Team is a student-led, youth-driven social enterprise that empowers university students with real-world skills in tech, business, and innovation.
            We aim to build a generation of ethical digital leaders through practical learning and high-impact events.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative group">
               <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80" 
                alt="Student collaboration" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-xl border border-white/10 max-w-xs backdrop-blur-md">
              <h4 className="font-bold text-xl mb-1 text-primary">Youth-Led Force</h4>
              <p className="text-sm text-muted-foreground">Redefining what student-led impact looks like since 2022.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-8">
              <div className="flex gap-4 group">
                <div className="mt-1 bg-primary/10 p-3 rounded-lg h-fit group-hover:bg-primary/20 transition-colors border border-primary/20">
                  <Compass className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-foreground">Our Vision</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    To become the leading student-led tech movement in the MENA region, empowering a generation of ethical, skilled, and impact-driven digital leaders who shape the future.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                 <div className="mt-1 bg-accent/10 p-3 rounded-lg h-fit group-hover:bg-accent/20 transition-colors border border-accent/20">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-foreground">Our Mission</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    To bridge the gap between academic learning and real-world digital skills by providing hands-on experiences, educational content, and collaborative opportunities.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
