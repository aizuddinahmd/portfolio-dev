"use client";

import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import Heading from "./Heading";

const experiences = [
	{
		id: "0",
		title: "Senior Frontend Developer",
		company: "Tech Innovations Inc.",
		location: "San Francisco, CA",
		period: "2022 - Present",
		description:
			"Led frontend development for multiple client projects using React, Next.js, and TypeScript. Collaborated with cross-functional teams to deliver scalable web applications.",
		technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
	},
	{
		id: "1",
		title: "Frontend Developer",
		company: "Digital Solutions LLC",
		location: "Remote",
		period: "2020 - 2022",
		description:
			"Developed and maintained responsive web applications. Implemented modern UI/UX designs and optimized application performance.",
		technologies: ["React", "JavaScript", "CSS", "Node.js"],
	},
	{
		id: "2",
		title: "Junior Web Developer",
		company: "StartupHub",
		location: "New York, NY",
		period: "2019 - 2020",
		description:
			"Built interactive web interfaces and collaborated with designers to implement pixel-perfect designs. Gained experience in modern web development practices.",
		technologies: ["HTML", "CSS", "JavaScript", "Vue.js"],
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
		<Section id="experience" className="bg-black text-white">
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
							{experiences.map((item, index) => (
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
											<div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
												<div className="mb-3 md:mb-0">
													<h3 className="text-xl md:text-2xl font-bold text-white mb-2">
														{item.title}
													</h3>
													<p className="text-lg text-gray-300 mb-2">
														{item.company}
													</p>
												</div>
												<div className="flex flex-col gap-2 text-sm text-gray-400">
													<div className="flex items-center gap-2">
														<Calendar className="w-4 h-4" />
														<span>{item.period}</span>
													</div>
													<div className="flex items-center gap-2">
														<MapPin className="w-4 h-4" />
														<span>{item.location}</span>
													</div>
												</div>
											</div>

											<p className="text-gray-400 text-sm leading-6 mb-4">
												{item.description}
											</p>

											{/* Technologies */}
											<div className="flex flex-wrap gap-2 mt-4">
												{item.technologies.map((tech) => (
													<span
														key={tech}
														className="px-3 py-1.5 bg-white/5 rounded-full text-xs text-white border border-white/10"
													>
														{tech}
													</span>
												))}
											</div>
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

