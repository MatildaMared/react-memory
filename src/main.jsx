import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./styling/GlobalStyles";
import { ContextProvider } from "./context/Context";

ReactDOM.render(
	<React.StrictMode>
		<ContextProvider>
			<App />
			<GlobalStyles />
		</ContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
