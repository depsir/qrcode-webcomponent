import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  // If using any exports from a symlinked project, uncomment the following:
  // preserveSymlinks: true,
	input: ['src/index.js'],
	output: {
		file: 'build/qr-code.js',
		format: 'es',
		sourcemap: true
	},
	plugins: [
    resolve({preferBuiltins: false, browser:true}),
    commonjs()
 
  ]
};

