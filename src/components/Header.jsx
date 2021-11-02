import React, { useState } from "react";
import styled from "styled-components";
import Settings from "./Settings";
import Modal from "./Modal";
import { Settings as SettingsIcon } from "react-feather";

function Header() {
	const [displaySettings, setDisplaySettings] = useState(false);

	function toggleSettingsModal() {
		setDisplaySettings(!displaySettings);
	}

	return (
		<>
			<Wrapper>
				<Heading>AniMemory 🐨</Heading>
				<SettingsBtn onClick={toggleSettingsModal}>
					<SettingsIcon size={35} />
				</SettingsBtn>
			</Wrapper>
			<Modal
				show={displaySettings}
				onClose={() => {
					setDisplaySettings(false);
				}}
			>
				<Settings />
			</Modal>
		</>
	);
}

const Wrapper = styled.header`
	z-index: 10;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: hsla(0, 0%, 9%, 0.8);
	padding: 0 16px;
	vertical-align: baseline;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Heading = styled.h1`
	font-weight: 800;
	font-size: 2.3rem;
	user-select: none;
	cursor: default;
`;

const SettingsBtn = styled.button`
	margin-top: 8px;
	background: transparent;
	border: none;
	cursor: pointer;
	width: 40px;
	height: 40px;
	color: var(--color-light);
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.3s;

	&:hover {
		transform: scale(1.2) rotate(35deg);
	}
`;

export default Header;
