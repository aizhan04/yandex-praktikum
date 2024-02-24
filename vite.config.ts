import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import checker from "vite-plugin-checker";

export default defineConfig({
  plugins: [
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    handlebars(),
    checker({
      typescript: true,
    }),
  ],
  build: {
    outDir: "dist",
  },
  server: {
    port: 3000,
  },
});
