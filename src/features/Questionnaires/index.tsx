import { toast } from "react-toastify";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Line } from "../../components/ui/Line";
import { QuestionnaireCard } from "./components/QuestionnaireCard";
import { questionnaires } from "./data/questionnaires";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Questionnaires = () => {
	function handleSelectQuestionnaire() {
		toast.success("Questionário selecionado com sucesso!");
	}

	return (
		<section className="flex max-w-sm flex-1 flex-col rounded bg-white">
			<header>
				<h3 className="px-4 py-2 text-left text-sm font-semibold text-blue-500">
					QUESTIONÁRIOS PRONTOS PARA USO
				</h3>
			</header>

			<Line />

			<div className="h-full px-4">
				<Swiper
					className="h-full"
					modules={[Navigation, Pagination]}
					navigation
					pagination={{ clickable: true }}
				>
					{questionnaires.map((questionnaire) => (
						<SwiperSlide className="h-full" key={questionnaire.id}>
							<QuestionnaireCard
								questionnaire={questionnaire}
								handleSelectQuestionnaire={handleSelectQuestionnaire}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};
