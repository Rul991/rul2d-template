import dts from 'rollup-plugin-dts';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: `src/index.ts`,
    output: [
      {
        file: 'dist/index.js',
        format: 'umd',
        name: 'rul2d'
      }
    ],
    plugins: [
      nodeResolve({browser: true}),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json'
      })
    ],
  },

  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.d.ts',
        format: 'es',
      },
    ],
    plugins: [
      dts(),
    ],
  },
];