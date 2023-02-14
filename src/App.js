import { Route, Routes } from "react-router-dom";
import Game from "./pages/Game/Game";
import GameStage from "./pages/GameStage/GameStage";
import GlobalStyle from "./styles/global";
import Home from "./pages/Home/Home";

function App() {
	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route index path="/" element={<Home />} />
				<Route path="/stages" element={<GameStage />} />
				<Route path="/stages/:stage" element={<Game />} />
			</Routes>
		</>
	);
}

export default App;