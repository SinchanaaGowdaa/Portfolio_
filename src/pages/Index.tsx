import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <section id="about" className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed italic font-serif">
            "Experienced in coordinating with stakeholders, assisting in requirement discussions, and working closely with development teams to ensure timely and aligned project delivery. Strong documentation, presentation, and communication skills along with front-end development."
          </p>
        </div>
      </section>
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
