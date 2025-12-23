"use client";

import React from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
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

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <section className="relative py-20 lg:py-24 xl:py-28 pt-32">
        <div className="container mx-auto px-4 relative z-2">
          <Heading
            className="md:max-w-md lg:max-w-2xl mb-16"
            tag="Portfolio"
            title="All Projects"
            text="A collection of my recent work and projects"
          />

          {/* Projects List */}
          <div className="flex flex-col gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-3xl bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border border-white/10 overflow-hidden transition-all hover:border-white/20"
              >
                <div className="flex flex-col lg:flex-row">
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

                    {/* Metadata */}
                    {/* <div className="flex flex-wrap gap-8 lg:gap-12 mt-auto pt-6">
                      <div className="flex flex-col">
                        <span className="text-2xl lg:text-3xl font-bold text-blue-400 mb-1">
                          {project.country}
                        </span>
                        <span className="text-sm text-white">Country</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-2xl lg:text-3xl font-bold text-blue-400 mb-1">
                          {project.timeOfWorking}
                        </span>
                        <span className="text-sm text-white">
                          Time of working
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-2xl lg:text-3xl font-bold text-blue-400 mb-1">
                          {project.year}
                        </span>
                        <span className="text-sm text-white">Years</span>
                      </div>
                    </div>
                  </div> */}
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
                    <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10">
                      <span className="text-xs text-gray-400 uppercase tracking-wider">
                        {project.categoryTag}
                      </span>
                      <div className="flex items-center gap-4">
                        <Link
                          href={project.liveDemoUrl}
                          className="text-sm text-white hover:text-gray-300 transition-colors flex items-center gap-1.5"
                        >
                          Live Demo
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                        <Link
                          href={project.codeUrl}
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
