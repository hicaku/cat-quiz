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
		<div class="success" :class="{ active: isBottom }">
			<div class="success-text flex-col align-center justify-center">
				<h3 class="gradient-text">YOU DID IT! READY FOR THE CHALLANGE?</h3>
				<button class="btn" @click="$router.push('/quiz')">
					<b>MEOW!</b>
				</button>
			</div>
			<img src="@/assets/images/cat-land.png" />
		</div>
	</div>
</template>
