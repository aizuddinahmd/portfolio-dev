"use client";

import React from "react";
import Heading from "./Heading";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiDocker,
} from "react-icons/si";

const skills = [
  { id: "0", title: "HTML", icon: FaHtml5, color: "#E34F26" },
  { id: "1", title: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { id: "2", title: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { id: "3", title: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { id: "4", title: "React", icon: FaReact, color: "#61DAFB" },
  { id: "5", title: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { id: "6", title: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { id: "7", title: "Node.js", icon: FaNodeJs, color: "#339933" },
  { id: "8", title: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { id: "9", title: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { id: "10", title: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { id: "11", title: "AWS", icon: FaAws, color: "#232F3E" },
  { id: "12", title: "Git", icon: FaGitAlt, color: "#F05032" },
  { id: "13", title: "Python", icon: FaPython, color: "#3776AB" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-10 lg:py-16 xl:py-20 bg-black text-white"
    >
      <div className="container mx-auto px-4 relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          tag="Tech Stack"
          title="Technical Skills"
          text="Skills I have mastered yet"
        />

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {skills.map((item) => (
            <div
              key={item.id}
              className="group relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gray-900 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <item.icon
                size={40}
                className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                style={{ color: item.color }}
              />

              {/* Tooltip */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
