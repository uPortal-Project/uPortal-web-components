import progress from 'rollup-plugin-progress';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
import commonjs from 'rollup-plugin-commonjs';
import prepack from 'rollup-plugin-prepack';
import minify from 'rollup-plugin-babel-minify';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  exclude: ['stylis'],
  output: [
    {
      format: 'cjs',
      sourcemap: true,
      file: pkg.main,
    },
    {
      format: 'esm',
      sourcemap: true,
      file: pkg.module,
    },
    {
      format: 'iife',
      name: 'WaffleMenu',
      sourcemap: true,
      file: 'build/waffle-menu.iife.js',
    },
  ],
  plugins: [
    progress(),
    resolve(),
    builtins(),
    json(),
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs({
      namedExports: {
        'react': ['Component', 'createElement', 'cloneElement'],
        'react-dom': ['render', 'unmountComponentAtNode'],
        'react-is': ['isValidElementType'],
        'axios': ['get'],
      },
    }),
    globals(),
    // prepack(),
    // minify(),
  ],
};
