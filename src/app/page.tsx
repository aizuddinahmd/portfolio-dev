import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <FeaturedProjects />
      </main>
    </div>
  );
}
