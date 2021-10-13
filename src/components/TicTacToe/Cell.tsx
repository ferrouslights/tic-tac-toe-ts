import React from "react";
//styles
import { CellWrapper, CellIcon } from "./Cell.styles";

interface Props {
  player: string;
  id: number;
  handleTurn: (id: number) => void;
}

const Cell: React.FC<Props> = ({ player, id, handleTurn }) => {
  return (
    <>
      <CellWrapper onClick={() => handleTurn(id)}>
        {player === "" ? (
          <CellIcon />
        ) : (
          <CellIcon>{player === "1" ? <h1>X</h1> : <h1>O</h1>}</CellIcon>
        )}
      </CellWrapper>
    </>
  );
};

export default Cell;
