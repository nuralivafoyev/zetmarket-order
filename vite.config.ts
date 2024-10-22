import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  
  // {
  //   "compilerOptions": {
  //     "target": "ES2022",
  //     "lib": ["ES2023"],
  //     "module": "ESNext",
  //     "skipLibCheck": true,
  
  //     /* Bundler mode */
  //     "moduleResolution": "bundler",
  //     "allowImportingTsExtensions": true,
  //     "isolatedModules": true,
  //     "moduleDetection": "force",
  //     "noEmit": true,
  
  //     /* Linting */
  //     "strict": true,
  //     "noUnusedLocals": true,
  //     "noUnusedParameters": true,
  //     "noFallthroughCasesInSwitch": true
  //   },
  //   "include": ["vite.config.ts"]
  // }
})
