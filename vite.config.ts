import { AliasOptions, defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils/index.ts'),
      '@servises': path.resolve(__dirname, 'src/services'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@app': path.resolve(__dirname, 'src/app/index.tsx'),      
      '@ttypes': path.resolve(__dirname, 'src/ttypes/index.ts'),
      '@routes': path.resolve(__dirname, 'src/routes/index.tsx'),
      '@pages': path.resolve(__dirname, 'src/pages/index.tsx'),
      '@context': path.resolve(__dirname, 'src/context/index.tsx'),
      '@ui': path.resolve(__dirname, 'src/components/ui/index.tsx'),
      '@constants': path.resolve(__dirname, 'src/constants/index.data.tsx'),
    } as AliasOptions
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler"
      }
    }
  }
})
