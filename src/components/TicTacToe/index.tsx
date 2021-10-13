import React from "react";
import Cell from "./Cell";
import { TicTacToeCells } from "../../App";
// styles
import { ToeWrapper } from "./TicTacToe.styles";

interface Props {
    cellInfo: any;
    handleTurn: (id: number) => void;
    disabled: boolean;
}

const TicTacToe: React.FC<Props> = ({cellInfo, handleTurn, disabled}) => {

  return (
    <>
      <ToeWrapper disabled={disabled}>
        {cellInfo.map((cell: TicTacToeCells) => (
          <Cell key={cell.id} id={cell.id} player={cell.player} handleTurn={handleTurn}/>
        ))}
      </ToeWrapper>
    </>
  );
};

export default TicTacToe;
