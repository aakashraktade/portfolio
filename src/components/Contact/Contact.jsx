import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Box, Typography, TextField, Button, useTheme } from "@mui/material";

const inputVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  const theme = useTheme();
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rwkee1f",
        "template_tpz6mzt",
        form.current,
        "ctWPvuZP0KjBv5r3J"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message Sent Successfully!", {
            position: "top-right",
            autoClose: 3000,
            theme: theme.palette.mode,
          });
        },
        () => {
          toast.error("Failed to Send Message. Please Try Again", {
            position: "top-right",
            autoClose: 3000,
            theme: theme.palette.mode,
          });
        }
      );
  };

  // Dynamic colors for light/dark mode
  const bgColor = theme.palette.mode === "dark" ? "#0d081f" : "#f9f9f9";
  const inputBg = theme.palette.mode === "dark" ? "#131025" : "#fff";
  const inputColor = theme.palette.mode === "dark" ? "white" : "black";
  const inputLabelColor = theme.palette.mode === "dark" ? "gray" : "gray.700";
  const textColor = theme.palette.mode === "dark" ? "white" : "text.primary";
  const borderColor = theme.palette.mode === "dark" ? "#444" : "#ddd";

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <ToastContainer />

      {/* Section Title */}
      <Box textAlign="center" py={10} px={{ xs: 3, md: 7, lg: 20 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Typography variant="h4" fontWeight="bold" color={textColor}>
            Contact
          </Typography>
          <Box
            sx={{
              width: 120,
              height: 4,
              bgcolor: "#8245ec",
              mx: "auto",
              mt: 2,
              borderRadius: 2,
            }}
          />
          <Typography
            variant="subtitle1"
            color="text.secondary"
            fontWeight={600}
            mt={2}
          >
            I'd love to hear from you — reach out for any opportunities or
            questions!
          </Typography>
        </motion.div>
      </Box>

      {/* Contact Form */}
      <Box
        component={motion.div}
        mt={4}
        px={2}
        mx="auto"
        maxWidth={500}
        bgcolor={bgColor}
        p={4}
        borderRadius={3}
        border={`1px solid ${borderColor}`}
        boxShadow={6}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Typography
          variant="h5"
          fontWeight="600"
          textAlign="center"
          color={textColor}
          mb={3}
        >
          Connect With Me
        </Typography>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          variants={inputVariant}
        >
          {["user_email", "user_name", "subject"].map((field, idx) => (
            <TextField
              key={idx}
              name={field}
              label={
                field === "user_email"
                  ? "Your Email"
                  : field === "user_name"
                  ? "Your Name"
                  : "Subject"
              }
              required
              variant="filled"
              InputProps={{
                sx: {
                  bgcolor: inputBg,
                  color: inputColor,
                  borderRadius: 1,
                },
              }}
              InputLabelProps={{ sx: { color: inputLabelColor } }}
              fullWidth
            />
          ))}

          <TextField
            name="message"
            label="Message"
            required
            variant="filled"
            multiline
            rows={4}
            InputProps={{
              sx: {
                bgcolor: inputBg,
                color: inputColor,
                borderRadius: 1,
              },
            }}
            InputLabelProps={{ sx: { color: inputLabelColor } }}
            fullWidth
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 1,
              backgroundImage: "linear-gradient(to right, #8245ec, #ff3cac)",
              color: "white",
              fontWeight: 600,
              py: 1.5,
              borderRadius: 2,
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            Send
          </Button>
        </motion.form>
      </Box>
    </motion.section>
  );
};

export default Contact;
