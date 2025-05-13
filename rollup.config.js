import dts from 'rollup-plugin-dts';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: `src/index.ts`,
    output: [
      {
        file: 'dist/index.js',
        format: 'umd',
        name: 'rul2d-template',
        sourcemap: false
      }
    ],
    plugins: [
      nodeResolve({browser: true}),
      commonjs(),
      typescript(),
      terser({keep_classnames: true})
    ],
  },

  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.d.ts',
        format: 'umd',
        name: 'rul2d-template'
      },
    ],
    plugins: [
      dts(),
    ],
  },
];