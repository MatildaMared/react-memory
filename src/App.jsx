import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Button from "./components/Button";
import CardGrid from "./components/CardGrid";
import Header from "./components/Header";
import Modal from "./components/Modal";
import WinnerMessage from "./components/WinnerMessage";
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
	const [displayWinner, setDisplayWinner] = useState(false);

	useEffect(() => {
		if (firstChoice && secondChoice) {
			compareCards();
		}
	}, [firstChoice, secondChoice]);

	useEffect(() => {
		startNewGame();
	}, []);

	useEffect(() => {
		checkForWinner();
	}, [context.turns]);

	useEffect(() => {
		startNewGame();
	}, [context.numOfPairs]);

	function startNewGame() {
		setDisplayWinner(false);
		const cards = [];
		for (let i = 0; i < context.numOfPairs; i++) {
			cards.push(context.cardImages[i]);
		}
		const shuffledCards = [...cards, ...cards]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));

		updateContext({
			cards: shuffledCards,
			firstChoice: null,
			secondChoice: null,
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
		updateContext({
			disabled: true,
		});

		if (firstChoice.src === secondChoice.src) {
			updateContext({
				cards: cards.map((card) => {
					if (card.src === firstChoice.src) {
						return { ...card, matched: true };
					} else {
						return card;
					}
				}),
			});
			resetCards();
		} else {
			setTimeout(() => {
				resetCards();
			}, 1000);
		}
		updateContext();
	}

	function resetCards() {
		updateContext({
			firstChoice: null,
			secondChoice: null,
			turns: turns + 1,
			disabled: false,
		});
	}

	function checkForWinner() {
		let matches = 0;
		for (const card of context.cards) {
			if (card.matched === true) {
				matches += 1;
			}
		}
		if (matches === context.numOfPairs * 2) {
			setTimeout(() => {
				setDisplayWinner(true);
			}, 1000);
		}
	}

	return (
		<>
			<Header />
			<Wrapper>
				<Button onClick={startNewGame}>Start New Game</Button>
				{cards.length > 0 && (
					<CardGrid handleChoice={handleChoice} cards={cards} />
				)}
				<Turns>Turns: {context.turns}</Turns>
			</Wrapper>
			<Modal
				show={displayWinner}
				onClose={() => {
					setDisplayWinner(false);
					startNewGame();
				}}
			>
				<WinnerMessage />
			</Modal>
		</>
	);
}

const Wrapper = styled.div`
	max-width: 800px;
	margin: 20px auto;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Heading = styled.h1`
	font-size: 60px;
	font-weight: 800;
	letter-spacing: -1px;
`;

const Turns = styled.p`
	margin-top: 16px;
`;

export default App;
