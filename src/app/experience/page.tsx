"use client";

import React from "react";
import { ArrowLeft, Briefcase } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Heading from "@/components/Heading";

const experiences = [
  {
    id: "0",
    title: "Technical Director (Software & AI)",
    company: "Skola Labs Tech Sdn Bhd",
    location: "Malaysia",
    period: "March 2025 - Ongoing",
    responsibilities: [
      "Designed and delivered website and system architecture for a healthcare clinic, covering UX, frontend, and backend integration",
      "Built and managed backend systems using PostgreSQL and Supabase, including auth, role-based access, and data modelling",
      "Integrated AI agents, automation workflows, and third-party APIs",
    ],
  },
  {
    id: "1",
    title: "Trust & Safety Associate (Korean Speaker)",
    company: "Accenture",
    location: "Malaysia",
    period: "June 2024 - Feb 2025",
    responsibilities: [
      "Reviewed, classified and removed over 1,000 pieces of user-generated content weekly based on client-specific guidelines, ensuring community safety and platform compliance",
      "Monitored and adapted to frequent updates in client policies using internal moderation tools, maintaining 98% accuracy in content decisions",
      "Analyzed digital content trends and flagged potential risks, providing actionable insights that led to improvements in AI moderation systems and reduced harmful content exposure by 20%",
    ],
  },
  {
    id: "2",
    title: "Software Developer (Part-Time)",
    company: "Epic Startups",
    location: "Malaysia",
    period: "April 2023 - May 2024",
    responsibilities: [
      "Collaborated closely with UI/UX designers to develop front-end functionalities and design elements for web applications, ensuring a seamless and intuitive user experience",
      "Implemented responsive designs and optimized website performance across various devices and screen sizes",
      "Worked on fixing bugs and resolving issues in existing applications, contributing to the stability and functionality of the software",
      "Assisted in the development of new features and functionalities, including user authentication, data visualization, and interactive components",
    ],
  },
  {
    id: "3",
    title: "AI Content Moderator (Korean Speaker)",
    company: "Tech Mahindra",
    location: "Malaysia",
    period: "April 2023 - May 2024",
    responsibilities: [
      "Reviewed and analyzed user-generated content in Korean language to ensure alignment with platform policies, maintaining a 98% compliance rate on Google Gemini",
    ],
  },
];

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <section className="relative py-20 lg:py-24 xl:py-28 pt-32">
        <div className="container mx-auto px-4 relative z-2">
          <Heading
            className="md:max-w-md lg:max-w-2xl mb-16"
            tag="Career"
            title="Work Experience"
            text="A detailed overview of my professional journey"
          />

          {/* Experience List */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/10 hidden md:block" />

              <div className="space-y-8">
                {experiences.map((item, index) => (
                  <div key={item.id} className="relative flex gap-6 md:gap-8">
                    {/* Timeline dot */}
                    <div className="hidden md:flex items-start pt-1">
                      <div className="relative z-10 w-16 h-16 rounded-full bg-gray-900 border-2 border-white/20 flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8 md:pb-0">
                      <div className="rounded-2xl bg-transparent backdrop-blur-sm border border-white/10 p-6 md:p-8 transition-all hover:border-white/20">
                        {/* Title and Company Info */}
                        <div className="mb-6">
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                            {item.title}
                          </h3>
                          <p className="text-base md:text-lg text-gray-300">
                            {item.company} | {item.location} | {item.period}
                          </p>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-white/10 mb-6" />

                        {/* Responsibilities */}
                        <ul className="space-y-3">
                          {item.responsibilities.map((responsibility, idx) => (
                            <li
                              key={idx}
                              className="text-gray-400 text-base leading-7 flex items-start"
                            >
                              <span className="text-white mr-3 mt-2 shrink-0">
                                •
                              </span>
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
