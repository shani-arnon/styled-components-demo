import React, { useState } from "react";
import styled from "styled-components/macro";
import Wrapper from "./common/Wrapper";
import SButton from "./buttons/SButton";
import MButton from "./buttons/MButton";
import ThemedButton from "./buttons/ThemedButton";

const buttons = [
    { value: "red", name: "Red", id: 1 },
    { value: "green", name: "Green", id: 2 },
    { value: "blue", name: "Blue", id: 3 }
];


const Title = styled.h1`
    width: 100%;
    text-align: center;
    position: absolute;
    top: 10%;
    color: white;
    opacity: ${({ show }) => show ? 1 : 0};
    transition: opacity 250ms ease-in-out;
`;

const ResetButton = styled(SButton)`
    color: white;
    &:active, &:hover{
        background: transparent;
        color: black;
        border: 2px solid;
    }
    border: 2px solid white;
    background: ${({bgColor}) => bgColor || ""};
    visibility:  ${({bgColor}) => bgColor || "hidden"};
`;

const Button = () => {
    const [bgColor, setBgColor] = useState("");

    return (
        <>
            <Title show={bgColor === ""}>Styled-Components Demo</Title>
            <Wrapper color={bgColor}>
                {buttons.map(({ name, value, id }) => (
                    <MButton
                        key={id}
                        value={value}
                        color={bgColor}
                        onClick={() => setBgColor(value)}
                    >
                        {name}
                    </MButton>
                    ))}
                    <ResetButton
                        bgColor={bgColor}
                        onClick={() => setBgColor("")}
                    >
                        Reset
                    </ResetButton>
                    <ThemedButton color={bgColor} />
            </Wrapper>
        </>
    );
};
export default Button;