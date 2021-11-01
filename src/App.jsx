import { useState } from "react";
import styled from "styled-components";
import Button from "./components/Button";
import CardGrid from "./components/CardGrid";

const cardImages = [
	{ src: "/img/helmet-1.png" },
	{ src: "/img/potion-1.png" },
	{ src: "/img/ring-1.png" },
	{ src: "/img/scroll-1.png" },
	{ src: "/img/shield-1.png" },
	{ src: "/img/sword-1.png" },
];

function App() {
	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);

	const startNewGame = () => {
		console.log("Starting new game... 🎮");
		// Create array of cards and shuffle the order of the cards so it's randomized
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));

		setCards(shuffledCards);
		setTurns(0);
	};

	console.log(cards, turns);

	return (
		<Wrapper>
			<Heading>An amazing memory game.</Heading>
			<Button onClick={startNewGame}>Start Game</Button>
			{cards.length > 0 && <CardGrid cards={cards} />}
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
