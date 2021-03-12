// You can find a benchmark of the available CSS minifiers under
// https://github.com/GoalSmashers/css-minification-benchmark
// We have found that clean-css is faster than cssnano but the output is larger.
// Waiting for https://github.com/cssinjs/jss/issues/279
// 4% slower but 12% smaller output than doing it in a single step.
//
// It's using .browserslistrc

import Processor from 'postcss/lib/processor';
import CleanCSS from 'clean-css';

export let prefixer: Processor;
export let cleanCSS: CleanCSS.MinifierOutput;

if (process.env.NODE_ENV === 'production') {
  /* eslint-disable global-require, @typescript-eslint/no-var-requires */
  const postcss = require('postcss');
  const autoprefixer = require('autoprefixer');
  const CleanCSS = require('clean-css');
  /* eslint-enable global-require, @typescript-eslint/no-var-requires */

  prefixer = postcss([autoprefixer]);
  cleanCSS = new CleanCSS();
}
