// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: import.meta.env.PROD
		? "https://mbj.seekthekingdom.studio/w"
		: "http://localhost:4321",
	base: import.meta.env.PROD ? "/w/" : "",
});
