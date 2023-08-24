<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

const store = useMainStore();
const { quizQuestions } = store;
</script>

<template>
	<main class="answers">
		<Carousel
			class="carousel"
			:items-to-show="1"
			:transition="500"
			:wrap-around="false"
			:mouse-drag="true"
			:touch-drag="true"
		>
			<Slide
				class="carousel-item"
				v-for="(question, index) in quizQuestions"
				:key="index"
			>
				<p class="message">
					<span v-if="question.isAnsweredRight">✔️ You were correct</span>
					<span v-else>❌ You were incorrect</span>
				</p>
				<div class="wrapper">
					<img :src="`questionImages/${index + 1}.png`" alt="question" />
					<p>{{ question.description }}</p>
				</div>
			</Slide>
			<template #addons>
				<Navigation />
			</template>
		</Carousel>
	</main>
</template>
