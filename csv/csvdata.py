import csv
import re
#from railnumber import RailNumber
data=[]
file1='Python/jikoku3.csv'
file2='Kintetsu/nara1_H.csv'
#駅探のリスト形式時刻表をExcelにコピーし，時刻，種別，行先で分割したものをcsvファイルに(終電近くが不完全)
with open(file1,'r', newline='',encoding='utf8') as f:
    reader = csv.reader(f)
    i=0
    for list in reader:
        #print(list)
        data.append(list)
        i+=1
#print("-----csv")
print(data[0])
print(len(data))
#print(len(data[1]))
#print("data:")
table=[['特急','快速','普通','区間快速','はやぶさ'],[2,8,3,3,11]]
inctable=[['はこだて','準急','関空'],[1,3,15]]
#東海の場合1 当駅始発の部分に番線を入れたい場合2 その他は0
company=0
if(company==1):
    for value in range(0,len(data)):
        #print(data[value][3])
        if len(data[value])>3:
            if '当駅始発' in data[value][3]:
                data[value][1]=data[value][1]+'(当駅始発)'
                data[value][3]=''
#hour=data[1][0].hour
hour=int(data[1][0].partition(':')[0])
print(hour)
#新しい配列
newdata=[['Aダイヤ 熱海駅 下り時刻表',''],[hour]]
print(newdata)
#無限ループ防止
stop=0
#dataの縦の値
c=1
#newdataの縦の値
r=1
#理想形は[['Aダイヤ'],[5,普通,普通],['',12,36],[]]
#print(data[0][0].replace('時',''))
#print(type(data[0][0].replace('時','')))
#番線は変数で(Aは元になる番号,2つは同じ番号)
railnumber=9
railnumberA=9
newdata.append([''])
newdata.append([''])
newdata.append([''])
ptntime=re.compile(r'0(\d{1})')
while(c<len(data) and data[c][0]!='' and (stop<2000) and (hour<50)):
    #print(c)
    #print(hour)
    if '時' in data[c][0]:
        data[c][0]=data[c][0].replace('時','')
        data[c][0]=ptntime.sub(r'\g<1>',data[c][0])
        print(data[c][0])
        #while(str(hour) not in data[c][0] and hour<26):
        hour+=1
        while(hour<int(data[c][0])):
            newdata.append([''])
            newdata.append([''])
            newdata.append([''])
            newdata.append([''])
            r+=4
            newdata[r][0]=(hour%24)
            hour+=1
        #print(hour)
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
            for tables in range(0,len(table[0])):
                if(R==table[0][tables]):
                   railnumber=table[1][tables]
            for tables in range(0,len(inctable[0])):
                if(inctable[0][tables] in R):
                   railnumber=inctable[1][tables]
            newdata[r+3].append(railnumber)
    c+=1
    stop+=1
#print(newdata)
# CSVファイルへの書き込み(文字コードはUTF-8_sigにしてbom付きにできる，これによってexcelでも開けるしgetCSVが使える)
with open(file2, 'w',encoding='UTF-8_sig', newline='') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerows(newdata)
