// GlobeBackground.jsx
import React from "react";
import { Particles } from "@tsparticles/react";
import { loadBasic } from "@tsparticles/basic";

const GlobeBackground = () => {
  const particlesInit = async (engine) => {
    // Load only basic preset
    await loadBasic(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed top-0 left-0 w-full h-full -z-10"
      options={{
        background: {
          color: {
            value: "#0d0d0d",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ec4899",
          },
          links: {
            color: "#9333ea",
            distance: 120,
            enable: true,
            opacity: 0.6,
            width: 1.5,
          },
          move: {
            enable: true,
            speed: 1.5,
            outModes: {
              default: "bounce",
            },
          },
          number: {
            value: 60,
            density: {
              enable: true,
              area: 800,
            },
          },
          opacity: {
            value: 0.8,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default GlobeBackground;
