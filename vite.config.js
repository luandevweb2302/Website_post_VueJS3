import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    open: true,
  },
  define: {
    __VUE_DEVTOOLS__: false, // Tắt Devtools trong Vite
  },
});
