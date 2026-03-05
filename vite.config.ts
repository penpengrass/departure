import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    outDir: 'js',          // ここで既存の js/ に直接出力
    emptyOutDir: false,    // 既存ファイルを上書きする（必要なら true に）
    minify: false, // これを false にすると整形されたまま出力される
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/main.ts')
        // 必要に応じて他の entry を追加
      },
      output: {
        entryFileNames: '[name].js', // 出力ファイル名を元と同じにする
        chunkFileNames: 'chunk-[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
})