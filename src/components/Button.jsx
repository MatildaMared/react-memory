import React from "react";
import styled from "styled-components";

function Button(props) {
	return <Wrapper onClick={props.onClick}>{props.children}</Wrapper>;
}

const Wrapper = styled.button`
	background: none;
	border: 2px solid var(--color-light);
	font: inherit;
	color: inherit;
	font-weight: 700;
	cursor: pointer;
	font-size: 1rem;
	padding: 8px 16px;
	border-radius: 8px;

	&:hover {
		background-color: mediumpurple;
	}
`;

export default Button;
