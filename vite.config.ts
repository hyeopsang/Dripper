import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPath from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPath(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: './src/**/*.{js,jsx,ts,tsx}',
      },
    }),
  ],
});
