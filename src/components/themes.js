console.log("themes: ")

const theme = (color) => console.log("color in theme:", color) || ({
    color: {
      primary: `${color}` || 'black',
      secondary: 'white'
    },
    font: {
      size: {
        extraSmall: '14px',
        small: '16px',
        medium: '18px',
        large: '20px',
        extraLarge: '24px',
      },
      family: 'sans-serif',
    },
    breakpoint: {
      mobile: '375px',
      tablet: '600px',
      laptop: '1200px',
      desktop: '1600px',
    },
});
export default theme;