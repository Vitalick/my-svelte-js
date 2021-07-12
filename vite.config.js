import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'
import legacy from '@vitejs/plugin-legacy'
import {
    scss,
    sass,
    postcss,
    globalStyle,
} from 'svelte-preprocess';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        // hmr: {overlay: false}
    },
    plugins: [svelte({
        preprocess: [
          scss(),
          sass(),
          postcss(),
          globalStyle()
        ],
        onwarn: (warning, handler) => {
            const {code, frame} = warning;
            if (code === "css-unused-selector")
                return;

            handler(warning);
        }}),
        legacy()]
})
