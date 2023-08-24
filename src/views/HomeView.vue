<script setup lang="ts">
import { ref } from "vue";
import LandingSection from "@/components/Home/LandingSection.vue";
import StartQuizSection from "@/components/Home/StartQuizSection.vue";

const isBottom = ref(false);
window.addEventListener("scroll", () => {
	isBottom.value =
		window.innerHeight + window.scrollY >= document.body.offsetHeight - 150;
});
</script>

<template>
	<main>
		<section class="section landing-section">
			<LandingSection :is-bottom="isBottom" />
		</section>
		<section class="section start-quiz-section">
			<StartQuizSection :is-bottom="isBottom" />
		</section>
	</main>
</template>
