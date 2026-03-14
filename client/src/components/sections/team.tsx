import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const team = [
  {
    name: "Shams El Deen Mohamed",
    role: "Founder & CEO",
    initials: "SM",
    image: "/team/shams.jpg"

  },
  {
    name: "Rawan Essam",
    role: "Co-Founder & HOC",
    initials: "RE",
    image: "/team/rawan.jpg"
  },
  {
    name: "Andrew Amgad",
    role: "CMO",
    initials: "AE",
    image: "/team/andrew.png"
  },
  {
    name: "Abd-ElRahman",
    role: "CTO",
    initials: "RA",
    image: "/team/abdo.jpg"
  },
  {
    name: "Tasneem Morsy",
    role: "Events Manager",
    initials: "RA",
    image: "/team/tasneem.jpg"
  },
  {
    name: "Afnan Ahmed",
    role: "HR Manager",
    initials: "RA",
    image: "/team/afnan.jpg"
  }
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Management Team</h2>
          <p className="text-muted-foreground text-lg">
            Meet the dedicated leaders behind Netizens who are driving our mission forward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card rounded-xl border border-white/10 p-6 text-center hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-background shadow-md group-hover:border-primary/40 transition-colors">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-background shadow-md group-hover:border-primary/40 transition-colors">
                  <Avatar className="w-full h-full">
                    {member.image && (
                      <AvatarImage
                        src={member.image}
                        alt={member.name}
                        className="object-cover"
                      />
                    )}
                    <AvatarFallback className="bg-primary/10 text-primary font-bold text-xl">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>

              <h3 className="font-bold text-lg mb-1 text-foreground">{member.name}</h3>
              <Badge variant="secondary" className="mb-4 font-normal bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                {member.role}
              </Badge>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-secondary to-background border border-white/10 rounded-2xl text-center shadow-lg relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
          <h3 className="text-2xl font-bold mb-4 text-foreground">Diversity in Action</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed">
            Netizens Team brings together students from diverse academic backgrounds including Computer Science, Business, and Information Systems. This diversity empowers us to build inclusive content and approach challenges with both technical expertise and real-world relevance.
          </p>
        </div>
      </div>
    </section>
  );
}
