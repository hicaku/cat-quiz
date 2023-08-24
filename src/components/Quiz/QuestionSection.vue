<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";

const store = useMainStore();
const { currentQuestion } = storeToRefs(store);
const { checkAnswer } = store;
</script>

<template>
	<div class="quiz-question">
		<h3 class="question">{{ currentQuestion.question }}</h3>
		<ul class="answers">
			<li
				v-for="(answer, index) in currentQuestion.answers"
				:key="index"
				class="answer"
			>
				<button class="btn" @click="checkAnswer(index)">
					<b>{{ answer }}</b>
				</button>
			</li>
		</ul>
	</div>
</template>
