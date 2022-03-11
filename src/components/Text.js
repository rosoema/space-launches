import styled from "styled-components";

export default styled.p`
    color: white;
    font-size: ${props => props.main ? "2.3vw" : "22px"};
    font-weight: 100;
    font-family: ${props => props.theme.font};
    margin: 0 0 1vw 2.2vw;
    max-width: ${props => props.main ? "auto" : "470px"};

    @media (max-width: 1000px) {
        font-size: ${props => props.main ? "3.8vw" : "2.5vw"};
    }

    @media (max-width: 600px) {
        font-size: ${props => props.main ? "4.5vw" : "4vw"};
        margin: ${props => props.main ? "3.5vw 0 0 2vw" : "0 0 5vw 0"};
    }
`