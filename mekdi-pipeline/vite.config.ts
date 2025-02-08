import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: process.env.ELECTRON ? "./" : "/", // 👈 Ensures correct paths for web & Electron
});
