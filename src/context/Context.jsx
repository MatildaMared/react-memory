import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
	const [context, setContext] = useState({
		cards: [],
		turns: 0,
		coverSrc: "/img/cover-1.jpeg",
		firstChoice: null,
		secondChoice: null,
		disabled: false,
	});

	function updateContext(updates) {
		setContext((prevState) => {
			return {
				...prevState,
				...updates,
			};
		});
	}

	const value = [context, updateContext];

	return <Context.Provider value={value}>{children}</Context.Provider>;
};
