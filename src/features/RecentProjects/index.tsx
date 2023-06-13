import { useCallback, useState } from "react";
import { ProjectCard } from "./components/ProjectCard";
import { mockedProjects } from "./data/projects";
import { ProjectsFooter } from "./components/ProjectsFooter";

interface Project {
	id: number;
	title: string;
	description: string;
	status: string;
	someInformation: string;
}

export const RecentProjects = () => {
	const [projects, setProjects] = useState<Project[]>(mockedProjects);

	const handleDeleteProject = useCallback(
		(id: number) => {
			const newProjects = projects?.filter((project) => project.id !== id);

			if (!newProjects) return;

			setProjects(newProjects);
		},
		[projects]
	);

	const handleAddMockedProject = useCallback(() => {
		const newProject = {
			id: Math.random() * 100,
			title: "Novo projeto",
			description: "Descrição do novo projeto",
			status: "Iniciado",
			someInformation: "Some information",
		};

		setProjects((prevProjects) => [...prevProjects, newProject]);
	}, []);

	return (
		<section className="flex max-w-3xl flex-1 flex-col gap-4 rounded bg-white p-4">
			<header>
				<h3 className="text-left text-slate-400">PROJETOS RECENTES</h3>
			</header>

			<div className="flex max-h-96 flex-col gap-4 overflow-y-auto">
				{projects?.map((project) => (
					<ProjectCard
						key={project.id}
						project={project}
						handleDeleteProject={handleDeleteProject}
					/>
				))}
			</div>

			<ProjectsFooter handleAddProject={handleAddMockedProject} />
		</section>
	);
};
