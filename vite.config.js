import { defineConfig } from 'vite'
import { copyFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

export default defineConfig({
  // Configuración para Vite en Vercel
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  base: './',
  server: {
    fs: {
      strict: false,
      allow: ['..']
    }
  },
  // Permitir acceso a archivos src desde public
  publicDir: 'public',
  resolve: {
    alias: {
      '@': '/src',
      '/src': '/src'
    }
  },
  // Plugin para copiar archivos de src a public en build
  plugins: [
    {
      name: 'copy-src-to-public',
      buildStart() {
        // Copiar archivos de src/components a dist/src/components durante el build
        const srcDir = 'src/components'
        const destDir = 'dist/src/components'
        
        if (!existsSync(destDir)) {
          mkdirSync(destDir, { recursive: true })
        }
      }
    }
  ]
})