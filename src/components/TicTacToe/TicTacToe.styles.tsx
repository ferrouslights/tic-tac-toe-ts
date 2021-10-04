import styled from "styled-components";

interface CellProps {
  readonly disabled: boolean;
}

export const ToeWrapper = styled.div<CellProps>`
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  height: 600px;
  width: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 5px;

  /* background: green; */
`;
