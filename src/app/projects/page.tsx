"use client";

import React from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import klinikDrtwins from "@/assets/projects/klinik-drtwins.png";
import thewellnestAdmin from "@/assets/projects/thewellnest-admin.png";
import myndPlatform from "@/assets/projects/MYND-platform.png";
import skolalabs from "@/assets/projects/skolalabs.png";
import euftWebsite from "@/assets/projects/euft-website.png";
import tmrGames from "@/assets/projects/tmr-games.png";
import lmsPlatform from "@/assets/projects/lms-platform.png";
import theWellnest from "@/assets/projects/the-wellnest.png";

const projects = [
  {
    id: "0",
    title: "Klinik Dr Twins",
    description:
      "Website for Klinik Dr Twins, a clinic that provides medical services to patients. A comprehensive healthcare platform designed to streamline patient management and improve accessibility to medical services.",
    category: "WEB / CLINIC",
    technologies: ["Next.js", "Tailwind CSS", "React", "Node.js"],
    moreTechnologies: 0,
    features: [],
    categoryTag: "CLINIC",
    liveDemoUrl: "https://klinikdrtwins.my",
    codeUrl: "https://github.com/aizuddinahmd/klinikdrtwins",
    image: klinikDrtwins,
    country: "Malaysia",
    timeOfWorking: "3 months",
    year: "2024",
  },
  {
    id: "1",
    title: "The Wellnest Admin Dashboard",
    description:
      "Admin dashboard for The Wellnest, a wellnest centre that provides services for facial, skin, and body treatments. Features include appointment scheduling, patient management, and inventory management.",
    category: "WEB / CLINIC",
    technologies: ["Next.js", "Tailwind CSS", "React", "Node.js"],
    moreTechnologies: 0,
    features: [],
    categoryTag: "ADMIN DASHBOARD",
    liveDemoUrl: "https://the-wellnest-admin.vercel.app/",
    codeUrl: "https://github.com/aizuddinahmd/the-wellnest-admin",
    image: thewellnestAdmin,
    country: "Malaysia",
    timeOfWorking: "4 months",
    year: "2024",
  },
  {
    id: "2",
    title: "MYND Portal",
    description:
      "A community building platform for the tech community in Malaysia. Features include event management tools, learning management system, and a forum for the community to discuss and share their ideas.",
    category: "WEB / COMMUNITY",
    technologies: ["Next.js", "Supabase", "Node.js", "PostgreSQL"],
    moreTechnologies: 2,
    features: [],
    categoryTag: "COMMUNITY",
    liveDemoUrl: "https://skolalab-educhain.vercel.app/",
    codeUrl: "https://github.com/aizuddinahmd/skolalab-educhain",
    image: myndPlatform,
    country: "Malaysia",
    timeOfWorking: "6 months",
    year: "2024",
  },
  {
    id: "3",
    title: "SkolaLab Website",
    description:
      "Official website for Skola Lab Technologies, a community that provides blockchain education to students and professionals. A modern and engaging platform showcasing educational resources and community initiatives.",
    category: "WEB / COMMUNITY",
    technologies: ["Vite.js", "Tailwind CSS", "React", "TypeScript"],
    moreTechnologies: 0,
    features: [],
    categoryTag: "EDUCATION",
    liveDemoUrl: "https://skolalab-landingpage.vercel.app/",
    codeUrl: "https://github.com/aizuddinahmd/skolalab-landingpage",
    image: skolalabs,
    country: "Malaysia",
    timeOfWorking: "2 months",
    year: "2024",
  },
  {
    id: "4",
    title: "EUFT Website",
    description:
      "Website for football game called EUFT (European Football Tournament). An interactive platform designed to engage football enthusiasts with tournament information, live updates, and community features.",
    category: "WEB / COMMUNITY",
    technologies: ["Vite.js", "TypeScript"],
    moreTechnologies: 0,
    features: [],
    categoryTag: "WEBSITE",
    liveDemoUrl: "https://euft-amber.vercel.app/",
    codeUrl: "https://github.com/aizuddinahmd/euft",
    image: euftWebsite,
    country: "Malaysia",
    timeOfWorking: "1 month",
    year: "2024",
  },
  {
    id: "5",
    title: "TMR Games Website",
    description:
      "Website for TMR Games, a company that provides games for the public. A vibrant and engaging platform showcasing game offerings and providing an interactive experience for gaming enthusiasts.",
    category: "WEB / COMMUNITY",
    technologies: ["Vite.js", "TypeScript"],
    moreTechnologies: 0,
    features: [],
    categoryTag: "WEBSITE",
    liveDemoUrl: "https://tmr-games.vercel.app/",
    codeUrl: "https://github.com/aizuddinahmd/tmr-games",
    image: tmrGames,
    country: "Malaysia",
    timeOfWorking: "1 month",
    year: "2024",
  },
  {
    id: "6",
    title: "LMS Platform",
    description:
      "LMS platform for Skola Labs to provide blockchain education to students and professionals. A comprehensive learning management system with course management, progress tracking, and interactive learning tools.",
    category: "WEB / COMMUNITY",
    technologies: ["Next.js", "Tailwind CSS", "React", "Node.js"],
    moreTechnologies: 0,
    features: [],
    categoryTag: "EDUCATION",
    liveDemoUrl: "https://kampus-sekolah-kripto.vercel.app/",
    codeUrl: "https://github.com/aizuddinahmd/eduhub-kampus",
    image: lmsPlatform,
    country: "Malaysia",
    timeOfWorking: "5 months",
    year: "2024",
  },
  {
    id: "7",
    title: "TWN by Dr Twins",
    description:
      "Website for TWN by Dr Twins, a wellnest center that provides services for facial, skin and body. They also provides pilates classes and become a women's hub. A comprehensive platform showcasing wellness services and community programs.",
    category: "WEB / COMMUNITY",
    technologies: ["Next.js", "Tailwind CSS", "React", "Node.js"],
    moreTechnologies: 0,
    features: [],
    categoryTag: "WEBSITE",
    liveDemoUrl: "https://www.thewellnest-bdt.my/",
    codeUrl: "https://github.com/aizuddinahmd/the-wellnest",
    image: theWellnest,
    country: "Malaysia",
    timeOfWorking: "3 months",
    year: "2024",
  },
];

function Effect({
  mouseX,
  mouseY,
}: {
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
}) {
  const maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      />
    </div>
  );
}

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const data = {
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  };

  function onMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: {
    currentTarget: HTMLElement;
    clientX: number;
    clientY: number;
  }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={onMouseMove}
      className="group relative rounded-3xl bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border border-white/10 overflow-hidden transition-all hover:border-white/20"
    >
      <Effect {...data.pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="flex flex-col lg:flex-row relative z-10">
        {/* Left Section - Text Content */}
        <div className="flex-1 p-8 lg:p-12 flex flex-col justify-between">
          {/* Title */}
          <div className="mb-6">
            <h3 className="text-2xl lg:text-2xl font-bold text-white mb-6 leading-tight">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-white text-sm lg:text-base leading-7 max-w-2xl">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-white/5 rounded-full text-xs text-white border border-white/10"
              >
                {tech}
              </span>
            ))}
            {project.moreTechnologies > 0 && (
              <span className="px-3 py-1.5 bg-white/5 rounded-full text-xs text-white border border-white/10">
                +{project.moreTechnologies} more
              </span>
            )}
          </div>
          {/* Links */}
          <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10">
            <span className="text-xs text-gray-400 uppercase tracking-wider">
              {project.categoryTag}
            </span>
            <div className="flex items-center gap-4">
              <Link
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white hover:text-gray-300 transition-colors flex items-center gap-1.5"
              >
                Live Demo
                <ExternalLink className="w-4 h-4" />
              </Link>
              <Link
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white hover:text-gray-300 transition-colors flex items-center gap-1.5"
              >
                Code
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
        {/* Right Section - Project Image */}
        <div className="relative w-full lg:w-[500px] xl:w-[600px] m-6 rounded-xl h-80 lg:h-auto lg:min-h-[400px] overflow-hidden bg-gray-900 shrink-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 500px"
          />
        </div>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <section className="relative py-20 lg:py-24 xl:py-28 pt-32">
        <div className="container mx-auto px-4 relative z-2">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <Heading
            className="md:max-w-md lg:max-w-2xl mb-16"
            tag="Portfolio"
            title="All Projects"
            text="A collection of my recent work and projects"
          />

          {/* Projects List */}
          <div className="flex flex-col gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
