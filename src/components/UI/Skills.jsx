import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3, // Trigger when 30% of element is visible
    triggerOnce: false // Allow re-triggering when scrolling back up
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const skillVariants = {
    hidden: { width: 0 },
    visible: (percent) => ({
      width: `${percent}%`,
      transition: { duration: 1.5, ease: "easeInOut" }
    })
  };

  return (
    <section id='skills' ref={ref}>
      <section className='container'>
        <div className='text-center'>
          <h2 className='text-headingColor font-[800] text-[2.4rem] mb-1'>
            My Skills
          </h2>
          <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7 mb-[36px]'>
            Here are my technical skills and expertise
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-[100px]'>
          {/* ===== Languages ===== */}
          <div>
            <div className='mb-[21px]'>
              <h3 className='text-primaryColor text-[1.5rem] font-[900]'>
                <i className="ri-code-line mr-2 text-[28px]"></i>
                Languages
              </h3>
            </div>
            {[
              { skill: 'Python', percent: 90 },
              { skill: 'JavaScript', percent: 80 },
              { skill: 'Java', percent: 90 },
              { skill: 'Solidity', percent: 45 },
            ].map(({ skill, percent }) => (
              <div className='mb-4 mr-5' key={skill}>
                <div className='flex justify-between text-headingColor font-[700] text-[1rem]'>
                  <span>{skill}</span>
                  <span className='font-[500]'>{percent}%</span>
                </div>
                <div className='w-full h-[5px] bg-gray-300 rounded mt-2 relative overflow-hidden'>
                  <motion.div 
                    className='absolute top-0 left-0 h-[5px] bg-primaryColor rounded'
                    custom={percent}
                    initial="hidden"
                    animate={controls}
                    variants={skillVariants}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>

          {/* ===== ML Stack ===== */}
          <div>
            <div className='mb-[21px]'>
              <h3 className='text-primaryColor text-[1.5rem] font-[900]'>
                <i className="ri-brain-line mr-2 text-[28px]"></i>
                ML Stack
              </h3>
            </div>
            {[
              { skill: 'Scikit-learn', percent: 80 },
              { skill: 'Pandas & Numpy', percent: 85 },
              { skill: 'NLTK', percent: 70 },
              { skill: 'TensorFlow & Keras', percent: 80 },
              { skill: 'spaCy', percent: 60 },
              { skill: 'YOLO', percent: 90 },
              { skill: 'OpenCV', percent: 70 },
            ].map(({ skill, percent }) => (
              <div className='mb-4 mr-5' key={skill}>
                <div className='flex justify-between text-headingColor font-[700] text-[1rem]'>
                  <span>{skill}</span>
                  <span className='font-[500]'>{percent}%</span>
                </div>
                <div className='w-full h-[5px] bg-gray-300 rounded mt-2 relative overflow-hidden'>
                  <motion.div 
                    className='absolute top-0 left-0 h-[5px] bg-primaryColor rounded'
                    custom={percent}
                    initial="hidden"
                    animate={controls}
                    variants={skillVariants}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>

          {/* ===== Web Dev Stack ===== */}
          <div>
            <div className='mb-[21px]'>
              <h3 className='text-primaryColor text-[1.5rem] font-[900]'>
                <i className="ri-window-line mr-2 text-[28px]"></i>
                Web Dev Stack
              </h3>
            </div>
            {[
              { skill: 'React', percent: 85 },
              { skill: 'Node.js', percent: 70 },
              { skill: 'Next.js', percent: 85 },
            ].map(({ skill, percent }) => (
              <div className='mb-4 mr-5' key={skill}>
                <div className='flex justify-between text-headingColor font-[700] text-[1rem]'>
                  <span>{skill}</span>
                  <span className='font-[500]'>{percent}%</span>
                </div>
                <div className='w-full h-[5px] bg-gray-300 rounded mt-2 relative overflow-hidden'>
                  <motion.div 
                    className='absolute top-0 left-0 h-[5px] bg-primaryColor rounded'
                    custom={percent}
                    initial="hidden"
                    animate={controls}
                    variants={skillVariants}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>

          {/* ===== Tools & Databases ===== */}
          <div>
            <div className='mb-[21px]'>
              <h3 className='text-primaryColor text-[1.5rem] font-[900]'>
                <i className="ri-tools-line mr-2 text-[28px]"></i>
                Tools & Databases
              </h3>
            </div>
            {[
              { skill: 'MySQL', percent: 85 },
              { skill: 'MongoDB', percent: 80 },
              { skill: 'Git', percent: 90 },
            ].map(({ skill, percent }) => (
              <div className='mb-4 mr-5' key={skill}>
                <div className='flex justify-between text-headingColor font-[700] text-[1rem]'>
                  <span>{skill}</span>
                  <span className='font-[500]'>{percent}%</span>
                </div>
                <div className='w-full h-[5px] bg-gray-300 rounded mt-2 relative overflow-hidden'>
                  <motion.div 
                    className='absolute top-0 left-0 h-[5px] bg-primaryColor rounded'
                    custom={percent}
                    initial="hidden"
                    animate={controls}
                    variants={skillVariants}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Skills;