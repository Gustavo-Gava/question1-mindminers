import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
	return (
		<div className="max-w-sm bg-white rounded flex flex-col flex-1">
			<h3 className="text-left text-blue-500 text-sm font-semibold px-4 py-2">
				QUESTIONÁRIOS PRONTOS PARA USO
			</h3>

			<div className="w-full h-[1px] bg-slate-200" />

			<div className="px-4 h-full">
				<Swiper
					className="h-full"
					modules={[Navigation, Pagination]}
					navigation
					pagination={{ clickable: true }}
				>
					{questionnaires.map((questionnaire) => (
						<SwiperSlide className="h-full" key={questionnaire.id}>
							<div className="flex flex-col justify-between gap-8 p-4 px-8 h-full">
								<p className="text-slate-500 text-sm">SATISFAÇÃO E EXPERIÊNCIA DO CLIENTE</p>

								<p className="font-bold text-2xl">{questionnaire.clientSatisfaction}</p>

								<p className="text-slate-500 text-sm">{questionnaire.description}</p>

								<a className="bg-blue-500 text-white rounded px-4 py-2 w-fit m-auto">
									Escolher Questionário
								</a>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};
