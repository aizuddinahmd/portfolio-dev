"use client";

import React from "react";
import {
  Code,
  Palette,
  TrendingUp,
  Globe,
  Heart,
  Award,
  GraduationCap,
  Calendar,
  MapPin,
} from "lucide-react";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import { motion } from "framer-motion";
import Aurora from "@/components/Aurora";
import Experience from "@/components/Experience";

const AboutPage = () => {
  const aboutSections = [
    {
      icon: Code,
      title: "Technical Expertise",
      description:
        "Passionate about building scalable web applications and innovative solutions. Specialized in full-stack development with a focus on modern technologies and best practices.",
    },
    {
      icon: Palette,
      title: "Design Thinking",
      description:
        "Believe in creating user-centered designs that balance aesthetics with functionality. Experienced in UI/UX design and translating ideas into beautiful, intuitive interfaces.",
    },
    {
      icon: TrendingUp,
      title: "Growth Mindset",
      description:
        "Continuously learning and adapting to new technologies and methodologies. Always seeking opportunities to grow both personally and professionally.",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description:
        "Experience working with international teams and diverse projects. Fluent in multiple languages including Korean, enabling effective cross-cultural communication.",
    },
  ];

  const values = [
    "Continuous Learning",
    "User-Centered Design",
    "Collaboration",
    "Innovation",
    "Quality First",
    "Problem Solving",
  ];

  const certificates = [
    {
      title: "Certified Associate in Prompt Engineering",
      institution: "Talentlabs",
      date: "February 2024",
    },
    {
      title: "Data Science Bootcamp",
      institution: "Adnexio.edu",
      date: "February 2024",
    },
    {
      title: "Full Stack Developer Bootcamp",
      institution: "Sigma School",
      date: "August 2023",
    },
    {
      title: "Certified Smart Contract Developer",
      institution: "Blockchain Council",
      date: "May 2022",
    },
  ];

  const education = [
    {
      degree: "Master of Science, Aerospace Engineering",
      university: "University of Manchester",
      location: "Manchester, UK",
      period: "2020-2021",
    },
    {
      degree: "Bachelor of Science, Aerospace Engineering",
      university: "Inha University",
      location: "Incheon, South Korea",
      period: "2015-2019",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Starry Background */}
      <div className="fixed inset-0 z-0">
        <Aurora amplitude={3} />
        <div className="stars absolute inset-0 bg-[radial-gradient(2px_2px_at_20px_30px,#fff,rgba(0,0,0,0)),radial-gradient(2px_2px_at_40px_70px,#fff,rgba(0,0,0,0)),radial-gradient(2px_2px_at_50px_160px,#eee,rgba(0,0,0,0)),radial-gradient(2px_2px_at_90px_40px,#fff,rgba(0,0,0,0)),radial-gradient(2px_2px_at_130px_80px,#fff,rgba(0,0,0,0)),radial-gradient(2px_2px_at_160px_120px,#ddd,rgba(0,0,0,0))] bg-[length:200px_200px] opacity-50 animate-pulse" />
        <div className="stars-2 absolute inset-0 bg-[radial-gradient(1px_1px_at_10px_10px,#fff,rgba(0,0,0,0)),radial-gradient(1px_1px_at_150px_150px,#eee,rgba(0,0,0,0))] bg-[length:300px_300px] opacity-30 animate-pulse delay-75" />
      </div>

      <Header />
      <section className="relative py-20 lg:py-24 xl:py-28 pt-32 z-10">
        <div className="container mx-auto px-4 relative z-2">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Heading
                className="md:max-w-md lg:max-w-2xl mb-8"
                tag="About"
                title="Aizuddin"
                text="Full-Stack Developer & Product Designer"
              />

              <div className="mt-12 space-y-6">
                <p className="text-lg text-gray-300 leading-8">
                  I&apos;m a passionate developer and designer with a diverse
                  background spanning full-stack development, product design,
                  and growth strategy. Currently serving as Technical Director
                  at Skola Labs Tech, where I lead software and AI initiatives.
                </p>
                <p className="text-lg text-gray-300 leading-8">
                  My experience spans full-stack development, system
                  integration, and automation, working across multiple
                  stakeholders to deliver reliable, secure, and maintainable
                  platforms.
                </p>
                <p className="text-lg text-gray-300 leading-8">
                  When I&apos;m not coding, I&apos;m exploring new technologies,
                  contributing to open-source projects, or sharing knowledge
                  with the developer community. I believe in continuous learning
                  and staying curious about the ever-evolving world of
                  technology.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Key Areas Section */}
          <div className="max-w-6xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Drives Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aboutSections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-2xl bg-gray-900 border border-white/10 p-6 hover:border-white/20 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                    <section.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{section.title}</h3>
                  <p className="text-gray-400 text-sm leading-6">
                    {section.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-2xl bg-gray-900 border border-white/10 p-8 lg:p-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-blue-400" />
                <h2 className="text-3xl font-bold">Core Values</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {values.map((value, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/5 rounded-full text-sm text-white border border-white/10"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
          <Experience />

          {/* Certificates Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-6 h-6 text-blue-400" />
                <h2 className="text-3xl font-bold">Certificates & Bootcamps</h2>
              </div>
              <div className="space-y-4">
                {certificates.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="rounded-2xl bg-neutral-800/30 backdrop-blur-sm border border-white/10 p-6 md:p-8"
                  >
                    <div className="flex gap-6">
                      {/* Award Icon */}
                      <div className="shrink-0">
                        <Award className="w-6 h-6 text-teal-400" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col gap-2">
                        {/* Certificate Title */}
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          {cert.title}
                        </h3>

                        {/* Institution */}
                        <p className="text-base md:text-lg text-teal-400">
                          {cert.institution}
                        </p>

                        {/* Date */}
                        <div className="flex items-center gap-2 mt-2">
                          <Calendar className="w-4 h-4 text-gray-300" />
                          <span className="text-sm text-gray-300">
                            {cert.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Education Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-6 h-6 text-blue-400" />
                <h2 className="text-3xl font-bold">Education</h2>
              </div>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="rounded-2xl bg-neutral-800/30 backdrop-blur-sm border border-white/10 p-6 md:p-8"
                  >
                    <div className="flex gap-6">
                      {/* Graduation Cap Icon */}
                      <div className="shrink-0">
                        <GraduationCap className="w-6 h-6 text-teal-400" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col gap-2">
                        {/* Degree */}
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          {edu.degree}
                        </h3>

                        {/* Institution */}
                        <p className="text-base md:text-lg text-teal-400">
                          {edu.university}
                        </p>

                        {/* Dates and Location */}
                        <div className="flex flex-wrap items-center gap-4 mt-2">
                          <div className="flex items-center gap-2 text-sm text-gray-300">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-300">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          {/* <div className="max-w-4xl mx-auto mt-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 p-12"
            >
              <h2 className="text-3xl font-bold mb-4">
                Let&apos;s Work Together
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/projects"
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
                >
                  View My Work
                </Link>
                <Link
                  href="/experience"
                  className="px-6 py-3 bg-transparent border border-white/20 hover:border-white/40 rounded-lg transition-colors"
                >
                  See Experience
                </Link>
              </div>
            </motion.div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
