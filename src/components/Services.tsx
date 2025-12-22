"use client";

import React from "react";
import { Check } from "lucide-react";
import Heading from "./Heading";
import { services, serviceIcons } from "@/constants/services";

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

const Services = () => {
  return (
    <Section id="services" className="bg-black text-white">
      <div className="container mx-auto px-4 relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          tag="Services"
          title="What I Do"
          text="Comprehensive services to bring your ideas to life"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl bg-gray-900 border border-white/10 p-8 transition-all hover:border-white/20"
            >
              {/* Service Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center text-3xl mb-4">
                  {serviceIcons.find((icon) => icon.id === service.id)?.icon}
                </div>
              </div>

              {/* Service Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-400 text-sm leading-6 mb-6">
                {service.text}
              </p>

              {/* Service Features */}
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-blue-400 mr-3 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;
