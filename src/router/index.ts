import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: "/",
			name: "home",
			component: () => import("../views/HomeView.vue"),
		},
		{
			path: "/quiz",
			name: "quiz",
			component: () => import("../views/QuizView.vue"),
		},
		{
			path: "/answers",
			name: "answers",
			component: () => import("../views/AnswersView.vue"),
		},
	],
	scrollBehavior() {
		return { top: 0 };
	},
});

export default router;
