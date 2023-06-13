import "./App.css";
import { RecentProjects } from "./components/RecentProjects";
import { Questionnaires } from "./components/Questionnaires";

function App() {
	return (
		<div className="flex w-full gap-8">
			<RecentProjects />

			<Questionnaires />
		</div>
	);
}

export default App;
