import React from "react";
import styled, { ThemeProvider } from "styled-components/macro";
import theme from "../themes";
import SButton from "./SButton";


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

const ThemedButton = ({ color }) => {
  return (
      <div>
        <ThemeProvider theme={theme(color)}>
            <Button>Default Theme</Button>
        </ThemeProvider>
        <ThemeProvider theme={invertTheme(theme(color))}>
          <Button>Inverted Theme</Button>
        </ThemeProvider>
      </div>
  );
};
export default ThemedButton;