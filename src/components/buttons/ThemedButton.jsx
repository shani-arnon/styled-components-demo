import React from "react";
import styled, { ThemeProvider } from "styled-components/macro";
import SButton from "./SButton";



const theme = {
    color: {
      primary: 'black',
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
};

const Button = styled(SButton)`
  color: ${({theme}) => theme.color.primary};
  border: 2px solid ${({theme}) => theme.color.primary};
  background: ${({theme}) => theme.color.secondary};

  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border-radius: 3px;
  width: 240px;
`;


const invertTheme = (theme) => ({
    ...theme,
    color:{
        primary: theme.color.secondary,
        secondary: theme.color.primary
    }
})

const ThemedButton = () => {
  return (
      <div>
        <ThemeProvider theme={theme}>
            <Button>Default Theme</Button>
        </ThemeProvider>
        <ThemeProvider theme={invertTheme(theme)}>
          <Button>Inverted Theme</Button>
        </ThemeProvider>
      </div>
  );
};
export default ThemedButton;