import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  alt?: boolean;
}

const SectionWrapper = ({ id, title, subtitle, children, alt }: SectionWrapperProps) => {
  return (
    <section id={id} className={`py-20 md:py-28 ${alt ? "section-alt" : ""}`}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground max-w-lg mx-auto">{subtitle}</p>
          )}
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
        </motion.div>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
