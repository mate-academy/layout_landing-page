import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  base: '/layout_landing-page/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
