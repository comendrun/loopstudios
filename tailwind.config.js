/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "curiosity-mobile":
          "url('/src/assets/images/mobile/image-curiosity.jpg')",

        "curiosity-desktop":
          "url('/src/assets/images/desktop/image-curiosity.jpg')",

        "deep-earth-mobile":
          "url('/src/assets/images/mobile/image-deep-earth.jpg')",

        "deep-earth-desktop":
          "url('/src/assets/images/desktop/image-deep-earth.jpg')",

        "fisheye-mobile": "url('/src/assets/images/mobile/image-fisheye.jpg')",

        "fisheye-desktop":
          "url('/src/assets/images/desktop/image-fisheye.jpg')",

        "from-above-mobile":
          "url('/src/assets/images/mobile/image-from-above.jpg')",

        "from-above-desktop":
          "url('/src/assets/images/desktop/image-from-above.jpg')",

        "grid-mobile": "url('/src/assets/images/mobile/image-grid.jpg')",

        "grid-desktop": "url('/src/assets/images/desktop/image-grid.jpg')",

        "hero-mobile": "url('/src/assets/images/mobile/image-hero.jpg')",

        "hero-desktop": "url('/src/assets/images/desktop/image-hero.jpg')",

        "interactive-mobile":
          "url('/src/assets/images/mobile/image-interactive.jpg')",

        "interactive-desktop":
          "url('/src/assets/images/desktop/image-interactive.jpg')",

        "night-arcade-mobile":
          "url('/src/assets/images/mobile/image-night-arcade.jpg')",

        "night-arcade-desktop":
          "url('/src/assets/images/desktop/image-night-arcade.jpg')",

        "pocket-borealis-mobile":
          "url('/src/assets/images/mobile/image-pocket-borealis.jpg')",

        "pocket-borealis-desktop":
          "url('/src/assets/images/desktop/image-pocket-borealis.jpg')",

        "soccer-team-mobile":
          "url('/src/assets/images/mobile/image-soccer-team.jpg')",

        "soccer-team-desktop":
          "url('/src/assets/images/desktop/image-soccer-team.jpg')",
      },
    },

    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
