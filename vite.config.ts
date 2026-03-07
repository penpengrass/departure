import { defineConfig } from 'vite';
import { resolve, extname, relative } from 'path';
import { readdirSync } from 'fs';

// src ディレクトリ内の全 .ts ファイルを取得する関数
const getEntries = () => {
  const srcDir = resolve(__dirname, 'src');
  const entries: Record<string, string> = {};

  //const files = readdirSync(srcDir, { recursive: true }) as string[];
  // src 直下のファイルを走査
  readdirSync(srcDir).forEach(file => {
    // .ts ファイルで、かつ型定義ファイル (.d.ts) 以外を対象にする いったん除外するファイルも含める。
    if (extname(file) === '.ts' && !file.endsWith('.d.ts') && !file.endsWith('typeColor.ts') && !file.startsWith('station')) {
      const name = file.replace(/\.ts$/, ''); // 拡張子を除いた名前をキーにする
      entries[name] = resolve(srcDir, file);
    }
  });

  return entries;
};
export default defineConfig({
  build: {
    outDir: 'js',          // ここで既存の js/ に直接出力
    emptyOutDir: false,    // 既存ファイルを上書きする（必要なら true に）
    minify: false, // これを false にすると整形されたまま出力される
    rollupOptions: {
      input:
        getEntries(),
      output: {
        entryFileNames: '[name].js', // 出力ファイル名を元と同じにする
        chunkFileNames: 'chunk-[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
})