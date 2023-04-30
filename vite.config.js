import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    overlay:false ,
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
});