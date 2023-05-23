import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createProxyMiddleware } from 'http-proxy-middleware';
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  server: {
    proxy: createProxyMiddleware('/api', {
      target: 'http://localhost:4000',
      changeOrigin: true,
      secure: false
    })
  }
});
