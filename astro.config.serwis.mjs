import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

const { PROD_URL_SERWIS, PROD_URL_ADMINISTRACJA, DEV_URL_SERWIS } = loadEnv(
	process.env.NODE_ENV,
	process.cwd(),
	""
);

export default defineConfig({
	site: import.meta.env.PROD ? PROD_URL_SERWIS : DEV_URL_SERWIS,
	output: "static",
	srcDir: "./serwis",
	outDir: "./dist/serwis",
	publicDir: import.meta.env.PROD ? "./xxx" : "./public",
	server: { port: 8080 },
	build: {
		assetsPrefix: import.meta.env.PROD ? PROD_URL_ADMINISTRACJA : "",
	},
});
