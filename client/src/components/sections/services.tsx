import { motion } from "framer-motion";
import { Terminal, Users, Briefcase, Share2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const initiatives = [
  {
    icon: Terminal,
    title: "Education",
    description: "Hands-on workshops, bootcamps, and training in Cybersecurity, AI, Programming, and more.",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Community",
    description: "A growing network of university chapters driving collaboration, events, and peer support.",
    color: "text-accent"
  },
  {
    icon: Briefcase,
    title: "Opportunities",
    description: "Job fairs, freelance bootcamps, competitions, and project-based experiences for career growth.",
    color: "text-blue-400"
  },
  {
    icon: Share2,
    title: "Content",
    description: "High-value social media content that educates, inspires, and simplifies complex tech topics.",
    color: "text-purple-400"
  }
];

export default function WhatWeDo() {
  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">What We Do</h2>
          <p className="text-muted-foreground text-lg">
            We don't just offer services; we build ecosystems. From intensive bootcamps to community-led chapters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {initiatives.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group overflow-hidden relative">
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 border border-white/10 group-hover:border-primary/30 transition-colors duration-300`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
