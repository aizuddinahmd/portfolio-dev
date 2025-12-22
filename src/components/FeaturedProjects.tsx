"use client";

import React from "react";
import { Code, ExternalLink } from "lucide-react";
import Link from "next/link";

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
    imageUrl: "/images/projects/klinikdrtwins.png",
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
    imageUrl: "/images/projects/thewellnest-admin.png",
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
    imageUrl: "/images/projects/MYND-platform.png",
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
    imageUrl: "/images/projects/skolalab.png",
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
    imageUrl: "/images/projects/euft-website.png",
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
    imageUrl: "/images/projects/tmr-games.png",
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
    imageUrl: "/images/projects/lms-platform.png",
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
    imageUrl: "/images/projects/the-wellnest.png",
  },
];

import Heading from "./Heading";

const Section = ({
  className,
  id,
  children,
}: {
  className?: string;
  id?: string;
  children: React.ReactNode;
}) => {
  return (
    <section
      id={id}
      className={`relative py-10 lg:py-16 xl:py-20 ${className || ""}`}
    >
      {children}
    </section>
  );
};

const FeaturedProjects = () => {
  return (
    <Section id="projects" className="bg-black text-white">
      <div className="container mx-auto px-4 relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          tag="Portfolio"
          title="Featured Projects"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {projects.map((item) => (
            <div
              className="block group relative w-full rounded-2xl bg-transparent backdrop-blur-sm border border-white/10 p-8 transition-all hover:border-white/20 cursor-pointer"
              key={item.id}
            >
              {/* Header Section */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-white pr-4 flex-1">
                  {item.title}
                </h3>
                {/* <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full border border-white/20 shrink-0">
                  <Code className="w-4 h-4" />
                  <span className="text-xs font-medium">{item.category}</span>
                </div> */}
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-6 mb-6">
                {item.description}
              </p>

              {/* Technology Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-white/5 rounded-full text-xs text-white border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
                {item.moreTechnologies > 0 && (
                  <span className="px-3 py-1.5 bg-white/5 rounded-full text-xs text-white border border-white/10">
                    +{item.moreTechnologies} more
                  </span>
                )}
              </div>

              {/* Features Section */}
              {/* <ul className="space-y-2 mb-6">
                {item.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-300 flex items-start"
                  >
                    <span className="text-white mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul> */}

              {/* Footer Section */}
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10">
                <span className="text-xs text-gray-400 uppercase tracking-wider">
                  {item.categoryTag}
                </span>
                <div className="flex items-center gap-4">
                  <Link
                    href={item.liveDemoUrl}
                    className="text-sm text-white hover:text-gray-300 transition-colors flex items-center gap-1.5"
                  >
                    Live Demo
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                  <Link
                    href={item.codeUrl}
                    className="text-sm text-white hover:text-gray-300 transition-colors flex items-center gap-1.5"
                  >
                    Code
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FeaturedProjects;
