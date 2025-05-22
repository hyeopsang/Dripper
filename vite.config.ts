import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPath from 'vite-tsconfig-paths';
import eslint from 'vite-plugin-eslint2';
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPath(),
    eslint()
  ],
});
