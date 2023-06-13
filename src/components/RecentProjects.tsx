import { useState } from "react";
import { BsBriefcaseFill, BsFillPlusCircleFill } from "react-icons/bs";

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
		<div className="flex max-w-3xl flex-1 flex-col gap-4 rounded bg-white p-4">
			<h3 className="text-left text-slate-400">PROJETOS RECENTES</h3>

			<div className="flex flex-col gap-4">
				{projects?.map((project) => (
					<div className="flex w-full flex-col" key={project.id}>
						<div className="flex items-center justify-between gap-2 rounded border-[1px] border-slate-300 p-2">
							<p>{project.status}</p>

							<div className="flex items-center gap-2">
								<p>{project.someInformation}</p>
								<button onClick={() => handleDeleteProject(project.id)} className="text-red-600">
									Deletar
								</button>
							</div>
						</div>

						<p className="mt-2 text-left text-sm">Título do projeto</p>
						<h4 className="mt-1 text-left font-semibold">{project.title}</h4>
					</div>
				))}
			</div>

			<footer className="flex items-center justify-center gap-4">
				<button className="flex items-center gap-2 rounded border-[1px] border-blue-500 px-4 py-2 text-blue-500">
					<BsBriefcaseFill size={22} />
					Ver projetos
				</button>

				<button
					onClick={handleAddMockedProject}
					className="flex items-center gap-2 rounded border-[1px] border-blue-500 bg-blue-500 px-4 py-2 text-white"
				>
					<BsFillPlusCircleFill size={22} />
					Novo Projeto
				</button>
			</footer>
		</div>
	);
};
