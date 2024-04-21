import daisyui from 'daisyui';

export default {
  content: ["./src/**/*.{ts,tsx,html}"],
  theme: {
    extend: {}
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['dark']
  }
};
