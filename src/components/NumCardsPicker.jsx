import React, { useContext } from "react";
import { Context } from "./../context/Context";
import styled from "styled-components";

function NumCardsPicker() {
	const [context, updateContext] = useContext(Context);

	return (
		<Wrapper>
			<Buttons>
				<Btn
					className={context.numOfPairs === 4 ? "active" : ""}
					onClick={() => {
						updateContext({
							numOfPairs: 4,
						});
					}}
				>
					<span>8</span>
				</Btn>
				<Btn
					className={context.numOfPairs === 6 ? "active" : ""}
					onClick={() => {
						updateContext({
							numOfPairs: 6,
						});
					}}
				>
					<span>12</span>
				</Btn>
				<Btn
					className={context.numOfPairs === 8 ? "active" : ""}
					onClick={() => {
						updateContext({
							numOfPairs: 8,
						});
					}}
				>
					<span>16</span>
				</Btn>
				<Btn
					className={context.numOfPairs === 12 ? "active" : ""}
					onClick={() => {
						updateContext({
							numOfPairs: 12,
						});
					}}
				>
					<span>24</span>
				</Btn>
			</Buttons>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin: 0 auto;
	width: 80vw;
	max-width: 700px;
`;

const Buttons = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 16px;
	max-width: 600px;
	margin: 0 auto;
`;

const Btn = styled.button`
	border-radius: 16px;
	opacity: 0.3;
	width: 100%;
	max-width: 200px;
	padding-top: 100%;
	position: relative;
	background-color: transparent;
	border: 4px solid var(--color-grey);
	cursor: pointer;

	& > span {
		color: var(--color-light);
		font-weight: 700;
		font-size: 4rem;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	}

	&.active {
		opacity: 1;
	}
`;

export default NumCardsPicker;
