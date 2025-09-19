import React from "react";
import Particles from "@tsparticles/react";

const ParticlesBackground = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: false, // stay inside container
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: { value: 50, density: { enable: true, area: 800 } },
          color: { value: "#8245ec" },
          shape: { type: "circle" },
          opacity: { value: 0.4 },
          size: { value: { min: 2, max: 6 } },
          move: { enable: true, speed: 1.5, outModes: "out" },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default ParticlesBackground;
