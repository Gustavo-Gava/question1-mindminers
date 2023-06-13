import { BsTrash } from "react-icons/bs";

type Project = {
	id: number;
	title: string;
	description: string;
	status: string;
	someInformation: string;
};

interface ProjectCardProps {
	project: Project;
	handleDeleteProject: (id: number) => void;
}

export const ProjectCard = ({ project, handleDeleteProject }: ProjectCardProps) => {
	return (
		<div
			className="flex w-full flex-col rounded border-[1px] border-slate-200 p-2"
			key={project.id}
		>
			<div className="flex items-center justify-between gap-2 rounded border-[1px] border-slate-200 p-2">
				<p>{project.status}</p>

				<div className="flex items-center gap-2">
					<p>{project.someInformation}</p>
					<button
						aria-label="delete project"
						onClick={() => handleDeleteProject(project.id)}
						className="text-red-600"
					>
						<BsTrash size={22} />
					</button>
				</div>
			</div>

			<p className="mt-2 text-left text-xs text-slate-400">TÍTULO DO PROJETO</p>
			<h4 className="mt-1 text-left font-semibold">{project.title}</h4>
		</div>
	);
};
