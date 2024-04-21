import csv
import re
#from railnumber import RailNumber
data=[]
file1='JRK/hakata1.csv'
file2='JRK/hakata1_R.csv'
#駅探のリスト形式時刻表をExcelにコピーし，時刻，種別，行先で分割したものをcsvファイルに(終電近くが不完全)
with open(file1,'r', newline='',encoding='utf8') as f:
    reader = csv.reader(f)
    i=0
    for list in reader:
        #print(list)
        data.append(list)
        i+=1
#print("-----csv")
#print(data[0])
#print(len(data))
#print(len(data[1]))
#print("data:")
resultflag=0
hour=int(data[1][0].partition(':')[0])
#min=int(data[1][0].partition(':')[2])
for value in range(2,len(data),4):
    #print(str(value)+'value')
    for value2 in range(1,len(data[value])-1):
        #print(str(value2)+'value2')
        #print(str(len(data[value]))+'len')
        #print(data[value-1])
        #print(data[value])
        #print(data[value][value2]+data[value][value2+1])
        if (data[value][value2]==data[value][value2+1]) & (data[value-1][value2]!=data[value-1][value2+1]):
            data[value-1][value2]=data[value-1][value2+1]+'･'+data[value-1][value2]
            data[value+1][value2]=data[value+1][value2+1]+'･'+data[value+1][value2]
            for value3 in range(value2+1,len(data[value])-1):
                #print(str(value2+1)+'value2')
                #print(len(data[value]))
                #print(str(value3+1)+'value3')
                data[value-1][value3]=data[value-1][value3+1]
                data[value][value3]=data[value][value3+1]
                data[value+1][value3]=data[value+1][value3+1]
                data[value+2][value3]=data[value+2][value3+1]
            data[value-1].pop()
            data[value].pop()
            data[value+1].pop()
            data[value+2].pop()
        if(value2+4>len(data[value])):
            break
        #print(str(value)+':'+str(value2)+'renketsu'+str(len(data[value])))
# CSVファイルへの書き込み(文字コードはUTF-8_sigにしてbom付きにできる，これによってexcelでも開けるしgetCSVが使える)
with open(file2, 'w',encoding='UTF-8_sig', newline='') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerows(data)
