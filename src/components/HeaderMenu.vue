<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";

const store = useMainStore();
const { quizScore } = storeToRefs(store);
</script>

<template>
	<header class="quiz-header">
		<RouterLink to="/">
			<h1 class="quiz-header-title">
				<span class="secondary-color">C</span>AT
				<span class="secondary-color">Q</span>UIZ
			</h1>
		</RouterLink>
		<h1>
			<span class="secondary-color">{{ quizScore }}</span> / 10
		</h1>
	</header>
</template>
