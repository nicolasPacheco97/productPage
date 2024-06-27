import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
plugins: [
    react(),
    federation({
      name: "productApp",
      filename: "remoteEntry.js",
      shared: ["react", "react-dom"],
      exposes: { 
        './App': './src/App',
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
