import babel from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';
import styles from 'rollup-plugin-styles';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import copy from 'rollup-plugin-copy';

export default {
  input: './index.js',
  output: {
    file: 'build/bundle.js',
    format: 'cjs',
  },
  plugins: [
    image(),
    styles(),
    babel({ babelHelpers: 'bundled', presets: ['@babel/preset-env'] }),
    copy({
      targets: [{ src: 'index.html', dest: 'build' }],
    }),
    serve({
      open: true,
      contentBase: 'build',
      port: 3000,
    }),
    livereload('build'),
  ],
};
