import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { toast } from "react-toastify";

const questionnaires = [
	{
		id: 1,
		description: "Descubra o melhor momento para enviar o questionário de satisfação do cliente",
		questionnaireLink: "/link-1",
		clientSatisfaction: "NPS",
	},

	{
		id: 2,
		description: "Descubra o melhor momento para enviar o questionário de satisfação do cliente",
		questionnaireLink: "/link-2",
		clientSatisfaction: "NPS 2",
	},

	{
		id: 3,
		description: "Descubra o melhor momento para enviar o questionário de satisfação do cliente",
		questionnaireLink: "/link-3",
		clientSatisfaction: "NPS 3",
	},

	{
		id: 4,
		description: "Descubra o melhor momento para enviar o questionário de satisfação do cliente",
		questionnaireLink: "/link-4",
		clientSatisfaction: "NPS 4",
	},
];

export const Questionnaires = () => {
	function handleSelectQuestionnaire() {
		toast.success("Questionário selecionado com sucesso!");
	}

	return (
		<div className="flex max-w-sm flex-1 flex-col rounded bg-white">
			<h3 className="px-4 py-2 text-left text-sm font-semibold text-blue-500">
				QUESTIONÁRIOS PRONTOS PARA USO
			</h3>

			<div className="h-[1px] w-full bg-slate-200" />

			<div className="h-full px-4">
				<Swiper
					className="h-full"
					modules={[Navigation, Pagination]}
					navigation
					pagination={{ clickable: true }}
				>
					{questionnaires.map((questionnaire) => (
						<SwiperSlide className="h-full" key={questionnaire.id}>
							<div className="flex h-full flex-col justify-between gap-8 p-4 px-8">
								<p className="text-sm text-slate-500">SATISFAÇÃO E EXPERIÊNCIA DO CLIENTE</p>

								<p className="text-2xl font-bold">{questionnaire.clientSatisfaction}</p>

								<p className="text-sm text-slate-500">{questionnaire.description}</p>

								<button
									onClick={handleSelectQuestionnaire}
									className="m-auto w-fit rounded bg-blue-500 px-4 py-2 text-white"
								>
									Escolher Questionário
								</button>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};
