<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";
import QuestionSection from "@/components/Quiz/QuestionSection.vue";
import FinishModal from "@/components/Quiz/FinishModal.vue";
import HeaderMenu from "@/components/HeaderMenu.vue";

const store = useMainStore();
const { isQuizFinished } = storeToRefs(store);
</script>

<template>
	<main class="quiz">
		<div class="quiz-wrapper" :class="{ blur: isQuizFinished }">
			<HeaderMenu />
			<section class="wrapper">
				<QuestionSection />
			</section>
		</div>
		<FinishModal class="finish-modal" v-if="isQuizFinished" />
	</main>
</template>
