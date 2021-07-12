import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'
import { string } from 'rollup-plugin-string'
import resolve from '@rollup/plugin-node-resolve'
import { scss, sass, postcss, globalStyle } from 'svelte-preprocess'

export default {
  input: 'dist/tmp/server.js',

  output: {
    file: 'dist/server/index.js',
    format: 'cjs',
  },
  preprocess: [scss(), sass(), postcss(), globalStyle()],
  plugins: [resolve(), json(), commonjs(), string({ include: '**/*.html' })],
  supportsAutofix: true,
}
