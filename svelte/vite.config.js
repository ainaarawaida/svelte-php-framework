import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig, splitVendorChunkPlugin, loadEnv  } from 'vite'
import liveReload from 'vite-plugin-live-reload'
import path from 'path'

// https://vitejs.dev/config/
export default ({mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  // console.log("ggg",process.cwd())
  return defineConfig({

    plugins: [
      svelte(),
      liveReload([
        // edit live reload paths according to your source code
        // for example:
        __dirname + '/(app|config|views)/**/*.php',
        // using this for our example:
        __dirname + '/../php/*.php',
      ]),
      splitVendorChunkPlugin(),
    ],
  
    // config
    root: 'src',
    base: mode === 'development'
      ? '/'
      : '/dist/',
  
    build: {
      // output dir for production build
      outDir: '../../php/dist',
      emptyOutDir: true,
  
      // emit manifest so PHP can find the hashed files
      manifest: true,
  
      // our entry
      rollupOptions: {
        input: path.resolve(__dirname, 'src/main.js'),
      }
    },
  
    server: {
      // we need a strict port to match on PHP side
      // change freely, but update on PHP to match the same port
      // tip: choose a different port per project to run them at the same time
      strictPort: true,
      port: 5133
    },
  
    // required for in-browser template compilation
    // https://vuejs.org/guide/scaling-up/tooling.html#note-on-in-browser-template-compilation
    resolve: {
      alias: {
        "@": path.resolve(__dirname),
        "@/public": path.resolve(__dirname, "public"),
        "@/assets": path.resolve(__dirname, "src/assets"),
      },
    }
  })
  

}