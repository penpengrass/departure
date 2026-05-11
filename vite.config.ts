import { defineConfig } from 'vite';
import { resolve, extname, relative } from 'path';
import { readdirSync } from 'fs';

// src ディレクトリ内の全 .ts ファイルを再帰的に取得する関数
const getEntries = () => {
  const srcDir = resolve(__dirname, 'src');
  const entries: Record<string, string> = {};

  const walk = (dir: string) => {
    readdirSync(dir, { withFileTypes: true }).forEach(dirent => {
      const full = resolve(dir, dirent.name);
      if (dirent.isDirectory()) {
        walk(full);
        return;
      }

      if (extname(dirent.name) === '.ts' && !dirent.name.endsWith('.d.ts')) {
        // src 以下の相対パス（拡張子除去）をエントリ名にする
        const rel = relative(srcDir, full).replace(/\.ts$/, '');
        entries[rel] = full;
      }
    });
  };

  walk(srcDir);
  return entries;
};
export default defineConfig({
  build: {
    outDir: 'dist',          // ここで既存の js/ に直接出力
    emptyOutDir: true,    // 既存ファイルを上書きする（必要なら true に）
    minify: false, // これを false にすると整形されたまま出力される
    rollupOptions: {
      input:
        getEntries(),
      output: {
        entryFileNames: '[name].js', // 出力ファイル名を元と同じにする
        chunkFileNames: 'module/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
})