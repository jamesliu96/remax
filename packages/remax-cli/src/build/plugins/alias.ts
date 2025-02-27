import * as path from 'path';
import aliasPlugin from 'rollup-plugin-alias';
import { RemaxOptions } from '../../getConfig';

export default function(options: RemaxOptions) {
  const aliasConfig = Object.entries(options.alias || {}).reduce(
    (config, [key, value]) => {
      config[key] = value.match(/^(\.|[^/])/)
        ? path.resolve(options.cwd, value)
        : value;
      return config;
    },
    {} as any
  );
  return aliasPlugin({
    resolve: [
      '',
      '.ts',
      '.js',
      '.tsx',
      '.jsx',
      '/index.js',
      '/index.jsx',
      '/index.ts',
      '/index.tsx',
    ],
    '@': path.resolve(options.cwd, options.rootDir),
    ...aliasConfig,
  });
}
