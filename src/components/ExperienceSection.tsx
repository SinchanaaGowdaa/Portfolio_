import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Briefcase } from "lucide-react";
import rankbookLogo from "@/assets/rankbook-logo.png";
import kdem from "@/assets/kdem-logo.png";
import dotch from "@/assets/dotch-logo.png";

const experiences = [
  {
    company: "RankBook Learning & Software Solutions Pvt Ltd",
    role: "Developer",
    period: "Nov 2024 – Present",
    description:
      "Worked on real-world projects involving web application development, contributed to Skill Karnataka, Rideze Eco & TheKreativerse initiative. Was part of Bengaluru Tech Summit 2024 and Mysuru Big Tech Show 2025. Collaborated with cross-functional teams and conducted product demos for stakeholders.",
    logo: rankbookLogo,
  },
  {
    company: "Karnataka Digital Economy Mission (KDEM)",
    role: "Intern",
    period: "Jun 2025 – Jul 2025",
    description:
      "Contributed to Mysuru Tech Summit 2025, coordinated with stakeholders, facilitated smooth communication between teams. Gained exposure to large-scale project coordination and ecosystem-level collaboration.",
    logo: kdem,
  },
  {
    company: "DOTCH Endeavour Pvt Ltd",
    role: "Software Development Intern",
    period: "Oct 2023 – Nov 2023",
    description:
      "Worked on live client projects involving web development and gained practical exposure to development workflows and team collaboration.",
    logo: dotch,
  },
];

const ExperienceSection = () => {
  return (
    <SectionWrapper
      id="experience"
      title="Experience"
      subtitle="My professional journey"
      alt
    >
      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="card-gradient rounded-2xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
                {exp.logo ? (
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-10 h-10 object-contain"
                  />
                ) : (
                  <Briefcase size={20} className="text-primary" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-serif font-semibold text-foreground text-lg">
                    {exp.role}
                  </h3>
                  <span className="badge-custom px-3 py-1 rounded-full text-xs font-medium">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-primary mb-3">
                  {exp.company}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;
