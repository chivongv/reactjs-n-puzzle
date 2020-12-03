import React from "react";
import styled from "styled-components";

import { amountNumbers } from "../utils/constants";

const Container = styled.div({
  width: 50,
  height: 50,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  background: "#FAE8E0",
  animation: "ease",
});

const Empty = styled.div({
  width: 50,
  height: 50,
  background: "#A49393",
});

const Box = ({ index, value = 1, handleBoxClick }) => {
  if (value !== amountNumbers + 1) {
    return <Container onClick={() => handleBoxClick(index)}>{value}</Container>;
  }
  return <Empty></Empty>;
};

export default Box;
