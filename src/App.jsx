import { useState } from "react";
import styled from "styled-components";
import Button from "./components/Button";

function App() {
	return (
		<Wrapper>
			<Heading>An amazing memory game.</Heading>
			<Button>Start Game</Button>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	max-width: 860px;
	margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
	font-size: 60px;
	font-weight: 800;
	letter-spacing: -1px;
`;

export default App;
