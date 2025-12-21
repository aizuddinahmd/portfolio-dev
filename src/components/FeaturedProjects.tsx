"use client";

import React from "react";
import { Code, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: "0",
    title: "SyncVerse | AI-Powered Roadmap & Career Navigator",
    description:
      "Web platform that helps students and developers generate personalized tech roadmaps and guidance.",
    category: "AI / DATA",
    technologies: ["TypeScript", "React", "Vite", "Tailwind CSS", "shadcn/ui"],
    moreTechnologies: 5,
    features: [
      "Goal-based roadmap generation for different tech stacks (web, AI, DSA, etc.)",
      "Step-by-step structured paths with milestones and checkpoints",
      "Clean, modern UI using shadcn/ui and Aceternity components",
    ],
    categoryTag: "AI",
    liveDemoUrl: "#",
    codeUrl: "#",
  },
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-featured online store built with Next.js, Stripe, and Tailwind CSS. Features include cart management, user authentication, and payment processing.",
    category: "WEB / E-COMMERCE",
    technologies: ["Next.js", "Tailwind CSS", "Stripe", "PostgreSQL"],
    moreTechnologies: 3,
    features: [
      "Cart management and user authentication",
      "Secure payment processing with Stripe",
      "Responsive design with modern UI components",
    ],
    categoryTag: "WEB",
    liveDemoUrl: "#",
    codeUrl: "#",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A productivity tool for teams to track progress and manage tasks. Real-time updates using Socket.io and a drag-and-drop interface.",
    category: "WEB / PRODUCTIVITY",
    technologies: ["React", "Tailwind CSS", "Socket.io", "PostgreSQL"],
    moreTechnologies: 2,
    features: [
      "Real-time updates using Socket.io",
      "Drag-and-drop interface for task management",
      "Team collaboration features",
    ],
    categoryTag: "PRODUCTIVITY",
    liveDemoUrl: "#",
    codeUrl: "#",
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
              className="block group relative w-full rounded-2xl bg-transparent backdrop-blur-sm border border-white/10 p-8 transition-all hover:border-white/20"
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
