declare module 'rollup-plugin-babel';
declare module '@remax/rollup-plugin-postcss';
declare module 'rollup-plugin-json';
declare module 'rollup-plugin-node-resolve';
declare module 'rollup-plugin-progress';
declare module 'rollup-plugin-delete';
declare module 'rollup-plugin-alias';
declare module 'rollup-plugin-inject';
declare module '@remax/rollup-plugin-url';
declare module 'rollup-plugin-typescript';
declare module 'postcss-url';
declare module 'mkdirp';
declare module '@remax/postcss-px2units';
declare module '@babel/helper-module-imports';
declare module 'acorn-walk';
declare module 'scheduler';
declare module 'slash2';
declare module 'named-exports-db';
declare module 'esm';
declare module 'sander';
declare module 'acorn-jsx';

declare namespace jest {
  interface Matchers<R, T> {
    toMatchOutput: (output: string) => R;
  }
}
