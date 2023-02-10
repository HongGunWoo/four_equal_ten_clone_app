import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
	${reset};
	*, *::before, *::after {
		box-sizing: border-box;
	}
	button{
		border: 0;
		background-color: transparent;
		cursor: pointer;
	}
`;

export default GlobalStyle;