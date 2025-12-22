"use client";

import React from "react";
import { ArrowLeft, Code, Palette, TrendingUp, Globe, Heart } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import { motion } from "framer-motion";

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

	return (
		<div className="min-h-screen bg-black text-white">
			<Header />
			<section className="relative py-20 lg:py-24 xl:py-28 pt-32">
				<div className="container mx-auto px-4 relative z-2">
					{/* Back Button */}
					<Link
						href="/"
						className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
					>
						<ArrowLeft className="w-4 h-4" />
						<span>Back to Home</span>
					</Link>

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
									I'm a passionate developer and designer with a diverse
									background spanning full-stack development, product design,
									and growth strategy. Currently serving as Technical Director
									at Skola Labs Tech, where I lead software and AI initiatives.
								</p>
								<p className="text-lg text-gray-300 leading-8">
									My journey in tech has taken me through various roles—from
									building responsive web applications and managing backend
									systems to content moderation and community building. I thrive
									on solving complex problems and creating solutions that make a
									real impact.
								</p>
								<p className="text-lg text-gray-300 leading-8">
									When I'm not coding, I'm exploring new technologies,
									contributing to open-source projects, or sharing knowledge
									with the developer community. I believe in continuous
									learning and staying curious about the ever-evolving world of
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

					{/* Journey Timeline */}
					<div className="max-w-4xl mx-auto">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.5 }}
						>
							<h2 className="text-3xl font-bold text-center mb-12">
								My Journey
							</h2>
							<div className="relative">
								{/* Timeline line */}
								<div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/10 hidden md:block" />

								<div className="space-y-12">
									<div className="relative flex gap-6 md:gap-8">
										{/* Timeline dot */}
										<div className="hidden md:flex items-start pt-1">
											<div className="relative z-10 w-16 h-16 rounded-full bg-gray-900 border-2 border-white/20 flex items-center justify-center">
												<span className="text-2xl">🚀</span>
											</div>
										</div>

										{/* Content */}
										<div className="flex-1 pb-8 md:pb-0">
											<div className="rounded-2xl bg-transparent backdrop-blur-sm border border-white/10 p-6 md:p-8">
												<div className="mb-4">
													<h3 className="text-2xl font-bold text-white mb-2">
														Technical Director
													</h3>
													<p className="text-gray-300">
														Skola Labs Tech Sdn Bhd | March 2025 - Ongoing
													</p>
												</div>
												<p className="text-gray-400 leading-6">
													Leading software and AI initiatives, designing system
													architectures, and building scalable solutions for
													healthcare and other industries.
												</p>
											</div>
										</div>
									</div>

									<div className="relative flex gap-6 md:gap-8">
										<div className="hidden md:flex items-start pt-1">
											<div className="relative z-10 w-16 h-16 rounded-full bg-gray-900 border-2 border-white/20 flex items-center justify-center">
												<span className="text-2xl">🌐</span>
											</div>
										</div>
										<div className="flex-1 pb-8 md:pb-0">
											<div className="rounded-2xl bg-transparent backdrop-blur-sm border border-white/10 p-6 md:p-8">
												<div className="mb-4">
													<h3 className="text-2xl font-bold text-white mb-2">
														Trust & Safety Associate
													</h3>
													<p className="text-gray-300">
														Accenture | June 2024 - Feb 2025
													</p>
												</div>
												<p className="text-gray-400 leading-6">
													Ensured platform safety through content moderation,
													maintaining 98% accuracy and contributing to AI
													moderation system improvements.
												</p>
											</div>
										</div>
									</div>

									<div className="relative flex gap-6 md:gap-8">
										<div className="hidden md:flex items-start pt-1">
											<div className="relative z-10 w-16 h-16 rounded-full bg-gray-900 border-2 border-white/20 flex items-center justify-center">
												<span className="text-2xl">💻</span>
											</div>
										</div>
										<div className="flex-1 pb-8 md:pb-0">
											<div className="rounded-2xl bg-transparent backdrop-blur-sm border border-white/10 p-6 md:p-8">
												<div className="mb-4">
													<h3 className="text-2xl font-bold text-white mb-2">
														Software Developer
													</h3>
													<p className="text-gray-300">
														Epic Startups | April 2023 - May 2024
													</p>
												</div>
												<p className="text-gray-400 leading-6">
													Developed front-end functionalities, implemented
													responsive designs, and collaborated with designers
													to create seamless user experiences.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					</div>

					{/* CTA Section */}
					<div className="max-w-4xl mx-auto mt-20 text-center">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.6 }}
							className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 p-12"
						>
							<h2 className="text-3xl font-bold mb-4">
								Let's Work Together
							</h2>
							<p className="text-gray-400 mb-8 text-lg">
								I'm always open to discussing new projects, creative ideas, or
								opportunities to be part of your vision.
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
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutPage;

