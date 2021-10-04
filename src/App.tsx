import React, { useEffect, useState } from "react";
import TicTacToe from "./components/TicTacToe";

//styles
import GlobalStyle from "./global.styles";
import { TicTacToeContainer } from "./components/TicTacToeContainer.styles";
import { TitleWrapper } from "./components/TitleWrapper.styles";
import { GameContainer } from "./components/GameContainer.styles";
import { ResetButton } from "./components/ResetButton.styles";
import { Title, SubTitle } from "./components/Text.styles";

export interface TicTacToeCells {
  id: number;
  player: string;
}

const blankGrid = [
  // row 1
  { id: 1, player: "" },
  { id: 2, player: "" },
  { id: 3, player: "" },
  // row 2
  { id: 4, player: "" },
  { id: 5, player: "" },
  { id: 6, player: "" },
  // row 3
  { id: 7, player: "" },
  { id: 8, player: "" },
  { id: 9, player: "" },
]

const App: React.FC = () => {
  const [cellInfo, setCellInfo] = useState(blankGrid as TicTacToeCells[]);

  const [turn, setTurn] = useState(1);

  const [disabled, setDisabled] = useState(false);

  const [winner, setWinner] = useState("");

  const handleTurn = (id: number) => {
    //generate index
    const index: number = id - 1;
    if (cellInfo[index].player === "") {
      //copy current game state
      const gameState: TicTacToeCells[] = [...cellInfo];

      //copy correct item
      const item = { ...gameState[index] };

      //ternary for who made the move
      turn % 2 === 0 ? (item.player = "2") : (item.player = "1");

      //update the temp var
      gameState[index] = item;

      //set new value
      setCellInfo([...gameState]);

      //update turn counter
      setTurn(turn + 1);
    } else {
      console.log("too late bud!");
    }
  };

  const handleReset = () => {
    setCellInfo([...blankGrid]);
    setWinner("");
    setTurn(1);
    setDisabled(false);
  };

  const gameOver = () => {
    // winning codes
    // 012
    checkForWin(0, 1, 2);
    // 345
    checkForWin(3, 4, 5);
    // 678
    checkForWin(6, 7, 8);
    // 048
    checkForWin(0, 4, 8);
    // 246
    checkForWin(2, 4, 6);
    // 036
    checkForWin(0, 3, 6);
    // 147
    checkForWin(1, 4, 7);
    // 258
    checkForWin(2, 5, 8);
  };

  const checkForWin = (item1: number, item2: number, item3: number) => {
    if (
      cellInfo[item1].player !== "" &&
      cellInfo[item1].player === cellInfo[item2].player &&
      cellInfo[item1].player === cellInfo[item3].player
    ) {
      setWinner(cellInfo[item1].player.toString());
      setDisabled(true);
    } else {
    }
  };

  useEffect(() => {
    gameOver();
  }, [cellInfo]);

  return (
    <>
      <GlobalStyle />
      <GameContainer>
        <TitleWrapper>
          <Title disabled={disabled}>
            {turn % 2 === 0
              ? 'Player 2\'s '
              : 'Player 1\'s '}
              Action
          </Title>
        </TitleWrapper>
        <TitleWrapper>
          {winner !== "" ? (
            <SubTitle disabled={disabled}>Player {winner} won!</SubTitle>
          ) : (
            <SubTitle disabled={false}>Turn: {turn}</SubTitle>
          )}
        </TitleWrapper>
        <TicTacToeContainer>
          <TicTacToe
            cellInfo={cellInfo}
            handleTurn={handleTurn}
            disabled={disabled}
          />
        </TicTacToeContainer>
        <ResetButton onClick={() => handleReset()}>Reset</ResetButton>
      </GameContainer>
    </>
  );
};

export default App;
