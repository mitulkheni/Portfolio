import React from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// ParticlesProvider runs this once for the whole app, so it must be a stable reference.
const initEngine = async (engine) => {
  await loadSlim(engine);
};

// Module scope on purpose: <Particles> reloads whenever the options object changes identity.
// Click-to-add-particle is intentionally absent; the canvas never receives pointer events.
const options = {
  fullScreen: { enable: false },
  detectRetina: true,
  particles: {
    number: {
      value: 160,
      density: { enable: true, width: 1500, height: 1000 },
    },
    color: { value: "#ffffff" },
    links: { enable: false },
    move: { enable: true, direction: "right", speed: 0.05 },
    size: { value: 1 },
    opacity: {
      value: { min: 0.05, max: 1 },
      animation: { enable: true, speed: 1, sync: false },
    },
  },
};

function Particle() {
  return (
    <ParticlesProvider init={initEngine}>
      <Particles id="tsparticles" options={options} />
    </ParticlesProvider>
  );
}

export default Particle;
