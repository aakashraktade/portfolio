import React, { useContext, useMemo } from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import profileImage from "../../assets/picofme (2).png";
import { ThemeContext } from "../../context/ThemeContext";
import { Box, Typography, Button } from "@mui/material";
import StarParticle from "../StarParticle";
// import ParticlesBackground from "../ParticlesBackground"; // optional

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const About = () => {
  const { mode } = useContext(ThemeContext);

  const particleCount = useMemo(() => {
    const area = window.innerWidth * window.innerHeight;
    if (area < 500_000) return 80;
    if (area < 900_000) return 160;
    return 300;
  }, []);

  const textColor = mode === "light" ? "#111827" : "#fff";
  const subTextColor = mode === "light" ? "#374151" : "#9ca3af";
  const accentColor = "#8245ec";

  return (
    <Box
      id="about"
      sx={{
        pt: "5rem",
        px: { xs: "5vw", md: "7vw", lg: "15vw" },
        color: textColor,
        transition: "all 0.5s",
        fontFamily: "Poppins, sans-serif",
        position: "relative",
      }}
    >
      {/* Particle Background */}
      <div className="particles-container">
        <StarParticle mode={mode} />
        {/* OR 
        {Array.from({ length: particleCount }).map((_, i) => (
          <StarParticle key={i} id={i} width={window.innerWidth} height={window.innerHeight} />
        ))} 
        */}
      </div>

      <motion.div
        className="flex flex-col-reverse md:flex-row items-stretch gap-10 md:gap-32"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* ---------- LEFT SIDE ---------- */}
        <Box className="flex-1 max-w-md text-center md:text-left flex flex-col justify-center">
          <motion.div variants={itemVariants}>
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", mb: 2, color: textColor }}
            >
              Hi, I am
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                mb: 4,
                color: textColor,
                whiteSpace: { xs: "normal", md: "nowrap" },
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                lineHeight: 1.2,
                textAlign: { xs: "center", md: "left" },
                overflowWrap: "break-word",
              }}
            >
              Aakash Raktade
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "600", mb: 4, color: subTextColor }}
            >
              <span style={{ color: textColor }}>I'm a </span>
              <span
                style={{
                  color: mode === "light" ? "#0055f2" : "#8245ec",
                  fontWeight: "bold",
                }}
              >
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
                />
              </span>
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                mt: 2,
                fontWeight: "600",
                color: mode === "light" ? "#1F2937" : subTextColor,
                lineHeight: 1.7,
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "0.9rem", sm: "1rem" },
              }}
            >
              I am a motivated B.Tech graduate in Computer Science and
              Engineering with hands-on experience in web and application
              development. My technical skills include proficiency in Java, C,
              C++, JavaScript, and Flutter. I am committed to applying my
              knowledge and passion for engineering to solve real-world problems
              while collaborating in dynamic team environments.
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              variant="contained"
              href="https://drive.google.com/file/d/1GjDYZUekHilVyiO7XMBPDfWLmgfXciYO/view?usp=drive_link"
              target="_blank"
              sx={{
                background: mode === 'light' 
                  ? 'linear-gradient(90deg, #4F46E5, #7C3AED)' 
                  : `linear-gradient(90deg, ${accentColor}, #a855f7)`,
                color: "#fff",
                py: 1.5,
                px: 5,
                fontWeight: "bold",
                mt: 2,
                borderRadius: "9999px",
                boxShadow: mode === 'light' 
                  ? '0 4px 14px rgba(79, 70, 229, 0.3)' 
                  : `0 0 5px ${accentColor}, 0 0 40px ${accentColor}`,
                transition: "all 0.3s ease-in-out",
                textTransform: 'none',
                fontSize: '1rem',
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: mode === 'light'
                    ? '0 6px 20px rgba(79, 70, 229, 0.4)'
                    : `0 0 10px ${accentColor}, 0 0 50px ${accentColor}`,
                  background: mode === 'light'
                    ? 'linear-gradient(90deg, #4338CA, #6D28D9)'
                    : `linear-gradient(90deg, #a855f7, ${accentColor})`,
                },
              }}
            >
              Download CV
            </Button>
          </motion.div>
        </Box>

        {/* ---------- RIGHT SIDE ---------- */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end items-center mt-8 md:mt-0"
          variants={itemVariants}
        >
          <Tilt
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] lg:w-[24rem] lg:h-[24rem] rounded-full shadow-2xl -mt-12"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            style={{
              border: `4px solid ${
                mode === "light" ? "#4F46E5" : "#9333EA"
              }`,
            }}
          >
            <Box className="w-full h-full rounded-full overflow-hidden">
              <img
                src={profileImage}
                alt="Aakash Raktade"
                className="w-full h-full object-cover rounded-full"
              />
            </Box>
          </Tilt>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default About;
