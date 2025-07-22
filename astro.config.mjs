// https://astro.build/config
// @ts-check
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

const { PROD_URL_ADMINISTRACJA, DEV_URL } = loadEnv(
	// @ts-ignore
	process.env.NODE_ENV,
	// @ts-ignore
	process.cwd(),
	""
);

export default defineConfig({
	site: import.meta.env.PROD ? PROD_URL_ADMINISTRACJA : DEV_URL,
	srcDir: "./administracja",
	output: "static",
	outDir: "./dist/administracja",
});
