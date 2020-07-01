import babel from 'rollup-plugin-babel';

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
    },
    {
      format: 'cjs',
      file: 'cjs/portlet-registry-to-array.js',
    },
  ],
  plugins: [babel()],
};
