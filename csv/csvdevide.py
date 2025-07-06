#セル分割のため
import csv
import re

input_file = 'Python/jikoku1.csv'  # 入力CSVファイルのパス
output_file = 'Python/jikoku2.csv'  # 出力CSVファイルのパス

# 複数の置換用文字列とその対応する新しい文字列
replace_pairs = [
    ('普通', '普通,'),
    ('準急','準急,'),
    ('急行','急行,'),
    #('特急','特急,'),
    #('快速','快速,'),
    ('車)','車),'),#名鉄用
    ('ライナー大垣','ライナー大垣,'),
    ('ライナー静岡','ライナー静岡,'),
    ('ライナー浜松','ライナー浜松,'),
    ('ひだ','特急ひだ,'),
    ('ふじかわ','特急ふじかわ,'),
    ('北斗','特急北斗,'),
    ('はまかぜ','特急はまかぜ,'),
    ('スーパーはくと','特急スーパーはくと,'),
    ('しらさぎ','特急しらさぎ,'),
    ('いしづち','特急いしづち,'),
    ('しまんと','特急しまんと,'),
    ('うずしお','特急うずしお,'),
    ('ことぶき',',快速ことぶき,'),
    ('はやぶさ','はやぶさ,'),
    ('はやて','はやて,'),
    ('特急U','特急U,'),
    ('特急H','特急H,'),
    ('近鉄特急ひのとり:車いす対応車両','特急H,'),
    ('近鉄特急:車いす対応車両','特急,'),
    ('ビスタカー','特急V,'),
    ('観光特急あをによし:車いす対応車両・車内販売','特急A,'),
    ('伊勢志摩ライナー:車いす対応車両','特急I,'),
    ('アーバンライナー:車いす対応車両','特急U,'),
    ('近鉄特急','特急,'),
    ('踊り子','踊り子,'),
    ('はこだてライナー','はこだてライナー,'),
    ('サンポート琴','快速サンポート琴,'),
    ('サンポート観','快速サンポート観,'),
    ('サンポート南風リレー号','快速サンポートリレー号,'),
    ('マリンライナー','快速マリンライナー,'),
    ('サンライズ瀬戸','特急サンライズ瀬戸,'),
    ('サンライズ出雲','特急サンライズ出雲,'),
    ('行き', '行き,'),
    # 他の置換も同様に追加
]

# 入力CSVファイルを読み込み、出力CSVファイルに置換後の内容を書き込む
with open(input_file, 'r', newline='', encoding='utf-8') as csv_in, open(output_file, 'w', newline='', encoding='utf-8') as csv_out:
    reader = csv.reader(csv_in)
    writer = csv.writer(csv_out)
    ptn=re.compile(r'(\d{2}):(\d{2})')
    for row in reader:
        new_row = [cell for cell in row]
        #new2_row = [cell for cell in row]
        for i in range(len(replace_pairs)):
            old_string, new_string = replace_pairs[i]

            new_row = [cell.replace(old_string, new_string) for cell in new_row]
        new_row = [ptn.sub(r'\g<0>,',cell) for cell in new_row]#正規表現で時刻と種別を分けている
        writer.writerow(new_row)

input_file = 'Python/jikoku2.csv'  # 入力CSVファイルのパス
output_file = 'Python/jikoku3.csv'  # 出力CSVファイルのパス
# CSVファイルを読み込んで区切り文字を操作し、新しいCSVファイルに書き込む
with open(input_file, 'r', newline='', encoding='utf-8') as csv_in, \
        open(output_file, 'w', newline='', encoding='utf-8') as csv_out:
    reader = csv.reader(csv_in)
    writer = csv.writer(csv_out, delimiter=',')  # 区切り文字をセミコロンに設定
    
    for row in reader:
        # CSVファイルの各行を新しい区切り文字で結合して書き込む
        new_row = ','.join(row)  
        csv_out.write(new_row + '\n')
