import React from "react";
import styled from "styled-components";

function Card({ card, handleChoice }) {
	const handleClick = () => {
		handleChoice(card);
	};

	return (
		<CardWrapper>
			<CardVariants>
				<CardFront src={card.src} alt="card front" />
				<CardBack onClick={handleClick} src="/img/cover.png" alt="card back" />
			</CardVariants>
		</CardWrapper>
	);
}

const CardWrapper = styled.div``;

const CardVariants = styled.div`
	& img {
		width: 100%;
		display: block;
		border: 2px solid var(--color-light);
		border-radius: 16px;
	}
`;

const CardFront = styled.img``;

const CardBack = styled.img``;

export default Card;
