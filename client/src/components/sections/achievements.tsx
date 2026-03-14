import { motion } from "framer-motion";
import { Trophy, Calendar, Users, FileText } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: "3+",
    label: "Years in Ecosystem",
    description: "Operating as a youth-led initiative since 2022"
  },
  {
    icon: Users,
    value: "120k+",
    label: "Students Reached",
    description: "Through sessions, events, and content"
  },
  {
    icon: Trophy,
    value: "30+",
    label: "Event Partners",
    description: "Universities, organizations, and NGOs"
  },
  {
    icon: FileText,
    value: "100+",
    label: "Content Pieces",
    description: "Original educational content produced"
  }
];

export default function Achievements() {
  return (
    <section className="py-16 bg-primary/5 border-y border-primary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">Our Achievements</h2>
          <p className="text-muted-foreground">Making a real impact in the tech community</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-primary font-medium mb-2">{stat.label}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
