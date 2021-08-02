import styled from "styled-components/macro";

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
    background-color: ${({ color }) => color};
`;
export default Wrapper;
