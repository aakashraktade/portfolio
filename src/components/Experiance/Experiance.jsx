import React from "react";
import { experiences } from "../../constants";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Card,
  Chip,
  Avatar,
  useTheme,
} from "@mui/material";

const cardVariantsLeft = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const cardVariantsRight = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const Experiance = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      id="experiance"
      sx={{
        py: 10,
        px: { xs: 3, sm: 6, md: 10, lg: 16 },
        position: "relative",
      }}
    >
      {/* Section Title */}
      <Box textAlign="center" mb={4}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <Typography variant="h4" fontWeight="bold" color="text.primary">
            Experiance
          </Typography>
        </motion.div>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Typography
            variant="subtitle1"
            color="text.secondary"
            fontWeight={600}
            mt={2}
          >
            A collection of my work experience and the roles I have taken in
            various organizations
          </Typography>
        </motion.div>
      </Box>

      {/* Experiences Container */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 6, // reduced spacing
          mb: 6,  // reduced bottom spacing
        }}
      >
        {/* Vertical Timeline Line */}
        <Box
          sx={{
            position: "absolute",
            left: { xs: 30, sm: "50%" },
            transform: { xs: "none", sm: "translateX(-50%)" },
            width: "3px",
            bgcolor: "white",
            top: 0,
            bottom: 0,
            zIndex: 0,
          }}
        />

        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={index % 2 === 0 ? cardVariantsLeft : cardVariantsRight}
          >
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems="center"
              sx={{ position: "relative", zIndex: 1 }}
            >
              {/* Timeline Circle */}
              <Avatar
                src={experience.img}
                alt={experience.company}
                sx={{
                  width: { xs: 50, sm: 70 },
                  height: { xs: 50, sm: 70 },
                  border: "4px solid #8245ec",
                  position: "absolute",
                  left: { xs: 30, sm: "50%" },
                  transform: { xs: "none", sm: "translateX(-50%)" },
                  zIndex: 10,
                }}
              />

              {/* Experience Card */}
              <Card
                sx={{
                  maxWidth: 500,
                  ml: index % 2 === 0 ? { sm: "auto" } : 0,
                  mr: index % 2 !== 0 ? { sm: "auto" } : 0,
                  mt: { xs: 4, sm: 0 }, // reduced margin-top
                  p: 3,
                  borderRadius: 3,
                  border: isDark ? "1px solid #fff" : "1px solid #ddd",
                  background: isDark
                    ? "#1a1222"
                    : "linear-gradient(135deg, #ffffff, #e0d4ff, #f3e7ff)",
                  boxShadow: isDark
                    ? "0 0 20px 1px rgba(130,96,236,0.3)"
                    : "0 0 15px 1px rgba(130,69,236,0.2)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: 6,
                  },
                }}
              >
                <Box display="flex" alignItems="center" gap={2}>
                  <Avatar
                    src={experience.img}
                    alt={experience.company}
                    variant="rounded"
                    sx={{
                      width: 64,
                      height: 64,
                      bgcolor: "#fff",
                    }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      fontWeight="600"
                      color="text.primary"
                    >
                      {experience.role}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {experience.company}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {experience.date}
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="body2" color="text.secondary" mt={1.5}>
                  {experience.desc}
                </Typography>

                {/* Skills */}
                <Box display="flex" flexWrap="wrap" gap={1} mt={1.5}>
                  {experience.skills.map((skill, idx) => (
                    <Chip
                      key={idx}
                      label={skill}
                      size="small"
                      sx={{
                        bgcolor: "#8245ec",
                        color: "#fff",
                        fontWeight: 500,
                      }}
                    />
                  ))}
                </Box>
              </Card>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Experiance;
