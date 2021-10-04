import styled from "styled-components";

interface Props {
    readonly disabled: boolean;
  }

export const Title = styled.h1<Props>`
    color: #FF4C29;
    font-size: 2rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    opacity: ${({ disabled }) => (disabled ? "0" : "100%")};
    transition: all .25s ease-out;

    
`

export const SubTitle = styled.h1<Props>`
    color: #FF4C29;
    font-size: 1.5rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;

    animation-duration: 1s;
    animation-name: win;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-play-state: ${({ disabled }) => (disabled ? "running" : "paused")};
`