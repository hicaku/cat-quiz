<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";

const store = useMainStore();
const { quizScore } = storeToRefs(store);
const { resetQuiz } = store;

let betterThanPercentage = 0;

// change these if else to switch case

switch (quizScore.value) {
	case 10:
		betterThanPercentage = 100;
		break;
	case 9:
		betterThanPercentage = 99.45;
		break;
	case 8:
		betterThanPercentage = 98.9;
		break;
	case 7:
		betterThanPercentage = 95.37;
		break;
	case 6:
		betterThanPercentage = 90.21;
		break;
	case 5:
		betterThanPercentage = 80.88;
		break;
	case 4:
		betterThanPercentage = 70.89;
		break;
	case 3:
		betterThanPercentage = 60.13;
		break;
	case 2:
		betterThanPercentage = 50.02;
		break;
	case 1:
		betterThanPercentage = 40.91;
		break;
	case 0:
		betterThanPercentage = 30.72;
		break;
	default:
		betterThanPercentage = 0;
		break;
}
</script>

<template>
	<div>
		<p class="title">
			Well done! 🎉 You finished with <b>{{ quizScore }}</b> points! You are
			better than <b>{{ betterThanPercentage }}%</b> of the people who took this
			quiz!
		</p>
		<div class="buttons">
			<button class="btn" @click="resetQuiz">Try Again</button>
			<router-link class="btn" to="/answers">Show Answers</router-link>
		</div>
	</div>
</template>
