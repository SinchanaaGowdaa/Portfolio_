import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const technicalSkills = [
  "HTML", "Tailwind CSS", "JavaScript", "ReactJS", "NodeJS", "SQL", "MongoDB", "Java",
  "AWS (EC2, VPC, IAM, Load Balancer, ASG)"
];

const tools = [
  "VS Code", "Eclipse IDE", "GitHub", "Git Bash", "MySQL", "MongoDB", "Postman", "AWS", "Figma", "Netlify", "Vercel"
];

const softSkills = [
  "Communication", "Leadership", "Adaptability", "Quick Learning", "Team Collaboration"
];

const SkillBadge = ({ skill, index }: { skill: string; index: number }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05, duration: 0.3 }}
    className="badge-custom px-4 py-2 rounded-full text-sm font-medium"
  >
    {skill}
  </motion.span>
);

const SkillsSection = () => {
  return (
    <SectionWrapper id="skills" title="Skills & Tools" subtitle="Technologies and tools I work with">
      <div className="space-y-10">
        <div>
          <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Technical Skills</h3>
          <div className="flex flex-wrap gap-3">
            {technicalSkills.map((skill, i) => <SkillBadge key={skill} skill={skill} index={i} />)}
          </div>
        </div>
        <div>
          <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Tools</h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((skill, i) => <SkillBadge key={skill} skill={skill} index={i} />)}
          </div>
        </div>
        <div>
          <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Soft Skills</h3>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, i) => <SkillBadge key={skill} skill={skill} index={i} />)}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
