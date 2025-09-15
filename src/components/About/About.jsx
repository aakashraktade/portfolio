import React from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import profileImage from "../../assets/picofme (2).png";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3, // delay between each element
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const About = () => {
  return (
    <section
      id="about"
      className="pt-20 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans"
    >
      <motion.div
        className="flex flex-col-reverse md:flex-row items-stretch gap-12 md:gap-32"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Left side */}
        <div className="flex-1 max-w-md text-center md:text-left mt-8 md:mt-0 flex flex-col justify-center">
          {/* Greeting */}
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight"
            variants={itemVariants}
          >
            Hi, I am
          </motion.h1>

          {/* Name */}
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight whitespace-nowrap"
            variants={itemVariants}
          >
            Aakash Raktade
          </motion.h2>

          {/* Skills Heading with Typing Effect */}
          <motion.h3
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight"
            variants={itemVariants}
          >
            <span className="text-white">I'm a </span>
            <TypeAnimation
              sequence={[
                "Full-Stack Developer.",
                1000,
                "React Developer.",
                1000,
                "Web Developer.",
                1000,
                "Coder.",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
              className="text-[#8245ec]"
            />
          </motion.h3>

          {/* About Me */}
          <motion.p
            className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed"
            variants={itemVariants}
          >
            I am a motivated B.Tech graduate in Computer Science and Engineering
            with hands-on experience in web and application development. My
            technical skills include proficiency in Java, C, C++, JavaScript,
            and Flutter. I am committed to applying my knowledge and passion for
            engineering to solve real-world problems while collaborating in
            dynamic team environments.
          </motion.p>

          {/* Resume Button */}
          <motion.a
            href="https://drive.google.com/file/d/1GjDYZUekHilVyiO7XMBPDfWLmgfXciYO/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white text-center py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
            variants={itemVariants}
          >
            Download CV
          </motion.a>
        </div>

        {/* Right side */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end items-center mt-8 md:mt-0"
          variants={itemVariants}
        >
          <Tilt
            className="w-64 h-64 md:w-[22rem] md:h-[22rem] lg:w-[24rem] lg:h-[24rem] rounded-full border-4 border-purple-700 shadow-2xl -mt-12"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src={profileImage}
                alt="Aakash Raktade"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </Tilt>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
