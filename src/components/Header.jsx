import React, { useState } from "react";
import styled from "styled-components";
import CoverPicker from "./CoverPicker";
import Menu from "./Menu";

function Header() {
	const [showMenu, setShowMenu] = useState(false);

	function clickHandler() {
		setShowMenu(!showMenu);
	}

	return (
		<Wrapper>
			<HeaderContent>
				<Heading>AniMemory 🐨</Heading>
				<MenuToggler onClick={clickHandler}>
					<HamburgerIcon className={showMenu ? "show-cross" : ""} />
				</MenuToggler>
			</HeaderContent>
			<Menu show={showMenu} />
		</Wrapper>
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
`;

const HeaderContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
`;

const Heading = styled.h1`
	font-weight: 800;
	font-size: 2.3rem;
`;

const MenuToggler = styled.div`
	margin-top: 12px;
	display: inline-block;
	width: 30px;
	height: 30px;
	cursor: pointer;
`;

const HamburgerIcon = styled.span`
	background-color: var(--color-light);
	display: inline-block;
	width: 30px;
	height: 2px;
	transition: all 0.4s;
	border-radius: 4px;
	position: relative;

	&::before {
		content: "";
		width: 30px;
		height: 2px;
		position: absolute;
		background-color: var(--color-light);
		top: 8px;
	}

	&::after {
		content: "";
		width: 30px;
		height: 2px;
		position: absolute;
		background-color: var(--color-light);
		bottom: 8px;
	}

	&.show-cross {
		transform: rotate(135deg);

		&::before,
		&::after {
			top: 0;
			transform: rotate(90deg);
			border-radius: 4px;
			}
		}
	}
`;

// const MenuCheckbox = styled.input`
// 	display: none;

// 	&:checked + ${MenuLabel} > ${Hamburger} {
// 	transform: rotate(135deg);

// 	&::before,
// 	&::after {
// 		top: 0;
// 		transform: rotate(90deg);
// 		border-radius: 4px;
// 	}
// }

// 	&:checked ~ ${List} {
// 		transform: scaleY(1);
// 	}
// `;

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
