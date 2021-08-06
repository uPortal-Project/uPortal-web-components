import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/open-id-connect.js',
  output: [
    {
      format: 'esm',
      file: 'esm/open-id-connect.js',
    },
    {
      format: 'umd',
      name: 'openIdConnect',
      file: 'umd/open-id-connect.js',
      globals: { 'jwt-decode': 'decode' },
    },
    {
      format: 'cjs',
      file: 'cjs/open-id-connect.js',
    },
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    resolve({ moduleDirectories: ['node_modules'] }),
  ],
  external: ['jwt-decode'],
};
