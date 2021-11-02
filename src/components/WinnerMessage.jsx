import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../context/Context";

function WinnerMessage() {
	const [context, updateContext] = useContext(Context);

	return (
		<Wrapper>
			<h1>Congratulations, you won! 🥳🏆</h1>
			<Turns>
				The game lasted for {context.turns} turns! Can you win even faster next
				time? 😉
			</Turns>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	z-index: 100000;
`;

const Turns = styled.p`
	margin: 16px 0;
`;

export default WinnerMessage;
