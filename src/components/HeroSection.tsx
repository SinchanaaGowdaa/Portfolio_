import { motion } from "framer-motion";
import { MapPin, Mail, Linkedin, ArrowDown, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-[35vh] hero-gradient flex items-start justify-center relative overflow-hidden py-6">
      {/* Decorative elements (subtle) */}
      <div className="absolute top-12 right-8 w-36 h-36 rounded-full bg-primary/8 blur-3xl animate-float" />
      <div
        className="absolute bottom-6 left-6 w-56 h-56 rounded-full bg-accent/15 blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="max-w-2xl mx-auto px-4 py-6 relative z-10">
        <div className="flex flex-col items-start gap-3">
          {/* Text Content */}
          <motion.div
            className="w-full text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 badge-custom px-3 py-1.5 rounded-full text-sm font-medium mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles size={14} /> Software Developer · Quick Learner
            </motion.div>

            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 leading-tight whitespace-nowrap">
              Sinchana Manjunath
            </h1>

            <p className="text-muted-foreground max-w-xl text-sm md:text-base leading-relaxed mb-4">
              Motivated and adaptable professional with a strong interest in
              software development and hands-on experience building web
              applications.
            </p>

            <div className="flex flex-wrap items-center justify-start gap-3 mb-4">
              <a
                href="mailto:sinchanamanjunath006@gmail.com"
                className="flex items-center gap-2 badge-custom px-4 py-2 rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
              >
                <Mail size={14} /> Email Me
              </a>
              <span className="flex items-center gap-2 badge-custom px-4 py-2 rounded-full text-sm font-medium">
                <MapPin size={14} /> Mandya, KA
              </span>
              <a
                href="https://www.linkedin.com/in/sinchana-gowdaa-3b1a092a2/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 badge-custom px-4 py-2 rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
            </div>

            <motion.a
              href="#about"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work <ArrowDown size={16} />
            </motion.a>
          </motion.div>
          {/* Illustration removed to tighten layout and keep name on one line */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
