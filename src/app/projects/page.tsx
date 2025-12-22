"use client";

import React from "react";
import { ExternalLink, Code, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Heading from "@/components/Heading";

// Import project images
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
      "Website for Klinik Dr Twins, a clinic that provides medical services to patients.",
    category: "WEB / CLINIC",
    technologies: ["Next.js", "Tailwind CSS", "React", "Node.js"],
    moreTechnologies: 0,
    features: [],
    categoryTag: "CLINIC",
    liveDemoUrl: "https://klinikdrtwins.my",
    codeUrl: "https://github.com/aizuddinahmd/klinikdrtwins",
    image: klinikDrtwins,
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
  },
  {
    id: "2",
    title: "MYND Portal",
    description:
      "A community building platforn for the tech community in Malaysia. Features include event management tools, learning management system, and a forum for the community to discuss and share their ideas.",
    category: "WEB / COMMUNITY",
    technologies: ["Next.js", "Supabase", "Node.js", "PostgreSQL"],
    moreTechnologies: 2,
    features: [],
    categoryTag: "COMMUNITY",
    liveDemoUrl: "https://skolalab-educhain.vercel.app/",
    codeUrl: "https://github.com/aizuddinahmd/skolalab-educhain",
    image: myndPlatform,
  },
  {
    id: "3",
    title: "SkolaLab Website",
    description:
      "Official website for Skola Lab Technologies, a community that provides blockchain education to students and professionals.",
    category: "WEB / COMMUNITY",
    technologies: ["Vite.js", "Tailwind CSS", "React", "TypeScript"],
    moreTechnologies: 0,
    features: [],
    categoryTag: "EDUCATION",
    liveDemoUrl: "https://skolalab-landingpage.vercel.app/",
    codeUrl: "https://github.com/aizuddinahmd/skolalab-landingpage",
    image: skolalabs,
  },
  {
    id: "4",
    title: "EUFT Website",
    description:
      "Website for football game called EUFT (European Football Tournament)",
    category: "WEB / COMMUNITY",
    technologies: ["Vite.js", "TypeScript"],
    moreTechnologies: 0,
    features: [],
    categoryTag: "WEBSITE",
    liveDemoUrl: "https://euft-amber.vercel.app/",
    codeUrl: "https://github.com/aizuddinahmd/euft",
    image: euftWebsite,
  },
  {
    id: "5",
    title: "TMR Games Website",
    description:
      "Website for TMR Games, a company that provides games for the public.",
    category: "WEB / COMMUNITY",
    technologies: ["Vite.js", "TypeScript"],
    moreTechnologies: 0,
    features: [],
    categoryTag: "WEBSITE",
    liveDemoUrl: "https://tmr-games.vercel.app/",
    codeUrl: "https://github.com/aizuddinahmd/tmr-games",
    image: tmrGames,
  },
  {
    id: "6",
    title: "LMS Platform",
    description:
      "LMS platform for Skola Labs to provide blockchain education to students and professionals.",
    category: "WEB / COMMUNITY",
    technologies: ["Next.js", "Tailwind CSS", "React", "Node.js"],
    moreTechnologies: 0,
    features: [],
    categoryTag: "EDUCATION",
    liveDemoUrl: "https://kampus-sekolah-kripto.vercel.app/",
    codeUrl: "https://github.com/aizuddinahmd/eduhub-kampus",
    image: lmsPlatform,
  },
  {
    id: "7",
    title: "TWN by Dr Twins",
    description:
      "Website for TWN by Dr Twins, a wellnest center that provides services for facial, skin and body. They also provides pilates classes and become a women's hub",
    category: "WEB / COMMUNITY",
    technologies: ["Next.js", "Tailwind CSS", "React", "Node.js"],
    moreTechnologies: 0,
    features: [],
    categoryTag: "WEBSITE",
    liveDemoUrl: "https://www.thewellnest-bdt.my/",
    codeUrl: "https://github.com/aizuddinahmd/the-wellnest",
    image: theWellnest,
  },
];

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

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-2xl bg-transparent backdrop-blur-sm border border-white/10 overflow-hidden transition-all hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/10"
              >
                {/* Project Image */}
                <div className="relative w-full h-48 overflow-hidden bg-gray-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Category Tag */}
                  <div className="mb-3">
                    <span className="text-xs text-gray-400 uppercase tracking-wider">
                      {project.categoryTag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-6 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-white/5 rounded-full text-xs text-white border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1.5 bg-white/5 rounded-full text-xs text-white border border-white/10">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <Link
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-white hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Link>
                    <Link
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-white hover:text-blue-400 transition-colors"
                    >
                      <Code className="w-4 h-4" />
                      Code
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
