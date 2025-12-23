"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent m-4">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between rounded-full bg-neutral-800/30 backdrop-blur-sm">
        <Link
          href="/"
          className="font-bold text-xl flex items-center gap-2 hover:opacity-80 transition-opacity"
          onClick={closeMenu}
        >
          <span className="text-blue-600 dark:text-blue-400">&lt;\&gt;</span>
          <span className="text-white">Aizuddin</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-white">
          <Link
            href="/"
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/experience"
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Experience
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-white hover:text-blue-400 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 top-20 md:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={closeMenu}
        />

        {/* Menu Panel */}
        <nav className="absolute right-4 top-0 w-64 rounded-2xl bg-neutral-800/95 backdrop-blur-lg border border-white/10 p-6 shadow-xl">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              onClick={closeMenu}
              className="text-white text-base font-medium hover:text-blue-400 transition-colors py-2"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className="text-white text-base font-medium hover:text-blue-400 transition-colors py-2"
            >
              About
            </Link>
            <Link
              href="/projects"
              onClick={closeMenu}
              className="text-white text-base font-medium hover:text-blue-400 transition-colors py-2"
            >
              Projects
            </Link>
            <Link
              href="/experience"
              onClick={closeMenu}
              className="text-white text-base font-medium hover:text-blue-400 transition-colors py-2"
            >
              Experience
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
