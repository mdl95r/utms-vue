import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [vue()],

  css: {
    modules: {
      generateScopedName: '[local]__[hash:base64:6]',
      localsConvention: 'camelCase',
    },
  },
});
