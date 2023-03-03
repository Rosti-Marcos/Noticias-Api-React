import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotevn from "dotenv"

dotevn.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
