import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom', // simular DOM
      exclude: [...configDefaults.exclude, 'e2e/**'], // excluyendo pruebas e2e
      root: fileURLToPath(new URL('./', import.meta.url)) // define ruta raíz del proy
    }
  })
)
