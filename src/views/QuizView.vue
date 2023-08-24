<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";
import QuestionSection from "@/components/Quiz/QuestionSection.vue";
import FinishModal from "@/components/Quiz/FinishModal.vue";

const store = useMainStore();
const { quizScore, isQuizFinished } = storeToRefs(store);
</script>

<template>
	<main class="quiz">
		<div class="quiz-wrapper" :class="{ blur: isQuizFinished }">
			<header class="quiz-header">
				<div>
					<h1 class="quiz-header-title">
						<span class="secondary-color">C</span>AT
						<span class="secondary-color">Q</span>UIZ
					</h1>
				</div>
				<h1>
					<span class="secondary-color">{{ quizScore }}</span> / 10
				</h1>
			</header>
			<section class="wrapper">
				<QuestionSection />
			</section>
		</div>
		<FinishModal class="finish-modal" v-if="isQuizFinished" />
	</main>
</template>
