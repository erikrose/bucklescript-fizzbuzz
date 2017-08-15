import uglify from 'rollup-plugin-uglify';

export default {
  moduleName: 'bs_fizzbuzz',
  entry: 'lib/es6_global/src/fizzbuzz.js',
  dest: 'lib/js/uglified.js',
  format: 'iife',
  plugins: [
    uglify({
      compress: {
        unsafe: true,
        dead_code: true,
        warnings: false,
        passes: 2
      },
      toplevel: true
    })
  ]
};