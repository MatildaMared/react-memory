import React, { useEffect } from "react";
import styled from "styled-components";

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

	return (
		<Overlay onClick={props.onClose}>
			<ModalWrapper
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				{props.children}
				<button onClick={props.onClose}>Close</button>
			</ModalWrapper>
		</Overlay>
	);
}

const Overlay = styled.div`
	z-index: 4;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: hsla(0, 0%, 0%, 0.75);
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ModalWrapper = styled.div`
	margin: 16px;
	background-color: var(--color-dark);
	padding: 32px;
	border-radius: 16px;
	min-width: 50%;
`;

export default Modal;
