import { useState } from "react";

interface Project {
	id: number;
	title: string;
	description: string;
	status: string;
	someInformation: string;
}

const mockedProjects = [
	{
		id: 1,
		title: "Projeto 1",
		description: "Descrição do projeto 1",
		status: "Em andamento",
		someInformation: "Some information",
	},

	{
		id: 2,
		title: "Projeto 2",
		description: "Descrição do projeto 2",
		status: "Em andamento",
		someInformation: "Some information",
	},

	{
		id: 3,
		title: "Projeto 3",
		description: "Descrição do projeto 3",
		status: "Finalizado",
		someInformation: "Some information",
	},
];

export const RecentProjects = () => {
	const [projects, setProjects] = useState<Project[]>(mockedProjects);

	const handleDeleteProject = (id: number) => {
		const newProjects = projects?.filter((project) => project.id !== id);

		if (!newProjects) return;

		setProjects(newProjects);
	};

	const handleAddMockedProject = () => {
		const newProject = {
			id: 4,
			title: "Projeto 4",
			description: "Descrição do projeto 4",
			status: "Começo",
			someInformation: "Some information",
		};

		setProjects((prevProjects) => [...prevProjects, newProject]);
	};

	return (
		<div className="bg-white p-4 rounded flex flex-col gap-4 max-w-3xl flex-1">
			<h3 className="text-left text-slate-400">PROJETOS RECENTES</h3>

			<div className="flex flex-col gap-4">
				{projects?.map((project) => (
					<div className="flex flex-col w-full" key={project.id}>
						<div className="flex items-center justify-between gap-2 p-2 border-[1px] border-slate-300 rounded">
							<p>{project.status}</p>

							<div className="flex gap-2 items-center">
								<p>{project.someInformation}</p>
								<button onClick={() => handleDeleteProject(project.id)} className="text-red-600">
									Deletar
								</button>
							</div>
						</div>

						<p className="text-left text-sm mt-2">Título do projeto</p>
						<h4 className="text-left font-semibold mt-1">{project.title}</h4>
					</div>
				))}
			</div>

			<footer className="flex justify-center items-center gap-4">
				<button className="px-4 py-2 text-blue-500 border-blue-500 border-[1px] rounded">
					Ver projetos
				</button>

				<button
					onClick={handleAddMockedProject}
					className="px-4 py-2 bg-blue-500 text-white rounded border-[1px] border-blue-500"
				>
					Novo Projeto
				</button>
			</footer>
		</div>
	);
};
