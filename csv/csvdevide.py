#セル分割のため
import csv

input_file = 'Python/jikoku1.csv'  # 入力CSVファイルのパス
output_file = 'Python/jikoku2.csv'  # 出力CSVファイルのパス

# 複数の置換用文字列とその対応する新しい文字列
replace_pairs = [
    ('普通', '普通,'),
    #('準急','準急,'),
    #('急行','急行,'),
    ('快速','快速,'),
    ('車)','車),'),#名鉄用
    ('ライナー大垣','ライナー大垣,'),
    ('ひだ','特急ひだ,'),
    ('しらさぎ','特急しらさぎ,'),
    ('うずしお',',特急うずしお,'),
    ('ことぶき',',快速ことぶき,'),
    ('マリンライナー',',快速マリンライナー,'),
    ('サンライズ瀬戸',',特急サンライズ瀬戸,'),
    ('行き', '行き,'),
    # 他の置換も同様に追加
]

# 入力CSVファイルを読み込み、出力CSVファイルに置換後の内容を書き込む
with open(input_file, 'r', newline='', encoding='utf-8') as csv_in, open(output_file, 'w', newline='', encoding='utf-8') as csv_out:
    reader = csv.reader(csv_in)
    writer = csv.writer(csv_out)
    
    for row in reader:
        new_row = [cell for cell in row]
        for i in range(len(replace_pairs)):
            old_string, new_string = replace_pairs[i]
            new_row = [cell.replace(old_string, new_string) for cell in new_row]

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
