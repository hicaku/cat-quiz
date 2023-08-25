<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import HeaderMenu from "@/components/HeaderMenu.vue";

const store = useMainStore();
const { quizQuestions } = store;
</script>

<template>
	<main class="answers">
		<HeaderMenu />
		<div
			class="answers-question"
			v-for="(question, index) in quizQuestions"
			:key="index"
		>
			<h3 class="question">{{ question.question }}</h3>
			<ul class="answers">
				<li
					v-for="(answer, index) in question.answers"
					:key="index"
					class="answer"
				>
					<button
						class="btn"
						:class="{ 'correct-answer': index === question.correctAnswerIndex }"
						disabled
					>
						<b
							><span
								v-if="
									index === question.correctAnswerIndex &&
									question.userAnswer === question.correctAnswerIndex
								"
								>✔️</span
							>
							<span v-else-if="index === question.userAnswer">❌</span>
							{{ answer }}
						</b>
					</button>
				</li>
			</ul>
			<p class="description">
				{{ question.description }}
			</p>
		</div>
	</main>
</template>
