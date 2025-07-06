import csv
import re
import csvfunc
def isint(s):  # 整数値を表しているかどうかを判定
    try:
        int(s, 10)  # 文字列を実際にint関数で変換してみる
    except ValueError:
        return False
    else:
        return True
def emptydata(data,Row,Line):
    for value in range(0,Line):
        data.append
        for value2 in range(0,Row):
            print(str(value)+":"+str(len(data)))
            data[value-1].append
#表の右端は不正確
def TTconnect():
    file1='Python/jikoku4.csv'
    file2='Python/jikoku5.csv'
    TTLeft=[]
    TTRight=[]
    csvfunc.csvopen(file1,TTLeft)
    csvfunc.csvopen(file2,TTRight)
    if (len(TTLeft)!= len(TTRight)):
        print("表を合体できません")
    #TTSum=[[]]
    TTSum = [[('') for j in range(100)] for i in range(100)]
    print(len(TTSum[0]))
    print(len(TTSum))
    #emptydata(TTSum,100,100)
    #emptydata(TTSum,max(len(TTLeft),len(TTRight)),len(TTLeft[TaRow]))
    #for (let TaRow = 2 TaRow < Math.max(TTLeft.length, TTRight.length) TaRow += 4) {
    for TaRow in range(2,max(len(TTLeft), len(TTRight)),4):
        #TaRow = 34
        #console.log(TTLeft[TaRow])
        #console.log(TaRow + ":*" + (TTLeft[TaRow].length + TTRight[TaRow].length))
        #TTSum[TaRow] = new Array(TTLeft[TaRow].length + TTRight[TaRow].length)
        #console.log(TTLeft[TaRow].length)
        if (TTLeft[TaRow - 1][0] == TTRight[TaRow - 1][0]):
            TTSum[TaRow - 1][0] = TTLeft[TaRow - 1][0]
        connect_count = 0
        Sum_TSum = 1
        left_count =1
        right_count =1
        #console.log(TTLeft[TaRow].length + TTRight[TaRow].length)
        #connect_count < (len(TTLeft[TaRow]) + len(TTRight[TaRow])) and connect_count < 50 and (TTLeft[TaRow][left_count] != "" or TTRight[TaRow][right_count] != ""):
        #connect_count < (len(TTLeft[TaRow]) + len(TTRight[TaRow]))
        while connect_count < 30:
            #print("n=" + str(connect_count) + ":" + str(TaRow) + ":Sum_TSum=" + str(Sum_TSum))
            #console.log(TTLeft[TaRow][left_count] + "," + i + " & " + TTRight[TaRow][right_count] + "," + right_count)
            #print("TTLeft="+str(len(TTLeft[TaRow]))+":"+str(left_count))
            #(type(TTLeft[TaRow][left_count]) == "undefined" or TTLeft[TaRow][left_count] == '')
            #(type(TTRight[TaRow][right_count]) == "undefined" or TTRight[TaRow][right_count] == '')
            if(len(TTLeft[TaRow])<=left_count):
                break
            elif(len(TTRight[TaRow])<=right_count):
                #break
                pass
            elif(TTLeft[TaRow][left_count]==""):
                break
            elif(TTRight[TaRow][right_count]==""):
                pass
                #break
            # try:
            #     print(int(TTLeft[TaRow][left_count]))
            #     print(int(TTRight[TaRow][right_count]))
            #     print("int")
            # except:
            #     print("TaRow="+str(TaRow))
            #     print(str(left_count)+":"+str(len(TTLeft[TaRow]))+":"+str(right_count)+":"+str(len(TTRight[TaRow]))+":"+str(Sum_TSum))
            #     print("intエラー")
            #     break
            # try:
            #     print(TTLeft[TaRow + 1][left_count])
            #     print(TTRight[TaRow + 1][left_count])
            #     print(TTSum[TaRow + 1][left_count])
            # except:
            #     print("plusエラー")
            #     break
            if(len(TTLeft[TaRow])==left_count and len(TTRight[TaRow])==right_count):
                break
            elif (len(TTLeft[TaRow])==left_count):
                #console.log("TTLeft空TTRight " + TTRight[TaRow + 1][right_count] + "," + TaRow + ":" + right_count + ":" + TTRight[TaRow][right_count])
                print("TTRight="+str(len(TTRight[TaRow]))+":"+str(right_count))
                TTSum[TaRow][Sum_TSum] = TTRight[TaRow][right_count]
                TTSum[TaRow - 1][Sum_TSum] = TTRight[TaRow - 1][right_count]
                TTSum[TaRow + 1][Sum_TSum] = TTRight[TaRow + 1][right_count]
                TTSum[TaRow + 2][Sum_TSum] = TTRight[TaRow + 2][right_count]
                Sum_TSum+=1
                right_count+=1
            elif (len(TTLeft[TaRow])==left_count):
                #console.log("TTRight空TTLeft " + TTLeft[TaRow + 1][left_count] + "," + TaRow + ":" + left_count + ":" + TTLeft[TaRow][left_count])
                TTSum[TaRow][Sum_TSum] = TTLeft[TaRow][left_count]
                TTSum[TaRow - 1][Sum_TSum] = TTLeft[TaRow - 1][left_count]
                TTSum[TaRow + 1][Sum_TSum] = TTLeft[TaRow + 1][left_count]
                TTSum[TaRow + 2][Sum_TSum] = TTLeft[TaRow + 2][left_count]
                Sum_TSum+=1
                left_count+=1
            elif ((isint(TTLeft[TaRow][left_count]) and isint(TTRight[TaRow][right_count])==False) or int(TTLeft[TaRow][left_count]) < int(TTRight[TaRow][right_count])):
                #console.log("TTLeft " + TTLeft[TaRow + 1][left_count] + "," + TaRow + ":" + left_count + ":" + TTLeft[TaRow][left_count])
                TTSum[TaRow][Sum_TSum] = TTLeft[TaRow][left_count]
                TTSum[TaRow - 1][Sum_TSum] = TTLeft[TaRow - 1][left_count]
                TTSum[TaRow + 1][Sum_TSum] = TTLeft[TaRow + 1][left_count]
                TTSum[TaRow + 2][Sum_TSum] = TTLeft[TaRow + 2][left_count]
                #console.log(Sum_TSum + "-")
                Sum_TSum+=1
                left_count+=1
            elif ((isint(TTLeft[TaRow][left_count])==False and isint(TTRight[TaRow][right_count])) or int(TTLeft[TaRow][left_count]) > int(TTRight[TaRow][right_count])):
                #console.log("TTRight " + TTRight[TaRow + 1][right_count] + "," + TaRow + ":" + right_count + ":" + TTRight[TaRow][right_count])
                TTSum[TaRow][Sum_TSum] = TTRight[TaRow][right_count]
                TTSum[TaRow - 1][Sum_TSum] = TTRight[TaRow - 1][right_count]
                TTSum[TaRow + 1][Sum_TSum] = TTRight[TaRow + 1][right_count]
                TTSum[TaRow + 2][Sum_TSum] = TTRight[TaRow + 2][right_count]
                #console.log(Sum_TSum + "+")
                Sum_TSum+=1
                right_count+=1
            elif (int(TTLeft[TaRow][left_count]) == int(TTRight[TaRow][right_count])):
                #console.log("TT0" + TTRight[TaRow + 1][right_count] + "," + TaRow + ":" + right_count + ":" + TTLeft[TaRow][left_count])
                TTSum[TaRow][Sum_TSum] = TTLeft[TaRow][left_count]
                TTSum[TaRow - 1][Sum_TSum] = TTLeft[TaRow - 1][left_count]
                TTSum[TaRow + 1][Sum_TSum] = TTLeft[TaRow + 1][left_count]
                TTSum[TaRow + 2][Sum_TSum] = TTLeft[TaRow + 2][left_count]
                #console.log(TTLeft[TaRow][left_count])
                #console.log(Sum_TSum + "0")
                Sum_TSum+=1
                right_count+=1
                left_count+=1
            else:
                print("error")
            
            #console.log(TTSum[TaRow])
            #console.log(TaRow+"."+Sum_TSum)
            connect_count+=1
        print(str(TTLeft[TaRow-1][0])+"時変更")
    file3='Python/jikoku6.csv'
    with open(file3, 'w',encoding='UTF-8_sig', newline='') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerows(TTSum)
TTconnect()