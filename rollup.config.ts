import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';
import buildStats from 'rollup-plugin-build-statistics';

export default defineConfig({
    input: 'src/index.ts',
    output: {
        dir: 'build',
        format: 'iife',
    },
    plugins: [
        typescript(),
        terser(),
        buildStats({ projectName: 'visual-element-selecter' }),
    ],
});
