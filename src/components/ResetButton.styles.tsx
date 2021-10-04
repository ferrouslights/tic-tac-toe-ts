import styled from "styled-components";

export const ResetButton = styled.button`
    height: 50px;
    width: 150px;
    border-radius: 30px;
    background: #FF4C29;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    border: #334756 solid .125rem;
    transition: all 0.1s ease-in-out;


    @media (hover: hover) {
        &:hover{
        transition: all 0.1s ease-in-out;
        transform: scale(1.1);
        }
    }
`