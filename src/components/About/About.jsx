import React from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/picofme (1).png";

const About = () => {
  return (
    <section
      id="about"
      className="pt-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans"
    >
      <div className="flex flex-col-reverse md:flex-row items-stretch gap-x-16">
        {/* Left side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 flex flex-col justify-center">
        
          {/* Greeting */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight whitespace-nowrap">
            Aakash Raktade
          </h2>

          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I'm a </span>
            <TypeAnimation
              sequence={[
                "Full-Stack Developer.",
                1000,
                "App Developer.",
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
          </h3>

          {/* About Me */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a motivated B.Tech graduate in Computer Science and Engineering
            with hands-on experience in web and application development. My
            technical skills include proficiency in Java, C, C++, JavaScript,
            and Flutter. I am committed to applying my knowledge and passion for
            engineering to solve real-world problems while collaborating in
            dynamic team environments
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1G6yoxNaKkc-yFbPAaqh53GyljJPLDK9n/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white text-center py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            Download CV
          </a>
        </div>

        {/* Right side */}
        <div className="md:w-1/2 flex justify-center md:justify-end items-center">
          <Tilt
            className="h-full max-w-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Aakash Raktade"
              className="w-full h-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] rounded-full"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
