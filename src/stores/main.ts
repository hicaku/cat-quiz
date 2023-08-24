import { defineStore } from "pinia";
import { type Question } from "@/types/index";

export const useMainStore = defineStore("main", {
	state: () => ({
		quizScore: 0 as number,
		quizQuestions: [
			{
				question: "How many legs does a cat have?",
				answers: ["1", "2", "3", "4"],
				correctAnswerIndex: 3,
				description:
					"Cats are quadrupeds, meaning they walk on all four limbs.",
				isAnsweredRight: false,
			},
			{
				question: "How many toes does a cat have?",
				answers: ["16", "18", "20", "22"],
				correctAnswerIndex: 1,
				description:
					"Cats have 5 toes on each of their front paws and 4 toes on each of their back paws. This adds up to 18 toes.",
				isAnsweredRight: false,
			},
			{
				question: "A 1 year old cat is equal to how many human years?",
				answers: ["9", "11", "13", "15"],
				correctAnswerIndex: 3,
				description:
					"Cats age much faster than humans and live for a shorter amount of time. For instance when a cat is 1 year old, that actually equals to 15 human years!",
				isAnsweredRight: false,
			},
			{
				question: "Cats can jump how many times their own height?",
				answers: ["4", "5", "6", "7"],
				correctAnswerIndex: 2,
				description:
					"Cats are very athletic animals. They can jump up to 6 times their own height!",
				isAnsweredRight: false,
			},
			{
				question:
					"Do cats have more bones than humans? What is the difference?",
				answers: [
					"Yes, 24",
					"Yes, 12",
					"No, they have the same",
					"No, they have less",
				],
				correctAnswerIndex: 0,
				description:
					"Cats have 24 more bones than humans. They have 230 bones, while humans have 206.",
				isAnsweredRight: false,
			},
			{
				question: "When did the first cat video was recorded?",
				answers: ["1894", "1901", "1906", "1911"],
				correctAnswerIndex: 0,
				description:
					"The first cat video was recorded in 1894. It was a short film called 'Boxing Cats'.",
				isAnsweredRight: false,
			},
			{
				question:
					"How much does the longest domestic cat in the world measure in the Guinness World Records?",
				answers: ["1.13 m", "1.23 m", "1.33 m", "1.43 m"],
				correctAnswerIndex: 1,
				description:
					"Mymains Stewart Gilligan (aka Stewie) measured 123 cm (48.5 in) long on 28 August 2010 to make him one of the largest domestic cats ever. Sadly, Stewie passed away in January 2013",
				isAnsweredRight: false,
			},
			{
				question: "How many years did the oldest cat in the world live?",
				answers: ["34", "36", "38", "40"],
				correctAnswerIndex: 2,
				description:
					"The oldest cat to ever live was Creme Puff, a Texas cat who lived to be 38 years old and 3 days. Creme Puff was born in August 1967 and died in August 2005, according to Guinness World Records.",
				isAnsweredRight: false,
			},
			{
				question: "Which taste can cats NOT detect?",
				answers: ["Sweet", "Sour", "Bitter", "Salty"],
				correctAnswerIndex: 0,
				description:
					"Cats cannot taste sweet things. This is because they lack the amino acids that taste buds use to detect sweet flavors.",
				isAnsweredRight: false,
			},
			{
				question: "Which Egyptian god has the head of a cat?",
				answers: ["Anubis", "Bastet", "Horus", "Sobek"],
				correctAnswerIndex: 1,
				description:
					"Bastet was the goddess of protection, pleasure, and the bringer of good health. She had the head of a cat and a slender female body.",
				isAnsweredRight: false,
			},
		] as Question[],
		currentQuestionId: 0 as number,
		isQuizFinished: false as boolean,
	}),
	getters: {
		currentQuestion(): Question {
			return this.quizQuestions[this.currentQuestionId];
		},
	},
	actions: {
		addScore() {
			this.quizScore++;
		},
		nextQuestion() {
			this.currentQuestionId++;
		},
		checkAnswer(answer: number) {
			if (answer === this.currentQuestion.correctAnswerIndex) {
				this.addScore();
				this.currentQuestion.isAnsweredRight = true;
			}
			if (this.currentQuestionId < this.quizQuestions.length - 1)
				return this.nextQuestion();
			this.finishQuiz();
		},
		finishQuiz() {
			this.isQuizFinished = true;
		},
		resetQuiz() {
			this.quizScore = 0;
			this.currentQuestionId = 0;
			this.isQuizFinished = false;
			this.quizQuestions.forEach((question) => {
				question.isAnsweredRight = false;
			});
		},
	},
	persist: true,
});
