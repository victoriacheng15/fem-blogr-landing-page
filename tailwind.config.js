module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    backgroundPosition: {
      custom: 'left 35% top 40%',
    },
    extend: {
      colors: {
        primary: {
          cta: 'hsl(356, 100%, 66%)',
          ctaHover: 'hsl(355, 100%, 74%)',
          heading: 'hsl(208, 49%, 24%)',
        },
        neutral: {
          txtFooter: 'hsl(240, 2%, 79%)',
          bgFooter: 'hsl(240, 10%, 16%)',
          body: 'hsl(207, 13%, 34%)',
        },
        gradientLight: {
          950: 'hsl(353, 100%, 62%)',
          925: 'hsl(13, 100%, 72%)',
        },
        gradientDark: {
          950: 'hsl(237, 17%, 21%)',
          925: 'hsl(237, 23%, 32%)',
        },
      },
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      borderRadius: {
        100: '6.25rem',
      },
    },
  },
  plugins: [],
};
