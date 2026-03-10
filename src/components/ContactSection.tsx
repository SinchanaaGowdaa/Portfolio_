import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 section-alt">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            I'm always open to new opportunities and collaborations.
          </p>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-10" />

          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "sinchanamanjunath006@gmail.com",
                href: "mailto:sinchanamanjunath006@gmail.com",
                isEmail: true,
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "Sinchana Gowda",
                href: "https://www.linkedin.com/in/sinchana-gowdaa-3b1a092a2/",
              },
              { icon: MapPin, label: "Location", value: "Mandya, Karnataka" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-gradient rounded-xl p-5 border border-border"
              >
                <item.icon size={20} className="text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-sm font-medium text-foreground hover:text-primary transition-colors ${
                      item.isEmail ? "break-all" : "whitespace-nowrap"
                    }`}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-foreground whitespace-nowrap">
                    {item.value}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
