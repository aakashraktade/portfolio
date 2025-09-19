import React, { useContext } from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";

// Animation variants
const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const cardVariants = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const skillVariants = { hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

// Light gradients for cards
const gradients = [
  "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
  "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
  "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
  "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
];

const Skills = () => {
  const { mode } = useContext(ThemeContext);

  const lightTitleColor = "#1f2937";
  const lightSkillText = "#111827";
  const lightBorder = "#e5e7eb";

  const darkCardBg = "rgba(31,31,46,0.9)";
  const darkTitleColor = "#d1d5db";
  const darkSkillText = "#f3f4f6";
  const darkBorder = "#374151";

  const titleColor = mode === "light" ? lightTitleColor : darkTitleColor;
  const skillText = mode === "light" ? lightSkillText : darkSkillText;
  const borderColor = mode === "light" ? lightBorder : darkBorder;

  return (
    <section
      id="skills"
      className="py-17 font-sans clip-path-custom transition-colors duration-300"
    >
      {/* Title */}
      <div className="text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold"
          style={{ color: titleColor }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>

        <motion.div
          className="w-24 h-1 mx-auto mt-2 bg-[#8245ec] rounded"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        <motion.p
          className="mt-4 text-lg font-medium"
          style={{ color: mode === "light" ? "#4b5563" : "#9ca3af" }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          A collection of my technical skills and expertise honed through projects and experiences.
        </motion.p>
      </div>

      {/* Skills Cards */}
      <motion.div
        className="flex flex-col sm:flex-wrap lg:flex-row gap-5 py-6 justify-between px-[8vw] md:px-[6vw] lg:px-[15vw]"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {SkillsInfo.map((category, index) => (
          <motion.div
            key={category.title}
            className="px-6 py-6 mb-6 sm:mb-10 w-full sm:w-[48%] rounded-2xl border shadow-md"
            style={{
              background: mode === "light" ? gradients[index % gradients.length] : darkCardBg,
              borderColor: borderColor,
            }}
            variants={cardVariants}
          >
            <h3
              className="text-2xl sm:text-3xl font-semibold mb-4 text-center"
              style={{ color: titleColor }}
            >
              {category.title}
            </h3>

            {/* Skills */}
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={800}
              scale={1.02}
              transitionSpeed={800}
              gyroscope={false}
            >
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 gap-3"
                variants={containerVariants}
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center justify-center space-x-2 rounded-2xl py-2 px-3 transition-transform hover:scale-105"
                    style={{
                      border: `1.5px solid ${borderColor}`,
                      color: skillText,
                      background: mode === "light" ? "rgba(255,255,255,0.6)" : "transparent",
                    }}
                    variants={skillVariants}
                  >
                    <img src={skill.logo} alt={`${skill.name} logo`} className="w-6 h-6 sm:w-8 sm:h-8" />
                    <span className="text-xs sm:text-sm">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
