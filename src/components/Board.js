import React from "react";
import styled from "styled-components";

import { cols } from "../utils/constants";
import {
  canSwap,
  getLinearIndexFromRowAndCol,
  getRowAndColFromLinearIndex,
  isSolved,
  newState,
  swap,
} from "../utils/helpers";
import Box from "./Box";

const Grid = styled.div({
  display: "grid",
  gridTemplateColumns: `repeat(${cols}, 50px)`,
  gap: 2,
});

const Button = styled("button")({
  padding: 5,
  marginTop: 15,
});

const Text = styled("h3")({
  marginTop: 15,
});

const Board = () => {
  const [state, setState] = React.useState(newState());

  function handleBoxClick(index) {
    if (canSwap(index, state.emptyIndex)) {
      const [aRow, aCol] = getRowAndColFromLinearIndex(index);
      const [bRow, bCol] = getRowAndColFromLinearIndex(state.emptyIndex);
      let tempArr;

      if (aRow === bRow) {
        let diff = Math.abs(aCol - bCol);
        let tempArr;
        if (diff === 1) {
          tempArr = swap(state.board, index, state.emptyIndex);
        } else {
          tempArr = [...state.board];
          let tempIndex;
          let bIndex = state.emptyIndex;
          for (let i = 1; i <= diff; i++) {
            if (aCol < bCol) {
              tempIndex = getLinearIndexFromRowAndCol(bRow, bCol - i);
            } else {
              tempIndex = getLinearIndexFromRowAndCol(bRow, bCol + i);
            }
            tempArr = swap(tempArr, tempIndex, bIndex);
            bIndex = tempIndex;
          }
        }
        setState(() => {
          return {
            board: tempArr,
            emptyIndex: index,
          };
        });
      } else if (aCol === bCol) {
        let diff = Math.abs(aRow - bRow);
        if (diff === 1) {
          tempArr = swap(state.board, index, state.emptyIndex);
        } else {
          tempArr = [...state.board];
          let tempIndex;
          let bIndex = state.emptyIndex;
          for (let i = 1; i <= diff; i++) {
            if (aRow < bRow) {
              tempIndex = getLinearIndexFromRowAndCol(bRow - i, bCol);
            } else {
              tempIndex = getLinearIndexFromRowAndCol(bRow + i, bCol);
            }
            tempArr = swap(tempArr, tempIndex, bIndex);
            bIndex = tempIndex;
          }
        }
        setState(() => {
          return {
            board: tempArr,
            emptyIndex: index,
          };
        });
      }
    }
  }

  return (
    <div>
      <Grid>
        {state.board.map((el, index) => (
          <Box
            key={el}
            index={index}
            value={el}
            handleBoxClick={handleBoxClick}
          />
        ))}
      </Grid>
      <Button onClick={() => setState(() => newState())}>Slumpa</Button>
      {isSolved(state.board) ? <Text>Grattis! Du har vunnit 🏆</Text> : null}
    </div>
  );
};

export default Board;
