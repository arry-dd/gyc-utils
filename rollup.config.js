// import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { cleandir } from 'rollup-plugin-cleandir';
import eslint from '@rollup/plugin-eslint';
import fs from 'fs';
const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

export default {
	input: './src/index.ts',
	output: [
		{ file: pkg.main, format: 'cjs', sourcemap: true },
		{ name: 'index', file: pkg.browser, format: 'umd', sourcemap: true },
		{ file: pkg.module, format: 'es', sourcemap: true },
	],
	plugins: [
		cleandir('./dist'),
		// resolve(), // 保证绝对路径的正常使用
		// commonjs(), // 处理没有导出声明的库
		eslint(),
		typescript(), // 提供typescript的支持
	],
};
