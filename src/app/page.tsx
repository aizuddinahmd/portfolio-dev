import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
// import Features from "@/components/Features";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] bg-black">
      <Hero />
      <Services />
      {/* <Features /> */}
      <FeaturedProjects />
      <Skills />
      <Experience />
    </div>
  );
}
