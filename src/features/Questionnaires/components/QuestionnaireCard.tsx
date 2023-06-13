type Questionnaire = {
	id: number;
	description: string;
	questionnaireLink: string;
	clientSatisfaction: string;
};

interface QuestionnaireCardProps {
	questionnaire: Questionnaire;
	handleSelectQuestionnaire: () => void;
}

export const QuestionnaireCard = ({
	handleSelectQuestionnaire,
	questionnaire,
}: QuestionnaireCardProps) => {
	return (
		<div className="flex h-full flex-col justify-between gap-8 p-4 px-8">
			<p className="text-sm text-slate-500">SATISFAÇÃO E EXPERIÊNCIA DO CLIENTE</p>

			<p className="text-2xl font-bold">{questionnaire.clientSatisfaction}</p>

			<p className="text-sm text-slate-500">{questionnaire.description}</p>

			<button
				onClick={handleSelectQuestionnaire}
				className="m-auto flex w-fit items-center gap-2 rounded bg-blue-500 px-4 py-2 text-white"
			>
				Escolher Questionário
			</button>
		</div>
	);
};
