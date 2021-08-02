import styled from "styled-components/macro";

const SButton = styled.button`
  color: white;
  padding: 5px 10px;
  width: 110px;
  margin: 0 15px;
  border-radius: 4px;
  border: none;
  background-color: ${({ value }) => value};
  font-weight: ${({ color, value }) => color === value && "bold"};
  font-size: ${({ color, value }) => (color === value ? "24px" : "normal")};
  transition: all 250ms;
  &:hover {
      cursor: pointer;
  }
`;

export default SButton;