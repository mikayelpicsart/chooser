import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';

import pkg from './package.json';

const configMain = {
    input: 'src/index.js',
    external: Object.keys(pkg.peerDependencies || {}),
    output: [{
        file: `dist/${pkg.name}-umd.js`,
        format: 'umd',
        name: pkg.name
    },
    {
        file: `dist/${pkg.name}-cjs.js`,
        format: 'cjs',
        name: pkg.name
    },
    {
        file: `dist/${pkg.name}-iife.js`,
        format: 'iife',
        name: pkg.name
    }],
    plugins: [
        resolve(),
        commonjs({
            include: ["node_modules/**"]
        }),
        babel({ exclude: 'node_modules/**', runtimeHelpers: true }),
    ]
}

export default configMain;
