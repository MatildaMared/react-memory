import React, { useContext } from "react";
import styled from "styled-components";
import Card from "./Card";
import { Context } from "../context/Context";

function CardGrid({ cards, handleChoice }) {
	const [context, updateContext] = useContext(Context);

	return (
		<Wrapper className={context.numOfPairs === 12 ? "smaller-grid" : ""}>
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
	margin-top: 24px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 16px;
	padding: 0 16px;

	&.smaller-grid {
		grid-template-columns: repeat(6, 1fr);
		grid-gap: 8px;

		@media (max-width: 500px) {
			grid-template-columns: repeat(4, 1fr);
		}
	}
`;

export default CardGrid;
