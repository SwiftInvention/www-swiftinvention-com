import { defineConfig, type PluginOption } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';
import { visualizer } from 'rollup-plugin-visualizer';
import UnpluginInjectPreload from 'unplugin-inject-preload/vite';

export default defineConfig({
  base: './',
  build: {
    outDir: 'build',
  },
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand:
          "eslint './src/**/*.{js,jsx,ts,tsx}' --config ./.eslintrc.cjs --format stylish",
      },
    }),
    visualizer({
      gzipSize: true,
    }) as PluginOption,
    svgrPlugin({}),
    UnpluginInjectPreload({
      files: [
        {
          entryMatch: /OpenSans\.ttf?$/,
          attributes: {
            crossorigin: 'anonymous',
          },
        },
      ],
      injectTo: 'head' as const,
    }),
  ],
  css: {
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
  },
  resolve: {
    alias: [...[], { find: '~', replacement: path.resolve(__dirname, 'src') }],
  },
});
