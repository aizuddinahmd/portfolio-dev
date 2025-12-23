"use client";

import React from "react";
import Heading from "./Heading";
import { services } from "@/constants/services";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

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

function Effect({
  mouseX,
  mouseY,
}: {
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
}) {
  const maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      />
    </div>
  );
}

const ServiceCard = ({ service }: { service: (typeof services)[0] }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const data = {
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  };

  function onMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: {
    currentTarget: HTMLElement;
    clientX: number;
    clientY: number;
  }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={onMouseMove}
      className="relative border border-white/10 rounded-3xl overflow-hidden group transition-transform duration-300 hover:scale-[1.02] min-h-[400px]"
    >
      <Effect {...data.pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="absolute inset-0 flex flex-col justify-end p-8 bg-black/80 lg:p-15">
        <h4 className="text-2xl lg:text-3xl font-bold mb-4">{service.title}</h4>
        <p className="text-gray-300 text-base mb-6">{service.text}</p>
        <ul className="space-y-2">
          {service.features.slice(0, 4).map((feature, idx) => (
            <li key={idx} className="flex items-center text-sm text-gray-300">
              <span className="mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <Section
      id="services"
      className="pt-[12rem] -mt-[5.25rem] bg-black text-white"
    >
      <div className="container mx-auto px-4">
        <Heading
          tag="Services"
          title="What I Do"
          text="Comprehensive services to bring your ideas to life"
        />
        <div className="relative">
          <div className="relative z-1 grid gap-5 lg:grid-cols-2 mb-5">
            {services.slice(0, 2).map((service) => {
              return <ServiceCard key={service.id} service={service} />;
            })}
          </div>
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            {services.slice(2, 4).map((service) => {
              return <ServiceCard key={service.id} service={service} />;
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
