import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, profiles } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ProfileCard = ({ index, name, icon, link }) => (
  <motion.div
    variants={fadeIn("left", "spring", index * 0.5, 0.75)}
    onClick={() => window.open(link, "_blank")}
    className='cursor-pointer bg-tertiary p-3 rounded-xl border border-secondary/20 hover:border-[#915eff] transition-all flex items-center gap-4 w-full active:scale-95'
  >
    <img src={icon} alt={name} className='w-6 h-6 object-contain' />
    <span className='text-white text-[14px] font-medium'>{name}</span>
  </motion.div>
);

const About = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>
        <div className='flex flex-col flex-1'>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
           I am a second-year B.Tech student at Indira Gandhi Delhi Technical University for Women in Computer Science Engineering with specialization in Artificial Intelligence (CSE-AI), graduating in 2028. I am a passionate full-stack web developer with hands-on experience in React, Node.js, Express, and other modern web technologies.

Alongside development, I actively practice Data Structures and Algorithms in Java to strengthen my problem-solving skills. I am also exploring the fields of Artificial Intelligence and Machine Learning, aiming to build intelligent and impactful applications.

I enjoy learning continuously, solving real-world problems, and turning ideas into scalable, user-friendly solutions.Let's build something amazing together!
          </motion.p>
        </div>

        <div className='flex flex-col gap-3 min-w-[240px] lg:mt-10'>
          <h3 className='text-white text-[18px] font-bold mb-1 pl-1'>Profiles</h3>
          {profiles.map((profile, index) => (
            <ProfileCard key={profile.name} index={index} {...profile} />
          ))}
        </div>
      </div>
      {/* Rest of your service cards mapping... */}
    </>
  );
};

export default SectionWrapper(About, "about");