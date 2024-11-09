import csv
import re
import csvfunc
#from railnumber import RailNumber


def TimeTabledata(createfile, staticnumber, shihatsunumber, company,table,inctable,station,dir):
    file1='Python/jikoku3.csv'
    file2=createfile
    data=[]
    #file2='JRE/shinagawa1.csv'
    #駅探のリスト形式時刻表をExcelにコピーし，時刻，種別，行先で分割したものをcsvファイルに(終電近くが不完全)
    csvfunc.csvopen(file1,data)
    #resultflag=0
    #番線は変数で(Aは元になる番号,2つは同じ番号)
    #print(data)
    #Cassavaを使った場合必要な処理、間の空白行を消す
    for value in range(0,len(data)):
        if(data[value][0]==''):
            for value2 in range(value,len(data)-1):
                for row in range(0,len(data[value2])):
                    data[value2][row]=data[value2+1][row]
    railnumber=staticnumber
    hour=int(data[1][0].partition(':')[0])
    snumber=shihatsunumber
    #table=[['ひたち','快速','普通','区間快速','ときわ'],[9,17,11,11,9]]
    #inctable=[['特急','急行','各駅停車','快速','普通'],[1,1,5,9,10]]
    #inctable=[['さくら','のぞみ','こだま','ひかり','みずほ'],[22,22,22,22,22]]
    newdata=[['Aダイヤ '+station+' '+dir+'時刻表',''],[hour]]
    #東海の場合1 当駅始発の部分に番線を入れたい場合2 ATOSは3 その他は0
    #company=3
    if(company==1):
        for value in range(0,len(data)):
            #print(data[value][3])
            if len(data[value])>3:
                if '当駅始発' in data[value][3]:
                    data[value][1]=data[value][1]+'(当駅始発)'
                    data[value][3]=''
    elif(company==3):
        for value in range(0,len(data)):
            #print(data[value][3])
            if len(data[value])>3:
                if '当駅始発' in data[value][3]:
                    data[value][1]='始発'+data[value][1]
                    data[value][3]=snumber
    #hour=data[1][0].hour
    print(hour)
    #新しい配列
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
            #print(data[c][0])
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
            if(len(data[c])>3 and company>1 and data[c][3]!=''):
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
#東海の場合1 当駅始発の部分に番線を入れたい場合2 ATOSは3 その他は0
table=[['ひたち','快速','普通','ときわ','区間準急'],[8,6,6,8,1]]
#inctable=[['特急','急行','各駅停車','快速','普通'],[1,1,5,9,10]]
inctable=[['草津','のぞみ','こだま','スペーシア','リバティ'],[14,22,22,3,3]]
station='上野駅'
dir='下り'
static=5
shihatsu=12
company=3
file='JRE/ueno4.csv'
#static,shihatsu,companyの順
TimeTabledata(file,static,shihatsu,company,table,inctable,station,dir)