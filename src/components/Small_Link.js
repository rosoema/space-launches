import styled from "styled-components";

export default styled.a`
    font-size: 16px;
    font-weight: 100;
    font-family: ${props => props.theme.font};
    margin: 0 0 0 2vw;
    text-decoration: none;
    text-transform: uppercase;
    padding: 5px 0;
    border-bottom: 1px solid white;
    color: white;

    &:hover {
        color: orange;
        border-bottom-color: orange;
    }

    @media (max-width: 600px){
        font-size: 4vw;
    }
`