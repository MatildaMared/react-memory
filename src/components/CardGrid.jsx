import React from "react";
import styled from "styled-components";

function CardGrid({ cards }) {
	return (
		<Wrapper>
			{cards.map((card) => (
				<Card key={card.id}>
					<div>
						<CardFront src={card.src} alt="card front" />
						<CardBack src="/img/cover.png" alt="card back" />
					</div>
				</Card>
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

const Card = styled.div`
	background-color: pink;
`;

const CardFront = styled.img`
	width: 100%;
`;

const CardBack = styled.img`
	width: 100%;
`;

export default CardGrid;
