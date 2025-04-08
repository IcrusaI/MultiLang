import typescript from 'rollup-plugin-typescript2';

export default {
    input: 'src/MultiLang.ts',
    output: [
        {
            file: 'dist/MultiLang.cjs.js',
            format: 'cjs',
        },
        {
            file: 'dist/MultiLang.esm.js',
            format: 'esm',
        }
    ],
    plugins: [typescript({ tsconfig: "./tsconfig.json" })],
};