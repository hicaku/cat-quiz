export type Question = {
	id: number;
	question: string;
	answers: string[];
	correctAnswerIndex: number;
	description: string;
	userAnswer: number;
};
