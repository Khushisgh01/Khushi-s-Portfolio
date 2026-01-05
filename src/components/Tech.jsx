import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, skillCategories } from "../constants";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My technical stack</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      {/* Categorized Skills List from Resume */}
      <div className='mt-10 flex flex-col gap-10'>
        {skillCategories.map((category, index) => (
          <motion.div 
            key={category.title}
            variants={fadeIn("right", "spring", index * 0.3, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            <h3 className="text-white text-[22px] font-bold border-l-4 border-[#915eff] pl-3">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <div 
                  key={skill}
                  className="bg-tertiary py-2 px-4 rounded-xl border border-secondary/20 hover:border-white/50 transition-all cursor-default"
                >
                  <p className="text-secondary text-[14px] font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3D Visuals Section with names below each ball */}
      <div className='mt-20 flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-40 flex flex-col items-center justify-center' key={technology.name}>
            <BallCanvas icon={technology.icon} name={technology.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");