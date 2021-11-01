import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "../context/Context";

function Card({ card, handleChoice, flipped }) {
	const [context, setContext] = useContext(Context);
	const handleClick = () => {
		if (context.disabled === true) return;
		handleChoice(card);
	};

	return (
		<CardWrapper>
			<CardFront
				className={flipped ? "flipped" : ""}
				src={card.src}
				alt="card front"
			/>
			<CardBack onClick={handleClick} src={context.coverSrc} alt="card back" />
		</CardWrapper>
	);
}

const CardWrapper = styled.div`
	position: relative;
	& img {
		width: 100%;
		display: block;
		border: 4px solid var(--color-light);
		border-radius: 16px;
		cursor: pointer;
	}
`;

const CardFront = styled.img`
	transform: rotateY(90deg);
	transition: all 0.2s;
	position: absolute;
	
	&.flipped {
		transform: rotateY(0deg);
		transition-delay: 0.2s;
	`;

const CardBack = styled.img`
	transition: all 0.2s;
	transition-delay: 0.2s;

	${CardFront}.flipped + & {
		transform: rotateY(90deg);
		transition-delay: 0s;
	}
`;

export default Card;
