import styled from "styled-components";


export const CellWrapper = styled.button`
    height: 200px;
    width: 200px;
  background: #FF4C29;
  border: #334756 solid .25rem;
  border-radius: 20px;
  transition: all 0.2s ease-in-out;
  z-index: 5;

    
  @media (hover: hover) {
        &:hover{
        transition: all 0.1s ease-in-out;
        z-index: 10;
        border-radius: 10px;
        filter: brightness(1.1);
    }
}
`

export const CellIcon = styled.h1`
    margin: 0;
    padding: 0;
    color: #2C394B;
`