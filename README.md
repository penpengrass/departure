# アプリの内容
プログラミング練習を主目的とした鉄道のリアルタイム発車標再現  
鉄道駅の発車標をリアルタイムに再現している  
鉄道会社, 発車標の種類ごとにファイルを分けている 
色や形式をできる限り再現しているが，フォント等はWindowsデフォルトに合わせている 両数は非表示  

# departureの使い方(xampp使用)
xamppをインストールし,Apacheをオンにする(PHPが使える環境ならば他の方法も可能)  
xampp\htdocs\departureの形となるようにフォルダを置く  
http://localhost/departure/index2.php のようにブラウザで開く  
列車の運転間隔によって何分ごとに表示更新するかを分けている    
サーバーにアップロードしているが未完成  
# departureの使い方(Docker使用)
dockerfileとdocker-compose.ymlを使用し，プロジェクトのターミナルでdocker-compose up -dコマンドを実行  
mysqlは使用していない  
参考に使用したqiita記事  
https://qiita.com/Shika-san/items/3eff1d6237847d740304  

# 問題点
一部の駅の番線や停車駅表示が不正確  
PCやタブレットサイズによって文字同士が被る  
曜日ごとの臨時列車に未対応  
その他はメニュー参照  

# TypeScriptを使用する場合
`npm init -y`  
`npm install typescript @types/node --save-dev`  
`npx tsc --init`  

# TypeScriptの実行
`npm install`  
`npx vite build`
# 参考にしたサイト
デザインのレイアウト部分のみ、プログラミング部分は独力
http://r113.sakura.ne.jp/p/hasshahyo/index.htm
 
# データの取り扱い・免責事項
- 本リポジトリに含まれる時刻表データ（CSV）は、公開情報に基づき個人が独自に作成・入力したものです。
- 鉄道事業者等とは一切関係ありません。公式のデータ・アプリではありません。手入力のため誤りがある可能性があります。
