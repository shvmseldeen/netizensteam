import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Code2, Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text Content */}
          <div className="flex-1 max-w-2xl z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary-foreground text-sm font-medium mb-6 border border-primary/20 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Empowering the Next Generation
              </div>

              <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground leading-[1.1] mb-6">
                We Build Future <br />
                <span className="text-gradient">Tech Leaders</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Netizens Team is a youth-driven movement empowering students with real-world skills in tech, business, and innovation. Beyond theory, we build the future.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfeoJirUrwaqwkgvjrHdu9KxbTk2fVn2mht57srEjCGUSpQ4w/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="text-base px-8 h-12 shadow-lg shadow-primary/20 rounded-full bg-primary hover:bg-primary/90 text-white border-0">
                    Join the Movement
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>

                <a 
                  href="https://facebook.com/teamnetizens"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg" className="text-base px-8 h-12 rounded-full bg-transparent border-white/10 hover:bg-white/5 text-white">
                    Explore More
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Skill Tags */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-12 flex items-center gap-8 text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Cybersecurity</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Development</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Innovation</span>
              </div>
            </motion.div>
          </div>

          {/* Visual Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full max-w-[500px] lg:max-w-none relative z-10"
          >
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-secondary to-black p-8 flex items-center justify-center group neon-glow">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute w-64 h-64 bg-primary/30 rounded-full blur-[80px] animate-pulse" />

                {/* Central Logo */}
                <div className="relative z-10 w-32 h-32 flex items-center justify-center">
                  <img 
                    src="/Logo.png"
                    alt="Netizens Shield"
                    className="w-full h-full object-contain rounded-xl drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]"
                  />
                </div>

                {/* Floating Icons */}
                <div className="absolute top-10 right-10 p-3 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 shadow-xl animate-[float_4s_ease-in-out_infinite]">
                  <Terminal className="w-6 h-6 text-accent" />
                </div>
                <div className="absolute bottom-16 left-12 p-3 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 shadow-xl animate-[float_5s_ease-in-out_infinite_1s]">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>

                {/* Circuit Overlay */}
                <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M10,50 Q30,20 50,50 T90,50" stroke="url(#grad1)" strokeWidth="0.5" fill="none" />
                  <path d="M10,30 Q40,60 70,30" stroke="url(#grad1)" strokeWidth="0.5" fill="none" />
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#9333EA" stopOpacity="0" />
                      <stop offset="50%" stopColor="#9333EA" stopOpacity="1" />
                      <stop offset="100%" stopColor="#9333EA" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Decorative Background Shape */}
            <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 bg-gradient-to-br from-primary to-accent opacity-10 rounded-full blur-[80px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}