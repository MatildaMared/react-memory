import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "../context/Context";
import CoverPicker from "./CoverPicker";
import NumCardsPicker from "./NumCardsPicker";

function Settings() {
	const [activeComponent, setActiveComponent] = useState("CoverPicker");

	return (
		<section>
			<Nav>
				<Button
					className={activeComponent === "CoverPicker" ? "active" : ""}
					onClick={() => setActiveComponent("CoverPicker")}
				>
					Card Cover
				</Button>
				<Button
					className={activeComponent === "NumCardsPicker" ? "active" : ""}
					onClick={() => setActiveComponent("NumCardsPicker")}
				>
					Number of Cards
				</Button>
			</Nav>
			{activeComponent === "CoverPicker" && <CoverPicker />}
			{activeComponent === "NumCardsPicker" && <NumCardsPicker />}
		</section>
	);
}

const Nav = styled.nav`
	margin-bottom: 16px;
`;

const Button = styled.button`
	color: inherit;
	border: none;
	padding: 4px 8px;
	border-radius: 8px;
	cursor: pointer;
	background-color: transparent;
	margin-right: 8px;
	border: 2px solid var(--color-grey);
	transition: all 0.3s;
	opacity: 0.5;

	&.active,
	&:hover {
		opacity: 1;
	}
`;

export default Settings;
