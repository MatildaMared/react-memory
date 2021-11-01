import React, { useContext } from "react";
import styled from "styled-components";
import Card from "./Card";
import { Context } from "../context/Context";

function CardGrid({ cards, handleChoice }) {
	const [context, updateContext] = useContext(Context);

	return (
		<Wrapper>
			{cards.map((card) => (
				<Card
					handleChoice={handleChoice}
					flipped={
						card === context.firstChoice ||
						card === context.secondChoice ||
						card.matched
					}
					card={card}
					key={card.id}
				/>
			))}
		</Wrapper>
	);
}

const Wrapper = styled.section`
	margin-top: 32px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 16px;
`;

export default CardGrid;
