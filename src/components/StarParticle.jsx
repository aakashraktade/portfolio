// import React, { useRef, useEffect } from "react";
// const rand = (min, max) => Math.random() * (max - min) + min;
// const StarParticle = ({ id, width, height }) => {
//   const elRef = useRef(null);
//   const posRef = useRef({
//     x: rand(0, width),
//     y: rand(0, height),
//     dx: Math.cos(Math.random() * Math.PI * 2) * rand(0.1, 0.7),
//     dy: Math.sin(Math.random() * Math.PI * 2) * rand(0.1, 0.7),
//   });
//   useEffect(() => {
//     let raf;
//     const step = () => {
//       const el = elRef.current;
//       if (!el) return;
//       let { x, y, dx, dy } = posRef.current;
//       x += dx;
//       y += dy;
//       if (x < 0) x = width; if (x > width) x = 0;
//       if (y < 0) y = height; if (y > height) y = 0;
//       posRef.current = { x, y, dx, dy };
//       el.style.transform = `translate(${x}px, ${y}px)`;
//       raf = requestAnimationFrame(step);
//     };
//     raf = requestAnimationFrame(step);
//     return () => cancelAnimationFrame(raf);
//   }, [width, height]);
//   return (
//     <div
//       ref={elRef}
//       aria-hidden
//       style={{
//         position: "absolute",
//         left: 0,
//         top: 0,
//         width: 2,
//         height: 2,
//         background: "rgba(255,255,255,0.8)",
//         borderRadius: "50%",
//         pointerEvents: "none",
//         boxShadow: "0 0 6px rgba(255, 255, 255, 0.5)",
//         transform: `translate(${Math.round(posRef.current.x)}px, ${Math.round(posRef.current.y)}px)`,
//         willChange: "transform",
//       }}
//     />
//   );
// };
// export default StarParticle;




import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const StarParticle = ({ mode }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particleColor = mode === "light" ? "#000000" : "#ffffff";

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: {
            value: 80,
            density: { enable: true, area: 800 },
          },
          color: { value: particleColor }, // 👈 theme-based color
          shape: { type: "circle" },
          opacity: { value: 0.8 },
          size: { value: { min: 1, max: 3 } },
          links: {
            enable: true,
            distance: 150,
            color: particleColor, // 👈 theme-based links
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            outModes: "out",
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
};

export default StarParticle;

