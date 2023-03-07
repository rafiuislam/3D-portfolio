import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] px-12 py-6 flex flex-col items-center justify-evenly min-h-[280px]"
        >
          <img src={icon} alt={title} />
          <h3 className="text-white text-[20px] text-center font-bold ">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 leading-[30px] text-secondary text-[17px] max-w-3xl"
      >
        As a fresher with less experience in ReactJS, VueJS, and NodeJS and
        ThreeJs development, I am eager to learn and grow in these technologies.
        I have a basic understanding of JavaScript and its concepts, but I am
        excited to delve deeper into front-end and back-end development using
        these libraries and frameworks. I am familiar with the basics of ReactJS
        and VueJS, including their syntax and functionality. However, I am
        looking forward to building more complex applications using these
        libraries and exploring their different features and capabilities. I am
        also interested in learning about best practices for building scalable
        and efficient applications.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
