import React from "react";
import styled from "styled-components";

import { Board } from "./components";

const Container = styled.div({
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Footer = styled.footer({
  position: "absolute",
  bottom: 0,
});

function App() {
  return (
    <Container>
      <Board />
      <Footer>
        <div>&copy; {new Date().getFullYear()} Chi Vong - React N-Puzzle</div>
      </Footer>
    </Container>
  );
}

export default App;
