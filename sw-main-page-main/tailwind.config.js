export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'about-pattern': "url('/src/assets/icons/about-bg.png')",
        'text-pattern': "url('/src/assets/icons/textBlock/text-bg.svg')",
        'player-pattern-1': "url('/src/assets/icons/reviews/video-preview-1.png')",
        'player-pattern-2': "url('/src/assets/icons/reviews/video-preview-2.png')",
        'player-pattern-3': "url('/src/assets/icons/reviews/video-preview-3.png')",
      }
    },
  },
  plugins: [],
}