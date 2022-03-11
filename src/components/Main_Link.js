import styled from "styled-components";

export default styled.li`
    color: white;
    margin: 20px;
    padding: 20px 0;
    border: 1px solid white;
    background-color: rgba(255,255,255,0.15);
    font-size: 1.3vw;
    text-transform: uppercase;
    font-weight: 100;
    letter-spacing: 1px;
    transition: 0.3s;
    width: 700px;
    font-family: ${props => props.theme.font};
    &:hover {
        transform: scale(1.07);
        color: orange;
    }

    @media (max-width: 1100px) {
        font-size: 3vw;
        width: 70vw;
    }

    @media (max-width: 600px) {
        font-size: 3.7vw;
        width: 80vw;
    }
`