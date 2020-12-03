import { amountNumbers, cols } from "./constants";

// fill the array from 1 to N
export function initBoard() {
  return Array(amountNumbers + 1)
    .fill()
    .map((_, i) => i + 1);
}

// Fisher-Yates Algorithm
export function shuffleBoard(arr) {
  const shuffledArr = [...arr];
  for (let i = 1; i < shuffledArr.length - 1; ++i) {
    const j = Math.floor(Math.random() * i);
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
  }
  return shuffledArr;
}

export function newBoard() {
  return shuffleBoard(initBoard());
}

export function newState() {
  return {
    board: newBoard(),
    emptyIndex: amountNumbers,
  };
}

export function getRowAndColFromLinearIndex(index) {
  const row = Math.floor(index / cols);
  const col = index % cols;

  return [row, col];
}

// can swap if the boxes are on same row or column
export function canSwap(aIndex, bIndex) {
  const [aRow, aCol] = getRowAndColFromLinearIndex(aIndex);
  const [bRow, bCol] = getRowAndColFromLinearIndex(bIndex);

  return aRow === bRow || aCol === bCol;
}

export function swap(arr = [], aIndex, bIndex) {
  const newArr = [...arr];
  if (newArr.length >= 2) {
    [newArr[aIndex], newArr[bIndex]] = [newArr[bIndex], newArr[aIndex]];

    return newArr;
  }

  return [];
}

export function getLinearIndexFromRowAndCol(row, col) {
  return row * cols + col;
}

export function isSolved(arr) {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] !== i + 1) {
      return false;
    }
  }

  return true;
}
