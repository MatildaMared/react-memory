import React, { useState } from "react";
import styled from "styled-components";
import CoverPicker from "./CoverPicker";
import Modal from "./Modal";

function Header() {
	const [displayCoverPicker, setDisplayCoverPicker] = useState(false);

	function toggleDisplayCoverPicker() {
		setDisplayCoverPicker(!displayCoverPicker);
	}

	return (
		<>
			<Wrapper>
				<h1>Memory.</h1>
				<nav>
					<List>
						<Item onClick={toggleDisplayCoverPicker}>Change Cover</Item>
					</List>
				</nav>
			</Wrapper>
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

const Wrapper = styled.header`
	border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: hsla(0, 0%, 9%, 0.8);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 16px;
	vertical-align: baseline;
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

export default Header;
