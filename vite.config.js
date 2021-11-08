import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 4000
  },
  // resolve:{
  //   alias:{
  //     'src': resolve(__dirname,'src'),
  //   }
  // },
  plugins: [react(), eslintPlugin({ fix: true })]
})
