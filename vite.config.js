import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: "./postcss.config.js",
  },
  proxy: {
    "/api/auth/admin": {
      target: "http://127.0.0.1:5000",  // URL backend Anda
      changeOrigin: true,
      secure: false,  // Nonaktifkan secure jika menggunakan http (bukan https)
    },
  },
});
