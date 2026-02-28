import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Skill Karnataka",
    description: "Designed a platform to showcase training programs and job fair details across Karnataka. Worked on the frontend using ReactJS, implementing reusable components and responsive UI.",
    tags: ["ReactJS", "Responsive UI", "Components"],
  },
  {
    title: "Rideze Eco",
    description: "Contributed to Mysuru's first EV car booking platform. Built and enhanced frontend screens and booking workflows using Flutter. Integrated backend services using Supabase.",
    tags: ["Flutter", "Supabase", "EV Booking"],
  },
  {
    title: "TheKreativerse",
    description: "Developed a responsive digital marketing website using web technologies and implemented service listing and client engagement features.",
    tags: ["Web Dev", "Digital Marketing", "Responsive"],
  },
];

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" title="Projects" subtitle="Things I've built">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="card-gradient rounded-xl p-6 border border-border shadow-sm hover:shadow-lg transition-all group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <ExternalLink size={20} className="text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{project.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="badge-custom px-3 py-1 rounded-full text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
