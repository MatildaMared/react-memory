import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
	const [context, setContext] = useState({
		cardImages: [
			{ src: "/img/image-1.jpg", matched: false },
			{ src: "/img/image-2.jpg", matched: false },
			{ src: "/img/image-3.jpg", matched: false },
			{ src: "/img/image-4.jpg", matched: false },
			{ src: "/img/image-5.jpg", matched: false },
			{ src: "/img/image-6.jpg", matched: false },
			{ src: "/img/image-7.jpg", matched: false },
			{ src: "/img/image-8.jpg", matched: false },
			{ src: "/img/image-9.jpg", matched: false },
			{ src: "/img/image-10.jpg", matched: false },
			{ src: "/img/image-11.jpg", matched: false },
			{ src: "/img/image-12.jpg", matched: false },
		],
		numOfPairs: 6,
		cards: [],
		turns: 0,
		coverSrc: "/img/cover-1.jpeg",
		firstChoice: null,
		secondChoice: null,
		disabled: false,
	});

	useEffect(() => {
		localStorage.setItem("cover", context.coverSrc);
	}, [context.coverSrc]);

	useEffect(() => {
		let cover = localStorage.getItem("cover");
		console.log(cover);
		if (!cover) {
			cover = "/img/cover-1.jpeg";
		}
		updateContext({
			coverSrc: cover,
		});
	}, []);

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
