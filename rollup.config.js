import { terser } from 'rollup-plugin-terser';
export default {
    input: 'index.js',
    output: [
        {
            file: 'dist/bundle.common.js',
            format: 'cjs',
            plugins: [terser()]
        },
        {
            file: 'dist/bundle.esm.js',
            format: 'es',
        },
        {
            file: 'dist/bundle.iife.js',
            format: 'iife',
            name: 'iwi',
            plugins: [terser()]
        },
        {
            file: 'dist/bundle.umd.js',
            format: 'umd',
            name: 'iwi',
            plugins: [terser()]
        }
    ]
};