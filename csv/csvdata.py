import csv
#from railnumber import RailNumber
data=[]
file1='Python/jikoku3.csv'
file2='JRW/iwakuni1.csv'
#番線の関数を作りたい
def RailNumber():
    global railnumber
    global newdata
    global r
    if(newdata[r][len(newdata[r])-1]=='普通'):
        railnumber=5
    #if(newdata[r+2][len(newdata[r])-1] in ['東城' ,'備後落合']):
        #railnumber=2
#駅探のリスト形式時刻表をExcelにコピーし，時刻，種別，行先で分割したものをcsvファイルに(終電近くが不完全)
with open(file1,'r', newline='',encoding='utf8') as f:
    reader = csv.reader(f)
    i=0
    for list in reader:
        #print(list)
        data.append(list)
        i+=1
print("-----csv")
print(data[0])
print(len(data))
print(len(data[1]))
print("data:")
print(data)
print(data[1][0])
print(type(data[1][0]))
#東海の場合1 当駅始発の部分に番線を入れたい場合2 その他は0
company=0
if(company==1):
    for value in range(0,len(data)):
        print(data[value][3])
        if '当駅始発' in data[value][3]:
            data[value][1]=data[value][1]+'(当駅始発)'
            data[value][3]=''
#hour=data[1][0].hour
hour=int(data[1][0].partition(':')[0])
print(hour)
#新しい配列
newdata=[['Aダイヤ 岐阜駅 下り時刻表',''],[hour]]
print(newdata)
#無限ループ防止
stop=0
#dataの縦の値
c=1
#newdataの縦の値
r=1
#理想形は[['Aダイヤ'],[5,普通,普通],['',12,36],[]]
print(data[0][0].replace('時',''))
print(type(data[0][0].replace('時','')))
#番線は変数で(Aは元になる番号,2つは同じ番号)
railnumber=9
railnumberA=9
newdata.append([''])
newdata.append([''])
newdata.append([''])
while(c<len(data) and data[c][0]!='' and (stop<2000) and (hour<50)):
    #print(c)
    #print(hour)
    if '時' in data[c][0]:
        #data[c][0]=data[c][0].replace('0.','.')
        #while(str(hour) not in data[c][0] and hour<26):
        hour+=1
        print(hour)
        newdata.append([''])
        newdata[r+4][0]=(hour%24)
        r+=4
        count=0
        while(count<3):
            newdata.append([''])
            count+=1
            #print(newdata)
    else:
        #種別
        newdata[r].append(data[c][1])
        #時刻
        newdata[r+1].append(data[c][0][-2:])
        #行先
        newdata[r+2].append(data[c][2].rstrip('行き'))
        #番線判定
        if(len(data[c])>3 and company==2):
            newdata[r+3].append(data[c][3])
        else:
            R=newdata[r][len(newdata[r])-1]
            if('関空' in R or '特急' in R):
                railnumber=4
            elif('当駅' in newdata[r][len(newdata[r])-1]):
                railnumber=1
            elif(newdata[r][len(newdata[r])-1]=='普通'):
                railnumber=1
            elif(newdata[r][len(newdata[r])-1]=='特急'):
                railnumber=4
            elif(newdata[r][len(newdata[r])-1]=='急行'):
                railnumber=3
            else:
                railnumber=3
            #RailNumber()
            newdata[r+3].append(railnumber)
    c+=1
    stop+=1
print(newdata)
# CSVファイルへの書き込み(文字コードはUTF-8_sigにしてbom付きにできる，これによってexcelでも開けるしgetCSVが使える)
with open(file2, 'w',encoding='UTF-8_sig', newline='') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerows(newdata)
