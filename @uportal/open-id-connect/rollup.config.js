import babel from 'rollup-plugin-babel';

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
    },
    {
      format: 'cjs',
      file: 'cjs/open-id-connect.js',
    },
  ],
  plugins: [babel()],
};
