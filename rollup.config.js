import uglify from 'rollup-plugin-uglify';

export default {
  moduleName: 'bs_fizzbuzz',
  entry: 'lib/es6_global/src/fizzbuzz.js',
  dest: 'lib/js/fizzbuzz.js',
  format: 'iife',
  plugins: [
    uglify()
  ]
};