// // import React from "react";
// // import Tilt from "react-tilt"; // Fixed: Changed from { Tilt } to Tilt
// // import { motion } from "framer-motion";

// // import { styles } from "../styles";
// // import { github } from "../assets";
// // import { SectionWrapper } from "../hoc";
// // import { projects } from "../constants";
// // import { fadeIn, textVariant } from "../utils/motion";

// // const ProjectCard = ({
// //   index,
// //   name,
// //   description,
// //   tags,
// //   image,
// //   source_code_link,
// //   live_link,
// // }) => {
// //   return (
// //     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
// //       <Tilt
// //         options={{
// //           max: 45,
// //           scale: 1,
// //           speed: 450,
// //         }}
// //         className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
// //       >
// //         <div className='relative w-full h-[230px]'>
// //           <img
// //             src={image}
// //             alt='project_image'
// //             className='w-full h-full object-cover rounded-2xl'
// //           />
// //         </div>

// //         <div className='mt-5'>
// //           {/* Flex container to place icons in the description area next to the title */}
// //           <div className='flex justify-between items-center gap-2'>
// //             <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            
// //             <div className='flex gap-2'>
// //               {/* GitHub Link */}
// //               <div
// //                 onClick={() => window.open(source_code_link, "_blank")}
// //                 className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-all border-[1px] border-secondary'
// //               >
// //                 <img
// //                   src={github}
// //                   alt='source code'
// //                   className='w-1/2 h-1/2 object-contain'
// //                 />
// //               </div>

// //               {/* Live Link */}
// //               {live_link && (
// //                 <div
// //                   onClick={() => window.open(live_link, "_blank")}
// //                   className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-all border-[1px] border-secondary'
// //                 >
// //                   <span className='text-white font-bold text-[10px] uppercase'>Live</span>
// //                 </div>
// //               )}
// //             </div>
// //           </div>

// //           <p className='mt-2 text-secondary text-[14px]'>{description}</p>
// //         </div>

// //         <div className='mt-4 flex flex-wrap gap-2'>
// //           {tags.map((tag) => (
// //             <p
// //               key={`${name}-${tag.name}`}
// //               className={`text-[14px] ${tag.color}`}
// //             >
// //               #{tag.name}
// //             </p>
// //           ))}
// //         </div>
// //       </Tilt>
// //     </motion.div>
// //   );
// // };

// // const Works = () => {
// //   return (
// //     <>
// //       <motion.div variants={textVariant()}>
// //         <p className={`${styles.sectionSubText} `}>My work</p>
// //         <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
// //       </motion.div>

// //       <div className='w-full flex'>
// //         <motion.div
// //           variants={fadeIn("", "", 0.1, 1)}
// //           className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
// //         >
// //           Following projects showcases my skills and experience through
// //           real-world examples of my work. Each project is briefly described with
// //           links to code repositories and live demos. It reflects my
// //           ability to solve complex problems, work with different technologies,
// //           and manage projects effectively.
// //         </motion.div>
// //       </div>

// //       <div className='mt-20 flex flex-wrap gap-7'>
// //         {projects.map((project, index) => (
// //           <ProjectCard key={`project-${index}`} index={index} {...project} />
// //         ))}
// //       </div>
// //     </>
// //   );
// // };

// // export default SectionWrapper(Works, "work");
// import React from "react";
// import Tilt from "react-tilt";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { github } from "../assets";
// import { SectionWrapper } from "../hoc";
// import { projects } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";

// const ProjectCard = ({
//   index,
//   name,
//   description,
//   tags,
//   image,
//   source_code_link,
// }) => {
//   return (
//     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
//       <Tilt
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
//       >
//         <div className='relative w-full h-[230px]'>
//           <img
//             src={image}
//             alt='project_image'
//             className='w-full h-full object-cover rounded-2xl'
//           />

//           <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
//             <div
//               onClick={() => window.open(source_code_link, "_blank")}
//               className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
//             >
//               <img
//                 src={github}
//                 alt='source code'
//                 className='w-1/2 h-1/2 object-contain'
//               />
//             </div>
//           </div>
//         </div>

//         <div className='mt-5'>
//           <h3 className='text-white font-bold text-[24px]'>{name}</h3>
//           <p className='mt-2 text-secondary text-[14px]'>{description}</p>
//         </div>

//         <div className='mt-4 flex flex-wrap gap-2'>
//           {tags.map((tag) => (
//             <p
//               key={`${name}-${tag.name}`}
//               className={`text-[14px] ${tag.color}`}
//             >
//               #{tag.name}
//             </p>
//           ))}
//         </div>
//       </Tilt>
//     </motion.div>
//   );
// };

// const Works = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText} `}>My work</p>
//         <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
//       </motion.div>

//       <div className='w-full flex'>
//         <motion.p
//           variants={fadeIn("", "", 0.1, 1)}
//           className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
//         >
//           Following projects showcases my skills and experience through
//           real-world examples of my work. Each project is briefly described with
//           links to code repositories and live demos in it. It reflects my
//           ability to solve complex problems, work with different technologies,
//           and manage projects effectively.
//         </motion.p>
//       </div>

//       <div className='mt-20 flex flex-wrap gap-7'>
//         {projects.map((project, index) => (
//           <ProjectCard key={`project-${index}`} index={index} {...project} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Works, "projects");
import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full shadow-2xl hover:shadow-primary transition-all duration-300'
      >
        {/* Image Section - Now just the visual thumbnail */}
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl border border-white/10'
          />
        </div>

        {/* Content Section - Link buttons are now here */}
        <div className='mt-5'>
          <div className='flex justify-between items-center gap-2'>
            <h3 className='text-white font-bold text-[24px] leading-tight'>{name}</h3>
            
            <div className='flex gap-2'>
              {/* GitHub Link */}
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer border border-white/20 hover:scale-110 transition-all'
                title="View Source Code"
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
              
              {/* Live Link Button */}
              <div
                onClick={() => window.open(live_link, "_blank")}
                className='bg-[#915eff] w-8 h-8 rounded-full flex justify-center items-center cursor-pointer border border-white/20 hover:scale-110 transition-all'
                title="Live Demo"
              >
                <svg 
                  className="w-4 h-4 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </div>
          </div>

          <p className='mt-3 text-secondary text-[14px] leading-relaxed line-clamp-3'>
            {description}
          </p>
        </div>

        {/* Tags Section */}
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[12px] font-semibold ${tag.color} bg-white/5 px-2 py-0.5 rounded-md`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcase my skills and experience through
          real-world examples. Each project is briefly described with
          links to code repositories and live demos. It reflects my
          ability to solve complex problems and work with different technologies.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");