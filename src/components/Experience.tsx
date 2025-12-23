"use client";

import React from "react";
import { Briefcase } from "lucide-react";
import Heading from "./Heading";

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
  {
    id: "4",
    title: "Process Executive (Korean Speaker)",
    company: "Cognizant",
    location: "Malaysia",
    period: "Jan 2021 - Jan 2023",
    responsibilities: [
      "Processed and managed business operations and workflows for Korean-speaking clients",
      "Ensured compliance with company policies and client requirements",
      "Maintained high quality standards in process execution and documentation",
    ],
  },
];

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

const Experience = () => {
  return (
    <Section id="experience" className="bg-transparent text-white">
      <div className="container mx-auto px-4 relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          tag="Career"
          title="Work Experience"
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/10 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((item) => (
                <div key={item.id} className="relative flex gap-6 md:gap-8">
                  {/* Timeline dot */}
                  <div className="hidden md:flex items-start pt-1">
                    <div className="relative z-10 w-16 h-16 rounded-full bg-gray-900 border-2 border-white/20 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-12 md:pb-0">
                    <div className="rounded-2xl bg-transparent backdrop-blur-sm border border-white/10 p-6 md:p-8 transition-all hover:border-white/20">
                      <div className="mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-base text-gray-300 mb-2">
                          {item.company} | {item.location} | {item.period}
                        </p>
                      </div>

                      {/* Responsibilities */}
                      <ul className="space-y-2 mt-4">
                        {item.responsibilities.map((responsibility, idx) => (
                          <li
                            key={idx}
                            className="text-gray-400 text-sm leading-6 flex items-start"
                          >
                            <span className="text-white mr-3 mt-1.5">•</span>
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
    </Section>
  );
};

export default Experience;
