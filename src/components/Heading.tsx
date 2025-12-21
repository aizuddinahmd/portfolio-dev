'use client';

import Brackets from "@/assets/svg/Brackets";
import { TypingText, TitleText } from "./CustomText";
import { motion } from "framer-motion";

const Heading = ({ className, title, text, tag }: { className?: string; title?: string; text?: string; tag?: string }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {tag && (
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="mx-auto flex items-center justify-center mb-4"
        >
          {Brackets("left")}
          <TypingText title={tag} textStyles="text-center text-gray-400 mx-3 uppercase tracking-wider font-mono text-sm" />
          {Brackets("right")}
        </motion.div>
      )}

      {title && (
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <TitleText title={title} textStyles="h2 text-center" />
        </motion.div>
      )}
      {text && <p className="body-1 mt-4 text-gray-400">{text}</p>}
    </div>
  );
};

export default Heading;
