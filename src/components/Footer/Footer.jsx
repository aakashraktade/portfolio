import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-purple-500">
          Aakash Raktade
        </h2>
        {/* Navigation */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experiance" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            {
              icon: <FaFacebook />,
              link: "https://www.facebook.com/aakash.raktade.3/",
            },
            { icon: <FaTwitter />, link: "https://x.com/AakashRakt19386" },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/aakash-raktade-08877b26a/",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/aakash_raktade/?hl=en",
            },
          ].map((item,index)=>(
            <a href={item.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110">

              {item.icon}
            </a>
          ))}
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
