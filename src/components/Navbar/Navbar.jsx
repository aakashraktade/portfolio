import React, { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
} from "@mui/material";
import {
  Menu as MenuIcon,
  GitHub,
  LinkedIn,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "work" },
    { label: "Education", id: "education" },
  ];

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  // Determine icon color based on theme
  const iconColor = mode === "light" ? "#111" : "#fff";

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: mode === 'light' 
            ? 'rgba(255, 255, 255, 0.5)' 
            : 'rgba(15, 15, 45, 0.5)',
          backdropFilter: 'blur(12px) saturate(180%)',
          WebkitBackdropFilter: 'blur(12px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
          transition: 'all 0.3s ease-in-out',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: mode === 'light' 
              ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)' 
              : 'linear-gradient(135deg, rgba(15, 15, 45, 0.4) 0%, rgba(15, 15, 45, 0.1) 100%)',
            zIndex: -1,
          },
          '&:hover': {
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)',
          },
        }}
      >

        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 5 } }}>
          {/* Logo */}
          <Typography
            variant="h6"
            sx={{ 
              fontWeight: 700, 
              cursor: "pointer",
              fontFamily: '"Poppins", sans-serif',
              '&:hover': {
                '& span:not(:first-child):not(:last-child)': {
                  color: '#6e3bdc',
                  transition: 'color 0.3s ease'
                }
              }
            }}
          >
            <span style={{ color: "#6e3bdc" }}>&lt;</span>
            <span style={{ 
              color: mode === 'light' ? '#333' : '#fff',
              transition: 'color 0.3s ease',
              margin: '0 2px'
            }}>Aakash</span>
            <span style={{ color: "#6e3bdc" }}>/</span>
            <span style={{ 
              color: mode === 'light' ? '#333' : '#fff',
              transition: 'color 0.3s ease',
              margin: '0 2px'
            }}>Raktade</span>
            <span style={{ color: "#6e3bdc" }}>&gt;</span>
          </Typography>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => handleScrollTo(item.id)}
                sx={{
                  color: mode === 'light' ? '#333' : '#fff',
                  fontWeight: 500,
                  textTransform: 'none',
                  fontSize: '1rem',
                  position: 'relative',
                  padding: '8px 20px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: '8px',
                    background: mode === 'light' 
                      ? 'rgba(255, 255, 255, 0.4)' 
                      : 'rgba(255, 255, 255, 0.05)',
                    zIndex: -1,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  },
                  '&:hover': {
                    color: mode === 'light' ? '#6e3bdc' : '#a78bfa',
                    transform: 'translateY(-1px)',
                    '&:before': {
                      opacity: 1,
                    }
                  },
                }}
              >
                {item.label}
              </Button>
            ))}

            {/* Theme Toggle */}
            <IconButton 
              onClick={toggleTheme} 
              sx={{ 
                color: mode === 'light' ? '#4b5563' : '#e5e7eb',
                backgroundColor: mode === 'light' 
                  ? 'rgba(255, 255, 255, 0.6)' 
                  : 'rgba(255, 255, 255, 0.1)',
                margin: '0 6px',
                backdropFilter: 'blur(8px)',
                border: mode === 'light' 
                  ? '1px solid rgba(255, 255, 255, 0.3)'
                  : '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: mode === 'light' 
                    ? 'rgba(255, 255, 255, 0.8)' 
                    : 'rgba(255, 255, 255, 0.2)',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              {mode === "light" ? <Brightness4 /> : <Brightness7 />}
            </IconButton>

            {/* Social Icons */}
            <IconButton
              href="https://github.com/aakashraktade"
              target="_blank"
              sx={{ 
                color: mode === 'light' ? '#4b5563' : '#e5e7eb',
                backgroundColor: mode === 'light' 
                  ? 'rgba(255, 255, 255, 0.4)' 
                  : 'rgba(255, 255, 255, 0.05)',
                margin: '0 6px',
                backdropFilter: 'blur(8px)',
                border: mode === 'light' 
                  ? '1px solid rgba(255, 255, 255, 0.3)'
                  : '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  backgroundColor: mode === 'light' 
                    ? 'rgba(255, 255, 255, 0.6)' 
                    : 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/aakash-raktade-08877b26a/"
              target="_blank"
              sx={{ 
                color: mode === 'light' ? '#0077b5' : '#e5e7eb',
                backgroundColor: mode === 'light' 
                  ? 'rgba(0, 119, 181, 0.1)' 
                  : 'rgba(0, 119, 181, 0.2)',
                margin: '0 6px',
                backdropFilter: 'blur(8px)',
                border: mode === 'light' 
                  ? '1px solid rgba(0, 119, 181, 0.2)'
                  : '1px solid rgba(0, 119, 181, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: mode === 'light' 
                    ? 'rgba(0, 119, 181, 0.2)' 
                    : 'rgba(0, 119, 181, 0.3)',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <LinkedIn />
            </IconButton>
          </Box>

          {/* Mobile Menu Toggle */}
          <IconButton
            edge="end"
            onClick={() => setMobileOpen(true)}
            sx={{ color: iconColor, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor:
              mode === "light"
                ? "rgba(255,255,255,0.95)"
                : "rgba(27,27,186,0.9)",
            backdropFilter: "blur(12px)",
          },
        }}
      >
        <List sx={{ textAlign: "center", py: 2 }}>
          {menuItems.map((item) => (
            <ListItem
              key={item.label}
              onClick={() => handleScrollTo(item.id)}
              component="button" // <-- this makes it act as a button
              sx={{
                "&:hover": { color: "#8245ec" },
                textAlign: "center",
                width: "100%",
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: "500",
                  color: mode === "light" ? "#111" : "#fff",
                  fontSize: "1.1rem",
                }}
              />
            </ListItem>
          ))}

          <Divider
            sx={{ my: 1, borderColor: mode === "light" ? "#ccc" : "#444" }}
          />

          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, py: 1 }}
          >
            <IconButton 
              onClick={toggleTheme} 
              sx={{ 
                color: mode === 'light' ? '#4b5563' : '#e5e7eb',
                backgroundColor: mode === 'light' 
                  ? 'rgba(255, 255, 255, 0.6)' 
                  : 'rgba(255, 255, 255, 0.1)',
                margin: '0 6px',
                backdropFilter: 'blur(8px)',
                border: mode === 'light' 
                  ? '1px solid rgba(255, 255, 255, 0.3)'
                  : '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: mode === 'light' 
                    ? 'rgba(255, 255, 255, 0.8)' 
                    : 'rgba(255, 255, 255, 0.2)',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              {mode === "light" ? <Brightness4 /> : <Brightness7 />}
            </IconButton>
            <IconButton
              href="https://github.com/aakashraktade"
              target="_blank"
              sx={{ 
                color: mode === 'light' ? '#4b5563' : '#e5e7eb',
                backgroundColor: mode === 'light' 
                  ? 'rgba(255, 255, 255, 0.4)' 
                  : 'rgba(255, 255, 255, 0.05)',
                margin: '0 6px',
                backdropFilter: 'blur(8px)',
                border: mode === 'light' 
                  ? '1px solid rgba(255, 255, 255, 0.3)'
                  : '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  backgroundColor: mode === 'light' 
                    ? 'rgba(255, 255, 255, 0.6)' 
                    : 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/aakash-raktade-08877b26a/"
              target="_blank"
              sx={{ 
                color: mode === 'light' ? '#0077b5' : '#e5e7eb',
                backgroundColor: mode === 'light' 
                  ? 'rgba(0, 119, 181, 0.1)' 
                  : 'rgba(0, 119, 181, 0.2)',
                margin: '0 6px',
                backdropFilter: 'blur(8px)',
                border: mode === 'light' 
                  ? '1px solid rgba(0, 119, 181, 0.2)'
                  : '1px solid rgba(0, 119, 181, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: mode === 'light' 
                    ? 'rgba(0, 119, 181, 0.2)' 
                    : 'rgba(0, 119, 181, 0.3)',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <LinkedIn />
            </IconButton>
          </Box>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
