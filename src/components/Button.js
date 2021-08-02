import React, { useState } from "react";
import styled from "styled-components/macro";
import SButton from "./buttons/SButton";
import MButton from "./buttons/MButton";
import ThemedButton from "./buttons/ThemedButton";


const buttons = [
    { value: "red", name: "Red", id: 1 },
    { value: "green", name: "Green", id: 2 },
    { value: "blue", name: "Blue", id: 3 }
];

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 15px;
    justify-content: center;
    align-items: center;
    justify-items: center;
    flex-wrap: wrap;
    height: 100vh;
    width: 100%;
    background-color: ${({ color }) => color || ""};
`;

const Title = styled.h1`
    opacity: ${({ show }) => show ? 1 : 0};
    width: 100%;
    text-align: center;
    position: absolute;
    top: 10%;
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
`;

export default () => {
    const [bgColor, setBgColor] = useState("");

    return (
        <>
            <Title show={bgColor === ""}>Themed Backgrounds</Title>
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
                    {bgColor !== "" && (
                        <ResetButton
                        bgColor={bgColor}
                        onClick={() => setBgColor("")}
                        >
                            Reset
                        </ResetButton>
                    )}
                    <ThemedButton />
            </Wrapper>
        </>
    );
};