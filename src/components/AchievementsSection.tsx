import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Award, Heart, Palette, Languages } from "lucide-react";

const items = [
  {
    icon: Award,
    title: "State-Level Yoga Competitor",
    desc: "3rd place in Karnataka State Amateur Yoga Championship",
  },
  {
    icon: Heart,
    title: "Youth For Seva – Volunteer",
    desc: "Organized educational & technical workshops. Served as resource person for college-level sessions.",
  },
  {
    icon: Palette,
    title: "Interests",
    desc: "Dance, Sketching, Yoga",
  },
  {
    icon: Languages,
    title: "Languages",
    desc: "Kannada, English",
  },
];

const AchievementsSection = () => {
  return (
    <SectionWrapper id="achievements" title="Achievements & Interests">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="card-gradient rounded-xl p-6 border border-border text-center hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <item.icon size={20} className="text-primary" />
            </div>
            <h3 className="font-serif font-semibold text-foreground mb-2 text-sm">{item.title}</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default AchievementsSection;
