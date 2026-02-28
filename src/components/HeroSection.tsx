import { motion } from "framer-motion";
import { MapPin, Mail, Linkedin, ArrowDown, Sparkles } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden pt-20">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/8 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/15 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-40 left-1/4 w-48 h-48 rounded-full bg-secondary/30 blur-2xl animate-float" style={{ animationDelay: "0.8s" }} />

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 badge-custom px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles size={14} /> Software Developer · Quick Learner
            </motion.div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
              Sinchana Manjunath
            </h1>

            <p className="text-muted-foreground max-w-xl text-lg md:text-xl leading-relaxed mb-8">
              Motivated and adaptable professional with a strong interest in software development and hands-on experience building web applications.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
              <a href="mailto:sinchanamanjunath006@gmail.com" className="flex items-center gap-2 badge-custom px-4 py-2 rounded-full text-sm font-medium hover:opacity-80 transition-opacity">
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
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work <ArrowDown size={16} />
            </motion.a>
          </motion.div>

          {/* Illustration */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src={heroIllustration}
              alt="Developer workspace illustration"
              className="w-56 md:w-64 lg:w-72 rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
