import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@bitfever/sdk-vue": path.resolve(__dirname, "../../packages/vue/src"),
    },
  },
});
