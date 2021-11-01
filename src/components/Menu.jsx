import React, { useState } from "react";
import Modal from "./Modal";
import CoverPicker from "./CoverPicker";
import styled from "styled-components";

function Menu({ show }) {
	const [displayCoverPicker, setDisplayCoverPicker] = useState(false);

	function toggleDisplayCoverPicker() {
		setDisplayCoverPicker(!displayCoverPicker);
	}

	return (
		<>
			<MenuContent className={show ? "show" : ""}>
				<List>
					<Item onClick={toggleDisplayCoverPicker}>Change Cover</Item>
					<Item onClick={toggleDisplayCoverPicker}>Change Cover</Item>
					<Item onClick={toggleDisplayCoverPicker}>Change Cover</Item>
				</List>
			</MenuContent>
			<Modal
				show={displayCoverPicker}
				onClose={() => {
					setDisplayCoverPicker(false);
				}}
			>
				<CoverPicker />
			</Modal>
		</>
	);
}

const MenuContent = styled.nav`
	transition: all 0.5s;
	transform-origin: top;
	transform: scale(1, 0);
	background-color: hsla(0, 0%, 9%, 0.8);
	position: absolute;
	width: 100%;

	&.show {
		transform: scale(1, 1);
	}
`;

const List = styled.ul`
	list-style-type: none;
	display: inline-block;
	margin: 0;
	padding: 0;
`;

const Item = styled.li`
	color: inherit;
	border-bottom: 2px solid transparent;
	text-decoration: none;
	cursor: pointer;

	&:hover {
		border-bottom: 2px solid var(--color-light);
	}
`;
export default Menu;
