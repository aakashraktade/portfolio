// src/App.jsx
import "./App.css";
import React, { useContext, lazy, Suspense, useMemo, memo } from "react";

// Lazy load non-critical components
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));

// Import other components normally
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experiance from "./components/Experiance/Experiance";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";

// Use a lighter version of BlurBlob or implement a simpler version
import BlurBlob from "./BlurBlob";

import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import { Box, CircularProgress } from "@mui/material";

// Memoized background styles component
const BackgroundStyles = memo(({ mode, children }) => (
  <Box
    sx={{
      bgcolor: mode === "light" ? '#f8f9ff' : "#050414",
      backgroundImage: mode === "light" 
        ? 'radial-gradient(ellipse at top left, rgba(162, 155, 254, 0.13) 0%, transparent 50%), \
           radial-gradient(ellipse at top right, rgba(0, 225, 255, 0.13) 0%, transparent 50%), \
           radial-gradient(ellipse at bottom left, rgba(255, 155, 155, 0.08) 0%, transparent 50%), \
           radial-gradient(ellipse at bottom right, rgba(155, 255, 200, 0.08) 0%, transparent 50%)'
        : 'none',
      color: mode === "light" ? "#111827" : "#fff",
      minHeight: "100vh",
      position: "relative",
      transition: "background-color 0.3s ease, color 0.3s ease",
      overflowX: "hidden",
      willChange: 'background-color, color',
    }}
  >
    {children}
  </Box>
));

// Memoized GridOverlay to prevent unnecessary re-renders
const GridOverlay = memo(({ mode }) => (
  <Box
    sx={{
      position: "absolute",
      inset: 0,
      backgroundImage: mode === "light"
        ? "linear-gradient(to right,#e2e8f01a 1px,transparent 1px),linear-gradient(to bottom,#e2e8f01a 1px,transparent 1px)"
        : "linear-gradient(to right,#4f4f4f2e 1px,transparent 1px),linear-gradient(to bottom,#4f4f4f2e 1px,transparent 1px)",
      backgroundSize: "24px 24px",
      maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 110%)",
      transition: "all 0.3s ease",
      pointerEvents: "none",
    }}
  />
));

// Loading component for Suspense fallback
const LoadingFallback = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <CircularProgress />
  </Box>
);

function AppContent() {
  const { mode } = useContext(ThemeContext);
  
  // Memoize the BlurBlob props to prevent unnecessary re-renders
  const blurBlobProps = useMemo(() => ({
    position: { top: "35%", left: "20%" },
    size: { width: "30%", height: "40%" },
    color: mode === "light" ? "rgba(130, 69, 236, 0.08)" : "rgba(130, 69, 236, 0.2)",
  }), [mode]);

  return (
    <BackgroundStyles mode={mode}>
      {/* Background Blob - Only render on non-touch devices for better performance */}
      {!('ontouchstart' in window) && <BlurBlob {...blurBlobProps} />}

      {/* Grid overlay effect */}
      <GridOverlay mode={mode} />

      {/* Main content */}
      <Box sx={{ position: "relative", pt: { xs: '4rem', md: '5rem' } }}>
        <Navbar />
        <About />
        <Skills />
        <Experiance />
        <Work />
        <Education />
        
        {/* Lazy loaded components with Suspense */}
        <Suspense fallback={null}>
          <Contact />
          <Footer />
        </Suspense>
      </Box>
    </BackgroundStyles>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
