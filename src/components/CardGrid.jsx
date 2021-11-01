import React from "react";
import styled from "styled-components";
import Card from "./Card";

function CardGrid({ cards, handleChoice }) {
	return (
		<Wrapper>
			{cards.map((card) => (
				<Card handleChoice={handleChoice} card={card} key={card.id} />
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
