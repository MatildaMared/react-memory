import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../context/Context";

function CoverPicker() {
	const [context, updateContext] = useContext(Context);
	const covers = [
		{ src: "/img/cover-1.jpeg", id: Math.random() },
		{ src: "/img/cover-2.jpeg", id: Math.random() },
		{ src: "/img/cover-3.jpeg", id: Math.random() },
		{ src: "/img/cover-4.jpeg", id: Math.random() },
		{ src: "/img/cover-5.jpeg", id: Math.random() },
		{ src: "/img/cover-6.jpeg", id: Math.random() },
	];

	const clickHandler = (cover) => {
		updateContext({
			coverSrc: cover.src,
		});
	};

	return (
    <div>
      <h1>Pick a cover</h1>
			<Covers>
				{covers.map((cover) => (
					<Cover
						key={cover.id}
						onClick={() => {
							clickHandler(cover);
						}}
						className={context.coverSrc === cover.src ? "active" : ""}
						src={cover.src}
						alt="cover image"
					/>
				))}
			</Covers>
		</div>
	);
}

const Covers = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 16px;
`;

const Cover = styled.img`
	border: 4px solid transparent;
  width: 100%;
	max-width: 200px;
	height: auto;
	border-radius: 16px;
	opacity: 0.5;
	transition: all 0.3s;
	cursor: pointer;

	&.active {
		opacity: 0.8;
		border: 4px solid var(--color-light);
		position: relative;
	}

	&:hover {
		opacity: 1;
	}
`;

export default CoverPicker;
