import { BsBriefcaseFill, BsFillPlusCircleFill } from "react-icons/bs";

interface ProjectsFooterProps {
	handleAddProject: () => void;
}

export const ProjectsFooter = ({ handleAddProject }: ProjectsFooterProps) => {
	return (
		<footer className="flex items-center justify-center gap-4">
			<button className="flex items-center gap-2 rounded border-[1px] border-blue-500 px-4 py-2 text-blue-500">
				<BsBriefcaseFill size={22} />
				Ver projetos
			</button>

			<button
				onClick={handleAddProject}
				className="flex items-center gap-2 rounded border-[1px] border-blue-500 bg-blue-500 px-4 py-2 text-white"
			>
				<BsFillPlusCircleFill size={22} />
				Novo Projeto
			</button>
		</footer>
	);
};
