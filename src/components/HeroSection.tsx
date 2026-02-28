import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Linkedin, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden pt-20">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-primary font-medium tracking-widest uppercase text-sm mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Software Developer · Quick Learner
          </motion.p>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
            Sinchana <span className="text-gradient">M</span>
          </h1>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-10">
            Motivated and adaptable professional with a strong interest in software development and hands-on experience building web applications.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a href="mailto:sinchanamanjunath006@gmail.com" className="flex items-center gap-2 badge-custom px-4 py-2 rounded-full text-sm font-medium hover:opacity-80 transition-opacity">
              <Mail size={14} /> sinchanamanjunath006@gmail.com
            </a>
            <a href="tel:+917019763951" className="flex items-center gap-2 badge-custom px-4 py-2 rounded-full text-sm font-medium hover:opacity-80 transition-opacity">
              <Phone size={14} /> +91-7019763951
            </a>
            <span className="flex items-center gap-2 badge-custom px-4 py-2 rounded-full text-sm font-medium">
              <MapPin size={14} /> Mandya, Karnataka
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
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work <ArrowDown size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
