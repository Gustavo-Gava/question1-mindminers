import { ToastContainer } from "react-toastify";

import { RecentProjects } from "./features/RecentProjects";
import { Questionnaires } from "./features/Questionnaires";

import "./styles/App.css";
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
