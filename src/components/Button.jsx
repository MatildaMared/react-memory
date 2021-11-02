import React from "react";
import styled from "styled-components";

function Button(props) {
	return <Wrapper onClick={props.onClick}>{props.children}</Wrapper>;
}

const Wrapper = styled.button`
	background: none;
	border: 2px solid var(--color-grey);
	font: inherit;
	color: var(--color-grey);
	font-weight: 500;
	cursor: pointer;
	font-size: 1rem;
	padding: 6px 12px;
	border-radius: 8px;
	margin-top: 16px;
	transition: all 0.3s;

	&:hover {
		border: 2px solid var(--color-light);
		color: var(--color-light);
		transform: scale(1.05);
	}
`;

export default Button;
