// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://api.qobilbek.dev',  // API manzilingiz
        changeOrigin: true,  // Manzilni o'zgartirish
        rewrite: (path) => path.replace(/^\/api/, ''), // /api/ni olib tashlash
      },
    },
  },
});
