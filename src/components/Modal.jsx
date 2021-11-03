import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import Button from "./Button";

function Modal(props) {
	if (!props.show) return null;

	function closeOnEscapeKeyDown(e) {
		if ((e.charCode || e.keyCode) === 27) {
			props.onClose();
		}
	}

	useEffect(() => {
		document.body.addEventListener("keydown", closeOnEscapeKeyDown);
		return function cleanup() {
			document.removeEventListener("keydown", closeOnEscapeKeyDown);
		};
	}, []);

	return createPortal(
		<Overlay onClick={props.onClose}>
			<ModalWrapper
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				{props.children}
				<Button onClick={props.onClose}>Close</Button>
			</ModalWrapper>
		</Overlay>,
		document.getElementById("modal")
	);
}

const Overlay = styled.div`
	z-index: 100;
	position: fixed;
	top: 0px;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: hsla(0, 0%, 0%, 0.75);
	display: flex;
	align-items: flex-start;
	justify-content: center;
`;

const ModalWrapper = styled.div`
	margin: 16px;
	margin-top: 64px;
	background-color: var(--color-dark);
	padding: 32px;
	border-radius: 16px;
	min-width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export default Modal;
