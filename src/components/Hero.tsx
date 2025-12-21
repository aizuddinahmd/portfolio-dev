'use client';

import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import Aurora from './Aurora';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Frontend Developer';
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      if (text.length < fullText.length) {
        timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length - 1));
        }, 50);
      } else {
        timeout = setTimeout(() => setIsTyping(true), 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isTyping]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0a0a0a] text-white flex items-center justify-center">
      {/* Starry Background */}
      <div className="absolute inset-0 z-0">
      <Aurora />
        <div className="stars absolute inset-0 bg-[radial-gradient(2px_2px_at_20px_30px,#eee,rgba(0,0,0,0)),radial-gradient(2px_2px_at_40px_70px,#fff,rgba(0,0,0,0)),radial-gradient(2px_2px_at_50px_160px,#ddd,rgba(0,0,0,0)),radial-gradient(2px_2px_at_90px_40px,#fff,rgba(0,0,0,0)),radial-gradient(2px_2px_at_130px_80px,#fff,rgba(0,0,0,0)),radial-gradient(2px_2px_at_160px_120px,#ddd,rgba(0,0,0,0))] bg-[length:200px_200px] opacity-50 animate-pulse" />
        <div className="stars-2 absolute inset-0 bg-[radial-gradient(1px_1px_at_10px_10px,#fff,rgba(0,0,0,0)),radial-gradient(1px_1px_at_150px_150px,#eee,rgba(0,0,0,0))] bg-[length:300px_300px] opacity-30 animate-pulse delay-75" />
      </div>

      {/* Social Sidebar */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-6 hidden md:flex">
        <Link href="https://github.com" target="_blank" className="p-3 bg-gray-800/50 rounded-full hover:bg-blue-600/20 hover:text-blue-400 transition-all border border-gray-700 hover:border-blue-500/50">
          <Github size={20} />
        </Link>
        <Link href="https://linkedin.com" target="_blank" className="p-3 bg-gray-800/50 rounded-full hover:bg-blue-600/20 hover:text-blue-400 transition-all border border-gray-700 hover:border-blue-500/50">
          <Linkedin size={20} />
        </Link>
        <Link href="mailto:email@example.com" className="p-3 bg-gray-800/50 rounded-full hover:bg-blue-600/20 hover:text-blue-400 transition-all border border-gray-700 hover:border-blue-500/50">
          <Mail size={20} />
        </Link>
        <div className="w-[1px] h-24 bg-gradient-to-b from-gray-700 to-transparent mx-auto mt-2" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        <div className="mb-4 text-gray-400 text-lg md:text-xl font-medium tracking-wide animate-fade-in-up">
          Hello, I&apos;m
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 animate-gradient-x">
            Aizuddin
          </span>
        </h1>

        <div className="h-8 md:h-12 mb-12 text-xl md:text-3xl text-teal-400 font-mono">
          {text}
          <span className="animate-blink">|</span>
        </div>

        <button className="group relative px-8 py-3 bg-teal-500/10 text-teal-400 rounded-lg overflow-hidden transition-all hover:bg-teal-500/20 hover:shadow-[0_0_30px_rgba(45,212,191,0.3)] border border-teal-500/30">
          <span className="relative z-10 font-medium">View Projects</span>
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-500/10 to-teal-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </button>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[80px] -z-10" />
    </section>
  );
}
