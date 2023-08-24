<script setup lang="ts">
import { type PropType } from "vue";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
	isBottom: {
		type: Boolean as PropType<boolean>,
		required: true,
	},
});
</script>

<template>
	<div>
		<div class="parallax"></div>
		<div class="kitten" :class="{ active: !isBottom }">
			<h3 class="gradient-text">LAND THE KITTEN SAFELY TO BEGIN THE QUIZ</h3>
			<img src="@/assets/images/cat.gif" />

			<img class="gif" src="@/assets/images/scroll-down.gif" />
		</div>
	</div>
</template>
