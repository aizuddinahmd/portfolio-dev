'use client';

import React from 'react';
import { ArrowRight, Code, Globe, Layout } from 'lucide-react';
import Link from 'next/link';

  


// Mock data based on the structure
const projects = [
  {
    id: '0',
    title: 'E-Commerce Platform',
    text: 'A full-featured online store built with Next.js, Stripe, and Tailwind CSS. Features include cart management, user authentication, and payment processing.',
    icon: Globe,
    backgroundUrl: '/assets/benefits/card-1.svg', // Placeholder
    light: true,
  },
  {
    id: '1',
    title: 'Task Management App',
    text: 'A productivity tool for teams to track progress and manage tasks. Real-time updates using Socket.io and a drag-and-drop interface.',
    icon: Layout,
    backgroundUrl: '/assets/benefits/card-2.svg', // Placeholder
    light: false,
  },
  {
    id: '2',
    title: 'AI Content Generator',
    text: 'An application that uses OpenAI API to generate blog posts and social media content. Includes a rich text editor and SEO optimization tools.',
    icon: Code,
    backgroundUrl: '/assets/benefits/card-3.svg', // Placeholder
    light: true,
  },
];

const Heading = ({ className, title, tag }: { className?: string; title: string; tag?: string }) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 text-center`}>
      {tag && <div className="mb-4 font-mono text-sm font-bold tracking-wider text-gray-500 uppercase">{tag}</div>}
      {title && <h2 className="h2 text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h2>}
    </div>
  );
};

const Section = ({ className, id, children }: { className?: string; id?: string; children: React.ReactNode }) => {
  return (
    <section id={id} className={`relative py-10 lg:py-16 xl:py-20 ${className || ''}`}>
      {children}
    </section>
  );
};

const Arrow = () => (
  <ArrowRight className="ml-auto w-6 h-6 transition-transform group-hover:translate-x-1" />
);

const FeaturedProjects = () => {
  return (
    <Section id="projects" className="bg-black text-white">
   
      <div className="container mx-auto px-4 relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          tag="Portfolio"
          title="Featured Projects"
        />

        <div className="flex flex-wrap gap-10 mb-10 justify-center">
          {projects.map((item) => (
            <div
              className="block group relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] w-full"
              key={item.id}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl -z-10" />
              
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] bg-gray-900/90 rounded-[23px] backdrop-blur-sm border border-white/5 h-full transition-colors hover:bg-gray-900">
                <h5 className="text-xl font-bold mb-5">{item.title}</h5>
                <p className="text-gray-400 text-sm leading-6 mb-6">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <div className="p-2 bg-white/5 rounded-lg">
                    <item.icon size={24} className="text-white" />
                  </div>
                  <Link href="#" className="ml-auto font-mono text-xs font-bold text-white uppercase tracking-wider hover:underline flex items-center gap-2 group">
                    Explore more
                    <Arrow />
                  </Link>
                </div>
              </div>

              {/* Decorative background glow if light is true */}
              {item.light && (
                <div className="absolute top-0 left-1/4 w-full h-full bg-gradient-to-b from-blue-500/10 to-transparent blur-3xl -z-20 pointer-events-none" />
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FeaturedProjects;
