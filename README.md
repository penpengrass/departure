# アプリの内容
プログラミング練習を主目的とした鉄道のリアルタイム発車標再現  
鉄道駅の平日ダイヤの発車標をリアルタイムに再現している  
鉄道会社, 発車標の種類ごとにファイルを分けている 
色や形式をできる限り再現しているが，フォント等は基本的な物を使用 両数は非表示  
表示駅は随時追加予定  
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
# 表示駅
index2.php・・・近鉄　　　鶴橋駅　奈良駅  京都駅　名古屋駅  
index3.php・・・JR東日本　武蔵小杉駅(未完成) 横浜駅 小田原駅 熱海駅 宇都宮駅     
index3_S.php・・・JR東日本　長野駅  
index4.php・・・JR西日本　北新地駅　米原駅  姫路駅 岡山駅 糸崎駅 三原駅 広島駅 新見駅 岩国駅 徳山駅 下関駅   
index4_T.php・・・JR西日本 天王寺駅(未完成)   
index4_Tsuruga.php・・・JR西日本  敦賀駅  
index4_A.php・・・JR西日本LED  大阪駅  
index4_S2.php・ 山陽新幹線主要駅  広島駅 博多駅  
index5.php・・・東急　　　二子玉川駅　武蔵小杉駅  
index6.php・・・JR東日本　長野駅　松本駅 横浜駅  
index6_S.php・・・JR東日本新幹線　東京駅  
index7.php・・・JR東海　　沼津駅　静岡駅　浜松駅　豊橋駅　岐阜駅 大垣駅  
index7_S1.php・・・東海道新幹線　　浜松駅 豊橋駅  
index7_T.php・・・JR東海　名古屋駅  
index8.php・・・JR北海道  札幌駅 新函館北斗駅  
index9.php・・・JR四国    高松駅      
index10.php・・・JR九州  小倉駅  
index10_H.php・・・JR九州  博多駅  

# 問題点
一部の駅の番線や停車駅表示が不正確  
PCやタブレットサイズによって文字同士が被る  
曜日ごとの臨時列車に未対応  
その他はメニュー参照  

# 参考にしたサイト
デザインのレイアウト部分のみ、プログラミング部分は独力
http://r113.sakura.ne.jp/p/hasshahyo/index.htm