module.exports = {
  purge: {
    content: ["./src/**/*.js"],
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        blue: 'var(--color-blue)',
      }
    },
  },
  variants: {},
  plugins: [],
};
