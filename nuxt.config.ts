import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	modules: ["@nuxt/ui"],
	devtools: { enabled: true },
	css: ["./app/assets/css/main.css"],
	vite: {
		plugins: [tailwindcss()],
	},
});
