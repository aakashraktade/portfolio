import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const iconVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.footer
      className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="container mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      >
        <h2 className="text-xl font-semibold text-purple-500">
          Aakash Raktade
        </h2>

        {/* Contact Info */}
        <motion.div
          className="mt-6 text-sm sm:text-base space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } }}
        >
          <p>
            📞{" "}
            <a href="tel:+919324336977" className="hover:text-purple-500 transition-colors">
              +91 9324336977
            </a>
          </p>
          <p>
            📧{" "}
            <a href="mailto:aakashraktade06@gmail.com" className="hover:text-purple-500 transition-colors">
              aakashraktade06@gmail.com
            </a>
          </p>
        </motion.div>

        {/* Social Media */}
        <motion.div
          className="flex flex-wrap justify-center space-x-4 mt-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/aakash.raktade.3/" },
            { icon: <FaTwitter />, link: "https://x.com/AakashRakt19386" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/aakash-raktade-08877b26a/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/aakash_raktade/?hl=en" },
            { icon: <FaGithub />, link: "https://github.com/aakashraktade" },
          ].map((item, index) => (
            <motion.a
              href={item.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl sm:text-xl text-white"
              variants={iconVariant}
              whileHover={{ scale: 1.2, color: "#8245ec" }}
              whileTap={{ scale: 0.9 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.p
          className="mt-6 text-xs text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        >
          © {new Date().getFullYear()} Aakash Raktade.
        </motion.p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
