import React from "react";
import { Button as MuiButton } from "@material-ui/core";
import { styled as muiStyled } from "@material-ui/core/styles";


const MButton = muiStyled(({ color, value, ...other }) => (
  <MuiButton {...other} />
))({
  color: "white",
  padding: "5px 30px",
  borderRadius: 3,
  textTransform: "capitalize",
  backgroundColor: ({value}) => value || "black",
  fontWeight: ({color, value}) => color === value && "bold",
  fontSize: ({color, value}) => color === value && 24,
  opacity: ({value}) => value ? 1 : .7,
  "&:hover": {
        cursor: "pointer",
        backgroundColor: ({value}) => value || "black",
        opacity: 1,

    },
    transition: "opacity 250ms",
});

export default MButton;