import daisyui from 'daisyui';

export default {
  content: ["./src/**/*.{ts,tsx,html}"],
  theme: {
    extend: {}
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        pixeltheme: {
          "primary": "#9200ff",
          "secondary": "#0600ff",
          "accent": "#00ffbf",
          "neutral": "#070b14",
          "base-100": "#111827",
          "info": "#0094e9",
          "success": "#00ae00",
          "warning": "#ffaf00",
          "error": "#de2d49"
        }
      }
    ]
  }
};
