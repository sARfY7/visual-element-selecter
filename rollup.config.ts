import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';
import buildStats from 'rollup-plugin-build-statistics';

export default defineConfig({
    input: 'src/index.ts',
    output: {
        dir: 'dist',
        format: 'iife',
    },
    plugins: [
        typescript(),
        terser({
            compress: {
                global_defs: {
                    module: false,
                },
            },
        }),
        buildStats({ projectName: 'visual-element-selecter' }),
    ],
});
