import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering (CSE)",
    school: "NIE North, Mysuru",
    score: "CGPA: 8.0",
    year: "May 2025",
  },
  {
    degree: "Higher Senior Secondary (PCMB)",
    school: "Daksha PU College, Mysuru",
    score: "82%",
    year: "2021",
  },
  {
    degree: "Senior Secondary (CBSE)",
    school: "Montfort Vidyasagar CBSE School, Mandya",
    score: "80%",
    year: "2019",
  },
];

const EducationSection = () => {
  return (
    <SectionWrapper id="education" title="Education" alt>
      <div className="grid md:grid-cols-3 gap-6">
        {education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="card-gradient rounded-xl p-6 border border-border text-center"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <GraduationCap size={20} className="text-primary" />
            </div>
            <h3 className="font-serif font-semibold text-foreground mb-1">{edu.degree}</h3>
            <p className="text-sm text-muted-foreground mb-3">{edu.school}</p>
            <div className="flex items-center justify-center gap-3">
              <span className="badge-custom px-3 py-1 rounded-full text-xs font-medium">{edu.score}</span>
              <span className="badge-custom px-3 py-1 rounded-full text-xs font-medium">{edu.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default EducationSection;
