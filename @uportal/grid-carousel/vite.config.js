import { resolve } from 'path';
import { defineConfig } from 'vite';
import minimist from 'minimist';
import babel from 'vite-plugin-babel';

export default defineConfig({
  build: {
    outDir: 'dist/',
    lib: {
      entry: resolve(__dirname, 'src/grid-carousel.js'),
      name: 'GridCarousel',
      formats: ['es', 'umd', 'cjs', 'iife'],
      fileName: (format, name) => {
        const { minify } = minimist(process.argv);
        return `${name}.${format}${minify ? '.min' : ''}.js`;
      },
    },
    rollupOptions: {},
    minify: 'esbuild',
    copyPublicDir: false,
  },
  plugins: [
    babel({
      babelConfig: {
        babelrc: false,
        configFile: false,
        assumptions: {
          setPublicClassFields: true,
        },
        plugins: [
          [
            '@babel/plugin-proposal-decorators',
            {
              version: '2018-09',
              decoratorsBeforeExport: true,
            },
          ],
          ['@babel/plugin-proposal-class-properties'],
          ['@babel/plugin-syntax-import-assertions'],
        ],
      },
    }),
  ],
});
