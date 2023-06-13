import "./App.css";
import { RecentProjects } from "./components/RecentProjects";
import { Questionnaires } from "./components/Questionnaires";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<div className="flex w-full gap-8">
			<RecentProjects />

			<Questionnaires />

			<ToastContainer />
		</div>
	);
}

export default App;
