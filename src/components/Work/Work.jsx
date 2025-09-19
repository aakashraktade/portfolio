import React, { useState } from "react";
import { projects } from "../../constants";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
  Dialog,
  DialogContent,
  useTheme,
} from "@mui/material";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <Box
      id="work"
      sx={{
        py: 10, // reduced from 12
        px: { xs: 3, sm: 6, md: 10, lg: 20 },
        position: "relative",
      }}
    >
      {/* Section Title */}
      <Box textAlign="center" mb={4}> {/* reduced from 10 */}
        <Typography variant="h4" fontWeight="bold" color="text.primary">
          Projects
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
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </Typography>
      </Box>

      {/* Projects Grid */}
      <Box
        sx={{
          display: "grid",
          gap: { xs: 3, sm: 4 },
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          },
        }}
      >
        {projects.map((project) => (
          <Card
            key={project.id}
            onClick={() => handleOpenModal(project)}
            sx={{
              cursor: "pointer",
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: 8,
              bgcolor: isDark ? "#000000" : "#f3f0ff",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: 12,
              },
            }}
          >
            <Box>
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                }}
              />
            </Box>
            <CardContent>
              <Typography
                variant="h6"
                fontWeight="bold"
                color="text.primary"
                mb={1}
              >
                {project.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
                mb={2}
              >
                {project.description}
              </Typography>
              <Box display="flex" flexWrap="wrap" gap={1}>
                {project.tags.map((tag, idx) => (
                  <Chip
                    key={idx}
                    label={tag}
                    size="small"
                    sx={{
                      bgcolor: isDark ? "#251f38" : "rgba(130,69,236,0.1)",
                      color: "#8245ec",
                      fontWeight: 500,
                    }}
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Modal */}
      <Dialog
        open={Boolean(selectedProject)}
        onClose={handleCloseModal}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            bgcolor: isDark ? "#1e1e1e" : "#fff",
            borderRadius: 3,
          },
        }}
      >
        {selectedProject && (
          <DialogContent sx={{ p: 3 }}>
            <Box textAlign="center">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{
                  width: "100%",
                  maxHeight: "320px",
                  objectFit: "contain",
                  borderRadius: "12px",
                  marginBottom: "16px",
                }}
              />
              <Typography variant="h5" fontWeight="bold" mb={1}>
                {selectedProject.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                mb={2}
                textAlign="center"
              >
                {selectedProject.description}
              </Typography>
              <Box display="flex" flexWrap="wrap" justifyContent="center" gap={1} mb={3}>
                {selectedProject.tags.map((tag, idx) => (
                  <Chip
                    key={idx}
                    label={tag}
                    size="small"
                    sx={{
                      bgcolor: isDark ? "#251f38" : "rgba(130,69,236,0.1)",
                      color: "#8245ec",
                      fontWeight: 500,
                    }}
                  />
                ))}
              </Box>
              <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} gap={2}>
                <Button
                  href={selectedProject.github}
                  target="_blank"
                  fullWidth
                  variant="outlined"
                  sx={{
                    borderColor: "#8245ec",
                    color: "#8245ec",
                    "&:hover": { backgroundColor: "#8245ec", color: "#fff" },
                  }}
                >
                  View Code
                </Button>
                <Button
                  href={selectedProject.webapp}
                  target="_blank"
                  fullWidth
                  variant="contained"
                  sx={{
                    bgcolor: "#8245ec",
                    "&:hover": { bgcolor: "#622dc1" },
                  }}
                >
                  View Live
                </Button>
              </Box>
            </Box>
          </DialogContent>
        )}
      </Dialog>
    </Box>
  );
};

export default Work;
