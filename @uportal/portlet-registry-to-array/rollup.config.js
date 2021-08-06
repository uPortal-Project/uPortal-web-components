import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/portlet-registry-to-array.js',
  output: [
    {
      format: 'esm',
      file: 'esm/portlet-registry-to-array.js',
    },
    {
      format: 'umd',
      name: 'portletRegistryToArray',
      file: 'umd/portlet-registry-to-array.js',
      globals: { 'lodash/uniqBy': 'uniqBy' },
    },
    {
      format: 'cjs',
      file: 'cjs/portlet-registry-to-array.js',
    },
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    resolve({ moduleDirectories: ['node_modules'] }),
  ],
  external: ['lodash/uniqBy'],
};
