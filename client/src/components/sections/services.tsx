import { motion } from "framer-motion";
import { Terminal, Users, Briefcase, Code } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";

const initiatives = [
  {
    icon: Terminal,
    title: "Technical Education",
    description:
      "Structured learning paths in Programming, AI, and Cybersecurity focused on real-world application.",
  },
  {
    icon: Users,
    title: "Community Building",
    description:
      "Student-led chapters, events, and a strong network connecting ambitious tech-driven students.",
  },
  {
    icon: Code,
    title: "Real-World Experience",
    description:
      "Projects, hackathons, and challenges that turn learners into builders with practical skills.",
  },
  {
    icon: Briefcase,
    title: "Career Preparation",
    description:
      "Soft skills, leadership, and real exposure to industry expectations and career paths.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />

      {/* WHAT WE ACTUALLY DO */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            What We Actually Do
          </h2>
          <p className="text-muted-foreground text-lg">
            We’re not just a community. <br />
            We operate as a system designed to build real tech talent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {initiatives.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 border border-white/10 group-hover:border-primary/30 transition-colors duration-300`}
                  >
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {item.title}
                  </CardTitle>
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

        {/* HOW NETIZENS WORKS */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            How Netizens Works
          </h2>
          <p className="text-muted-foreground text-lg">
            From learning the basics to leading others — here’s the journey.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 text-center mb-20">
          {/* LEARN */}
          <motion.div
            className="max-w-xs"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-xl font-bold text-primary mb-2">Learn</h3>
            <p className="text-muted-foreground">
              Gain technical knowledge through structured sessions.
            </p>
          </motion.div>

          <span className="text-2xl font-bold text-primary hidden md:block">→</span>

          {/* BUILD */}
          <motion.div
            className="max-w-xs"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-primary mb-2">Build</h3>
            <p className="text-muted-foreground">
              Apply your skills through real projects and challenges.
            </p>
          </motion.div>

          <span className="text-2xl font-bold text-primary hidden md:block">→</span>

          {/* LEAD */}
          <motion.div
            className="max-w-xs"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-primary mb-2">Lead</h3>
            <p className="text-muted-foreground">
              Become an instructor, mentor, or chapter leader.
            </p>
          </motion.div>
        </div>

        {/* TIMELINE: OUR JOURNEY */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Our Journey
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              <span className="font-bold text-primary">2024 —</span> Netizens Team was founded with a vision to change how students learn tech.
            </p>
            <p>
              <span className="font-bold text-primary">2025 —</span> Delivered sessions, built a growing community, and trained hundreds of students.
            </p>
            <p>
              <span className="font-bold text-primary">2026 —</span> Expanding through chapters and scaling impact across universities.
            </p>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="text-center max-w-xl mx-auto mt-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Be Part of the System
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Whether you want to learn, build, or lead — Netizens gives you the platform to do it.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#join" className="btn btn-primary">
              Join Netizens
            </Link>
            <Link href="#chapters" className="btn btn-outline-primary">
              Start a Chapter
            </Link>
            <Link href="#instructors" className="btn btn-accent">
              Become an Instructor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}