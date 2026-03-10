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
      <section id="about" className="pt-4 md:pt-6 pb-6">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed italic font-serif">
            "Full-stack developer specializing in building and deploying
            scalable, high-performance web applications. Experienced in crafting
            responsive front-end solutions and managing production-ready
            deployments. Skilled in translating requirements into functional
            demo products and proof-of-concepts while collaborating closely with
            stakeholders to ensure aligned, on-time delivery. Strong in
            communication, documentation, and cross-team coordination from
            concept to launch."
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
