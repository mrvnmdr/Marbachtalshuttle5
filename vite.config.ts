import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Extract repo name from GitHub environment for correct base path
const getBasePath = () => {
  const repo = process.env.GITHUB_REPOSITORY;
  if (repo) {
    const repoName = repo.split('/')[1];
    return `/${repoName}/`;
  }
  return process.env.VITE_BASE_PATH || '/';
};

export default defineConfig({
  plugins: [react()],
  base: getBasePath(),
  server: {
    host: '0.0.0.0',
    port: 5000,
    strictPort: true,
    allowedHosts: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser'
  }
})
