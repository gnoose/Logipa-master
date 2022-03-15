import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { AppProvider } from './context/app-context';
import IDO from "./pages/IDO";
import HomePage from "./pages/HomePage";
import Staking from "./pages/Staking";
import Farming from "./pages/Farming";
import Calendare from "./pages/Calendare";



function App() {
	return (
		<AppProvider>
			<Router>
				<Routes>
					<Route element={<IDO />} path="/ido" />
					<Route element={<Farming />} path="/farming" />
					<Route element={<HomePage />} path="/" />
					<Route element={<Calendare/>} path="/calendar" />
					<Route element={<Staking />} path="/staking" />
				</Routes>
			</Router>
		</AppProvider>
	);
}

export default App;
