import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Box, Typography, IconButton, Link, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const Footer = () => {
  const theme = useTheme();

  const iconVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const socialLinks = [
    { icon: <FaFacebook />, link: "https://www.facebook.com/aakash.raktade.3/", color: "#1877F2" },
    { icon: <FaTwitter />, link: "https://x.com/AakashRakt19386", color: "#1DA1F2" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/aakash-raktade-08877b26a/", color: "#0077B5" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/aakash_raktade/?hl=en", color: "#E1306C" },
    { icon: <FaGithub />, link: "https://github.com/aakashraktade", color: "#181717" },
  ];

  return (
    <motion.footer initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
      <Box
        bgcolor={theme.palette.mode === "dark" ? "#0d081f" : "rgba(255,255,255,0.95)"}
        color={theme.palette.mode === "dark" ? "grey.100" : "#111"}
        py={1.5}
        px={{ xs: 2, md: 4, lg: 8 }}
        textAlign="center"
        sx={{ backdropFilter: theme.palette.mode === "light" ? "blur(10px)" : "none" }}
      >
        {/* Name */}
        <Typography variant="body2" fontWeight="bold" mb={0.5}>
          Aakash Raktade
        </Typography>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } }}
          style={{ marginBottom: 4 }}
        >
          <Typography variant="caption" display="block">
            📞{" "}
            <Link href="tel:+919324336977" underline="hover" color="inherit">
              +91 9324336977
            </Link>
          </Typography>
          <Typography variant="caption" display="block">
            📧{" "}
            <Link href="mailto:aakashraktade06@gmail.com" underline="hover" color="inherit">
              aakashraktade06@gmail.com
            </Link>
          </Typography>
        </motion.div>

        {/* Social Icons */}
        <Box display="flex" justifyContent="center" mt={0.5} gap={1}>
          {socialLinks.map((item, index) => (
            <motion.div
              key={index}
              variants={iconVariant}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconButton
                component="a"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: theme.palette.mode === "light" ? item.color : "#fff",
                  p: 0.3,
                  fontSize: "small",
                }}
              >
                {item.icon}
              </IconButton>
            </motion.div>
          ))}
        </Box>

        {/* Copyright */}
        <Typography variant="caption" display="block" mt={1} color={theme.palette.mode === "dark" ? "grey.400" : "grey.600"}>
          © {new Date().getFullYear()} Aakash Raktade.
        </Typography>
      </Box>
    </motion.footer>
  );
};

export default Footer;
