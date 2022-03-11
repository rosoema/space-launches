import styled from "styled-components";

export default styled.button`
    margin: 2vw 0 0 2vw;
    color: white;
    background-color: transparent;
    border: 1px solid white;
    padding: 5px 20px;
    font-size: 18px;
    text-transform: uppercase;
    transition: 0.3s;
    font-family: ${props => props.theme.font};
    letter-spacing: 1px;

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 600px){
        margin: 3vw 0 0 2vw;
        font-size: 4vw;
    }
`