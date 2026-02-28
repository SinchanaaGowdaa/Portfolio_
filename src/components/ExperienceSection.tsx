import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "RankBook Learning & Software Solutions Pvt Ltd",
    role: "Developer",
    period: "Nov 2024 – Present",
    description:
      "Worked on real-world projects involving web application development, contributed to Skill Karnataka, Rideze Eco & TheKreativerse initiative. Was part of Bengaluru Tech Summit 2024 and Mysuru Big Tech Show 2025. Collaborated with cross-functional teams and conducted product demos for stakeholders.",
  },
  {
    company: "Karnataka Digital Economy Mission (KDEM)",
    role: "Intern",
    period: "Jun 2025 – Jul 2025",
    description:
      "Contributed to Mysuru Tech Summit 2025, coordinated with stakeholders, facilitated smooth communication between teams. Gained exposure to large-scale project coordination and ecosystem-level collaboration.",
  },
  {
    company: "DOTCH Endeavour Pvt Ltd",
    role: "Software Development Intern",
    period: "Oct 2023 – Nov 2023",
    description:
      "Worked on live client projects involving web development and gained practical exposure to development workflows and team collaboration.",
  },
];

const ExperienceSection = () => {
  return (
    <SectionWrapper id="experience" title="Experience" subtitle="My professional journey" alt>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}
            >
              <div className="card-gradient rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Briefcase size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-foreground text-lg">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                  </div>
                </div>
                <span className="badge-custom px-3 py-1 rounded-full text-xs font-medium mb-3 inline-block">
                  {exp.period}
                </span>
                <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;
