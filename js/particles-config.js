// ============================================================
// SAAS-Guard — tsParticles Configuration
// ============================================================

const PARTICLES_CONFIG = {
  fullScreen: { enable: false },
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" },
      onClick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 140, links: { opacity: 0.4 } },
      push: { quantity: 2 }
    }
  },
  particles: {
    color: { value: ["#6c63ff", "#00d4ff", "#ff6584"] },
    links: {
      color: "#6c63ff",
      distance: 150,
      enable: true,
      opacity: 0.12,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: "none",
      random: true,
      straight: false,
      outModes: { default: "out" }
    },
    number: {
      value: 70,
      density: { enable: true, area: 900 }
    },
    opacity: {
      value: { min: 0.15, max: 0.5 },
      animation: {
        enable: true,
        speed: 0.8,
        minimumValue: 0.1,
        sync: false
      }
    },
    shape: { type: "circle" },
    size: {
      value: { min: 1, max: 3 },
      animation: {
        enable: true,
        speed: 2,
        minimumValue: 0.5,
        sync: false
      }
    }
  },
  detectRetina: true
};
