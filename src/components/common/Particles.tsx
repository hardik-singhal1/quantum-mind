import {
    type Container,
    type ISourceOptions,
    MoveDirection,
    OutMode,
} from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";

export const ParticlesComponent: React.FC = () => {
  const [init, setInit] = useState(false);

  // Initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Use slim version for performance
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  // Particles configuration with reduced opacity and slower speed
  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#0f172a", // Dark background color to match your website
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push", // Add particles on click
          },
          onHover: {
            enable: true,
            mode: "repulse", // Repulse on hover
          },
        },
        modes: {
          push: {
            quantity: 2, // Add 4 particles on click
          },
          repulse: {
            distance: 200, // Repulse distance
            duration: 0.2, // Repulse duration
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff", // White particles color
        },
        links: {
          color: "#ffffff", // White color for the links between particles
          distance: 150, // Link distance between particles
          enable: true,
          opacity: 0.1, // Reduced opacity for links
          width: 1, // Link width
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 1, // Slower particle speed (was 6, now 2)
          straight: false,
        },
        number: {
          density: {
            enable: true, // Density of particles
          },
          value: 50, // Number of particles
        },
        opacity: {
          value: 0.1, // Reduced opacity for particles (was 0.5, now 0.2)
        },
        shape: {
          type: "circle", // Particle shape
        },
        size: {
          value: { min: 1, max: 5 }, // Particle size range
        },
      },
      detectRetina: true,
    }),
    []
  );

  // Render particles background inside Hero section
  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          backdropFilter: "blur(8px)", // Applying blur effect
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    );
  }

  return <></>;
};
