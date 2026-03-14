import { motion } from "framer-motion";
import { Zap, Users, Heart, TrendingUp, ShieldCheck, Globe, Repeat } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Impact Over Hype",
    description: "We don’t just host events — we create change. Every session and project is designed to leave a real mark."
  },
  {
    icon: Users,
    title: "Youth-Led",
    description: "We believe in the power of students to lead, innovate, and build — not just follow."
  },
  {
    icon: Heart,
    title: "Inclusivity",
    description: "We welcome all disciplines and backgrounds. Great ideas are born from collaboration, not silos."
  },
  {
    icon: TrendingUp,
    title: "Growth Through Action",
    description: "We learn by doing. Mistakes are part of the process, and execution beats perfection."
  },
  {
    icon: ShieldCheck,
    title: "Ethics in Tech",
    description: "We stand for responsible innovation. Knowledge without values is just noise."
  },
  {
    icon: Globe,
    title: "Collaboration",
    description: "We grow faster when we grow together — across universities, chapters, and countries."
  },
  {
    icon: Repeat,
    title: "Consistency Wins",
    description: "We stay committed to showing up, improving, and delivering — even when no one’s watching."
  }
];

export default function Values() {
  return (
    <section id="values" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background noise texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3 sticky top-24">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Our Core Values</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              These principles guide our actions and define who we are as a team. We believe in creating a positive impact through our work.
            </p>
            <div className="w-24 h-1 bg-primary rounded-full" />
          </div>

          <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors hover:border-primary/30 group"
              >
                <div className="mb-4 bg-white/5 w-fit p-2 rounded-lg group-hover:text-primary transition-colors">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-100">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
