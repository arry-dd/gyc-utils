// import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import fs from 'fs'
const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

export default [
	{
		input: './index.ts',
		output: {
			name: 'howLongUntilLunch',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [
			// resolve(), // 保证绝对路径的正常使用
			// commonjs() // 处理没有导出声明的库
			typescript() // 提供typescript的支持
		]
	},
	{
		input: './index.ts',
		external: ['ms'],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		]
	}
];
