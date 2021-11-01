import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Button from "./components/Button";
import CardGrid from "./components/CardGrid";
import Header from "./components/Header";
import { Context } from "./context/Context";

const cardImages = [
	{ src: "/img/helmet-1.png", matched: false },
	{ src: "/img/potion-1.png", matched: false },
	{ src: "/img/ring-1.png", matched: false },
	{ src: "/img/scroll-1.png", matched: false },
	{ src: "/img/shield-1.png", matched: false },
	{ src: "/img/sword-1.png", matched: false },
];

function App() {
	const [context, updateContext] = useContext(Context);
	const { firstChoice, secondChoice, cards, turns } = context;

	useEffect(() => {
		if (firstChoice && secondChoice) {
			console.log("You have chosen two cards");
			compareCards();
		}
	}, [firstChoice, secondChoice]);

	function startNewGame() {
		console.log("Starting new game... 🎮");
		// Create array of cards and shuffle the order of the cards so it's randomized
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));

		updateContext({
			cards: shuffledCards,
			turns: 0,
		});
	}

	function handleChoice(card) {
		if (card.id === firstChoice?.id || card.id === secondChoice?.id) return;
		firstChoice
			? updateContext({ secondChoice: card })
			: updateContext({ firstChoice: card });
	}

	function compareCards() {
		if (firstChoice.src === secondChoice.src) {
			console.log("It's a match! 👑 Good work!");
			updateContext({
				cards: cards.map((card) => {
					if (card.src === firstChoice.src) {
						return { ...card, matched: true };
					} else {
						return card;
					}
				}),
			});
		} else {
			console.log("Not a match this time... 😵‍💫");
		}
		setTimeout(() => {
			resetCards();
		}, 1000);
	}

	function resetCards() {
		updateContext({
			firstChoice: null,
			secondChoice: null,
			turns: turns + 1,
		});
	}

	return (
		<>
			<Header />
			<Wrapper>
				<Heading>An amazing memory game.</Heading>
				<Button onClick={startNewGame}>Start Game</Button>
				{cards.length > 0 && (
					<CardGrid handleChoice={handleChoice} cards={cards} />
				)}
			</Wrapper>
		</>
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
