import styled from "styled-components";

export default styled.h1`
    font-family: ${props => props.theme.font};
    font-size: ${props => props.primary ? "10vw" : "4vw"};
    color: white;
    margin: 2vw 0 1vw 2vw;
    padding: 0;

    @media (max-width: 1000px) {
        font-size: ${props => props.primary ? "15vw" : "6vw"};
    }

    @media (max-width: 600px) {
        font-size: ${props => props.primary ? "16vw" : "7vw"};
        margin: ${props => !props.primary ? "10vw 0 6vw 2vw" : "2vw 0 1vw 2vw"};
    }
`;