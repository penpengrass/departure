//特急や快速等の列車名や路線名を表示させたい
if (station == "広島駅" && Indexfile == "index4.php") {
    for (var tr = 0; tr < 3; tr++) {
        if (Type[0][tr] == "普通") {
            document.getElementById("TName" + 1 + "" + (tr + 1)).textContent =
                "山陽線";
            document.getElementById("TName" + 1 + "" + (tr + 1)).style.color =
                "#0f0";
            document
                .getElementById("TName" + 1 + "" + (tr + 1))
                .classList.remove("name");
        }
    }
    for (var tr = 0; tr < 2; tr++) {
        /*if (Type[1][tr] == "普通") {
      Cars[1][tr] = "4両";
    } else if (Type[1][tr] == "普通*") {
      Cars[1][tr] = "2両";
      Type[1][tr] = "普通";
    }*/
        document.getElementById("TName" + 2 + (tr + 1)).textContent =
            Cars[1][tr];
        document.getElementById("TName" + 2 + (tr + 1)).style.color = "red";
        document.getElementById("TName" + 2 + (tr + 1)).style.textAlign =
            "right";
        if (Type[3][tr] == "快速") {
            document.getElementById("TName" + 4 + "" + (tr + 1)).textContent =
                "安芸路ライナー";
            document.getElementById(
                "TName" + 4 + "" + (tr + 1)
            ).style.transform = "scaleX(0.65)" + "translate(-10%,0%)";
        }
        if (Type[4][tr] == "快速") {
            document.getElementById("TName" + 5 + "" + (tr + 1)).textContent =
                "みよしライナー";
            document.getElementById("TName" + 5 + (tr + 1)).style.transform =
                "scaleX(0.65)" + "translate(-10%,0%)";
        }
    }

    LineMarkAdd(1, "R", "red");
    LineMarkAdd(2, "B", "skyblue");
    LineMarkAdd(3, "G", "yellowgreen");
    LineMarkAdd(4, "Y", "orange");
    LineMarkAdd(5, "P", "blue");
    //広島駅のみ表のタイトルを広くしている
    for (var td = 0; td < Tablenum; td++) {
        document.getElementsByClassName("Ctitle").item(td).style.padding =
            "7px";
    }
    if (holidayflag == 1) {
        document.getElementById("supplement").textContent =
            station + "のみ土休日ダイヤに対応(表示は土休日ダイヤ)";
    } else if (holidayflag == 0) {
        document.getElementById("supplement").textContent =
            station + "のみ土休日ダイヤに対応(表示は平日ダイヤ)";
    }
}
if (station == "北新地駅") {
    if (holidayflag == 1) {
        document.getElementById("supplement").textContent =
            station + "のみ土休日ダイヤに対応(表示は土休日ダイヤ)";
    } else if (holidayflag == 0) {
        document.getElementById("supplement").textContent =
            station + "のみ土休日ダイヤに対応(表示は平日ダイヤ)";
    }
} else if (station == "三ノ宮駅") {
    LineMarkAdd(1, "A", "blue");
    LineMarkAdd(2, "A", "blue");
    if (holidayflag == 1) {
        document.getElementById("supplement").innerHTML +=
            station + "のみ土休日ダイヤに対応(表示は土休日ダイヤ)<br>";
    } else if (holidayflag == 0) {
        document.getElementById("supplement").innerHTML +=
            station + "のみ土休日ダイヤに対応(表示は平日ダイヤ)<br>";
    }
    document.getElementById("supplement").innerHTML +=
        "一部の快速の番線は不正確";
}
if (station == "新見駅") {
    JRLimitedDevide(0);
    JRLimitedDevide(1);
    allJRWTrainNameColor("orange", "orange", "red");
}
if (station == "米原駅") {
    JRLimitedDevide(0);
    JRLimitedDevide(1);
    JRLimitedDevide(2);
    //document.getElementById('TName' + 2 + '' + (tr + 1)).style.transform = "scaleX(0.65)" + "translate(-15%,0%)";
    for (var tr = 0; tr < Type[0].length; tr++) {
        if (Type[0][tr] == "快速") {
            Type[0][tr] = "普通";
            document.getElementById("TName" + 1 + "" + (tr + 1)).innerHTML =
                '<span class="PartRapid">高槻から快速</span>';
            document.getElementById(
                "TName" + 1 + "" + (tr + 1)
            ).style.textAlign = "left";
        } else if (Type[0][tr] == "快速*") {
            Type[0][tr] = "普通";
            document.getElementById("TName" + 1 + "" + (tr + 1)).innerHTML =
                '<span class="PartRapid">京都から快速</span>';
            document.getElementById(
                "TName" + 1 + "" + (tr + 1)
            ).style.textAlign = "left";
        }
        if (Type[2][tr] == "特別快速") {
            document.getElementById("TType" + 3 + "" + (tr + 1)).style.color =
                "red";
        }

        AllWordChange(0, tr, Des, "加古川", "神戸方面加古川");
        AllWordChange(0, tr, Des, "網干", "姫路方面網干");
        AllWordChange(0, tr, Des, "上郡", "姫路方面上郡");
        DesMiddle(0, tr, "方面");
        DesMiddle(2, tr, "方面");
    }
    allJRWTrainNameColor("orange", "orange", "red");
    if (holidayflag == 1) {
        document.getElementById("supplement").textContent =
            station + "のみ土休日ダイヤに対応(表示は土休日ダイヤ)";
    } else if (holidayflag == 0) {
        document.getElementById("supplement").textContent =
            station + "のみ土休日ダイヤに対応(表示は平日ダイヤ)";
    }
    document.getElementById("supplement").textContent +=
        " 停車駅表示は一部不正確";
}
if (station == "姫路駅") {
    Shinkansenflag = 2;
    JRLimitedDevide(Shinkansenflag + 0);
    JRLimitedDevide(Shinkansenflag + 1);
    JRLimitedDevide(Shinkansenflag + 3);
    for (var tr = 0; tr < Type[0].length; tr++) {
        if (Type[Shinkansenflag + 1][tr] == "快速") {
            Type[Shinkansenflag + 1][tr] = "普通";
            document.getElementById(
                "TName" + (Shinkansenflag + 2) + "" + (tr + 1)
            ).innerHTML = '<span class="PartRapid">西明石から快速</span>';
            document.getElementById(
                "TName" + (Shinkansenflag + 2) + "" + (tr + 1)
            ).style.textAlign = "left";
        }
        AllWordChange(3, tr, Des, "米原", "京都方面米原");
        AllWordChange(3, tr, Des, "野洲", "京都方面野洲");
        AllWordChange(3, tr, Des, "草津", "京都方面草津");
        AllWordChange(3, tr, Des, "長浜", "米原方面長浜");
        AllWordChange(3, tr, Des, "近江塩津", "米原方面近江塩津");
        DesMiddle(3, tr, "経由");
        DesMiddle(3, tr, "方面");
    }
    allJRWTrainNameColor("orange", "orange", "red");
    /*
    document.getElementById('HName' + 3).remove();
    for (var tr = 0; tr < Type[2].length; tr++) {
        document.getElementById('TName' + 3 + '' + (tr + 1)).remove();
    }
    */
    for (var tr = 0; tr < Type[3].length; tr++) {
        if (Type[Shinkansenflag + 3][tr] == "快速") {
            Type[Shinkansenflag + 3][tr] = "普通";
        }
    }
}
if (station == "糸崎駅") {
    for (var td = 0; td < Tablenum; td++) {
        rowremove(td, "HName", "TName");
        //表のサイズを小さくする
        document.getElementById("TTable" + (td + 1)).style.width = "40em";
        document.getElementById("TTable" + (td + 1)).style.marginLeft = "8em";
        let sanyo = ["岩国", "大野浦", "五日市", "広島", "南岩国", "徳山"];
        for (var tr = 0; tr < orderNum; tr++) {
            let dType = document.getElementById("TType2" + (tr + 1));
            if (Des[1][tr] == "広") {
                Type[1][tr] = "呉線";
                dType.style.color = "orange";
            } else if (sanyo.includes(Des[1][tr])) {
                Type[1][tr] = "山陽線";
                dType.style.transform = "scaleX(0.70)" + "translate(-20%,0%)";
            }
            TwoLetterDistance(td, tr, Des, TDes, 1, 1);
            AllWordChange(1, tr, Des, "岩国", "広島方面岩国");
            AllWordChange(1, tr, Des, "大野浦", "広島方面大野浦");
            AllWordChange(1, tr, Des, "五日市", "広島方面五日市");
            DesMiddle(td, tr, "方面");
            DesMiddle(td, tr, "経由");
        }
    }
    if (holidayflag == 1) {
        document.getElementById("supplement").textContent =
            station + "のみ土休日ダイヤに対応(表示は土休日ダイヤ)";
    } else if (holidayflag == 0) {
        document.getElementById("supplement").textContent =
            station + "のみ土休日ダイヤに対応(表示は平日ダイヤ)";
    }
}
if (station == "岡山駅") {
    //スーパーいなば
    JRLimitedDevide(1, tr);
    for (var tr = 0; tr < Type[2].length; tr++) {
        document.getElementById("TName" + 3 + "" + (tr + 1)).style.transform =
            "scaleX(0.80)" + "translate(-5%,0%)";
    }

    JRLimitedDevide(2);
    //瀬戸大橋線
    //JRNameDevide();
    JRLimitedDevide(4);
    for (var tr = 0; tr < Type[4].length; tr++) {
        if (Type[4][tr].includes("普通")) {
            if (Des[4][tr] == "宇野") {
                document.getElementById(
                    "TName" + 5 + "" + (tr + 1)
                ).textContent = "宇野みなと線";
            } else {
                document.getElementById(
                    "TName" + 5 + "" + (tr + 1)
                ).textContent = "瀬戸大橋線";
            }

            document.getElementById("TName" + 5 + "" + (tr + 1)).style.color =
                "#0f0";
            document
                .getElementById("TName" + 5 + "" + (tr + 1))
                .classList.remove("name");
        } else if (Type[4][tr].includes("特急")) {
            /*var Limited = Type[4][tr].substr(Type[4][tr].indexOf('急') + 1);
            document.getElementById('TName' + 5 + '' + (tr + 1)).textContent = Limited;
            Type[4][tr] = '特急'*/
            //JRLimitedDevide(4);
            var Name = document.getElementById(
                "TName" + 5 + (tr + 1)
            ).textContent;
            console.log(Name.length + ":" + tr);
            if (Name.length > 8) {
                document.getElementById(
                    "TName" + 5 + (tr + 1)
                ).style.transform = "scaleX(0.75)" + "translate(-15%,0%)";
            }
        } else if (Type[4][tr].includes("快速ﾏﾘﾝﾗｲﾅｰ")) {
            var Rapid = Type[4][tr].substr(Type[4][tr].indexOf("速") + 1);
            document.getElementById("TName" + 5 + "" + (tr + 1)).textContent =
                Rapid;
            document.getElementById("WType" + 5 + "" + (tr + 1)).textContent =
                "快速";
            Type[4][tr] = "快速";
        } else if (Type[4][tr].includes("臨時")) {
            var Rapid = Type[4][tr].substr(Type[4][tr].indexOf("時") + 1);
            document.getElementById("TName" + 5 + "" + (tr + 1)).textContent =
                Rapid;
            document.getElementById("TName" + 5 + "" + (tr + 1)).style.color =
                "orange";
            Type[4][tr] = "臨時";
        }
    }
    for (var tr = 0; tr < Type[5].length; tr++) {
        if (Type[5][tr].includes("快速")) {
            document.getElementById("TName" + 6 + "" + (tr + 1)).textContent =
                "ことぶき";
            document.getElementById("WType" + 6 + "" + (tr + 1)).textContent =
                "快速";
            document.getElementById("TName" + 6 + "" + (tr + 1)).style.color =
                "orange";
            Type[5][tr] = "快速";
        }
    }
    allJRWTrainNameColor("orange", "#0f0", "#0f0");
    if (holidayflag == 1) {
        document.getElementById("supplement").textContent =
            station + "のみ土休日ダイヤに対応(表示は土休日ダイヤ)";
    } else if (holidayflag == 0) {
        document.getElementById("supplement").textContent =
            station + "のみ土休日ダイヤに対応(表示は平日ダイヤ)";
    }
}

if (station == "三ノ宮駅") {
    var TozaiLine = [
        "四条畷",
        "松井山手",
        "京田辺",
        "同志社前",
        "木津",
        "放出",
        "長尾",
    ];
    JRLimitedDevide(0);
    JRLimitedDevide(1);
    allJRWTrainNameColor("orange", "orange", "red");
    for (var tr = 0; tr < orderNum; tr++) {
        DesMiddle(0, tr, "方面");
        if (TozaiLine.includes(Des[0][tr])) {
            document.getElementById("TName" + 1 + (tr + 1)).innerText =
                "東西線経由";
            document.getElementById("TName" + 1 + (tr + 1)).style.textAlign =
                "center";
        }
        AllWordChange(0, tr, Des, "米原", "京都方面米原");
        AllWordReplace(0, tr, Des, "野洲", "京都方面野洲");
        AllWordReplace(0, tr, Des, "草津", "京都方面草津");
        AllWordReplace(0, tr, Des, "長浜", "米原方面長浜");
        AllWordReplace(0, tr, Des, "近江塩津", "米原方面近江塩津");
        DesMiddle(0, tr, "経由");
        DesMiddle(1, tr, "方面");
    }
}
if (station == "北新地駅") {
    for (var tr = 0; tr < orderNum; tr++) {
        DesMiddle(1, tr, "方面");
    }
}
if (station == "徳山駅") {
    rowremove(4, "HName", "TName");
    document.getElementById("TTable5").style.width = "45em";
    document.getElementById("HType5").style.width = "15%";
    document.getElementById("HTime5").style.width = "25%";
    document.getElementById("HDes5").style.width = "40%";
    for (var td = 0; td < 2; td++) {
        for (var tr = 0; tr < Tablenums[td]; tr++) {
            TwoLetterDistance(td, tr, Des, TDes, 1, 0.9);
        }
    }
    for (var td = 2; td < 5; td++) {
        for (var tr = 0; tr < Tablenums[td]; tr++) {
            TwoLetterDistance(td, tr, Des, TDes, 1, 0.7);
        }
    }
    for (var td = 2; td < 4; td++) {
        for (var tr = 0; tr < Tablenums[td]; tr++) {
            if (Type[td][tr] != "") {
                CarsDefine(td, tr, "普通", "", 4);
                CarsDefine(td, tr, "普通*", "", 3);
                CarsDefine(td, tr, "普通+", "", 6);
                Type[td][tr] = Type[td][tr].replace("*", "");
                Type[td][tr] = Type[td][tr].replace("+", "");
                Cars[td][tr] += "編成";
                CarsInto(td, tr, "TName");
                document.getElementById("TName" + (td + 1) + (tr + 1)).style.color = "#0f0";
            }
        }
    }
    comment.textContent = "両数や号数, 自由席は不正確";
} else if (station == "岩国駅") {
    document.getElementById("supplement").textContent = "※両数は不正確 ";
    if (holidayflag == 1) {
        document.getElementById("supplement").textContent +=
            station + "のみ土休日ダイヤに対応(表示は土休日ダイヤ)";
    } else if (holidayflag == 0) {
        document.getElementById("supplement").textContent +=
            station + "のみ土休日ダイヤに対応(表示は平日ダイヤ)";
    }
    rowremove(0, "HName", "TName");
    rowremove(1, "HName", "TName");
    document.getElementById("TTable" + 1).style.width = "35em";
    document.getElementById("HType1").style.width = "30%";
    document.getElementById("HTime1").style.width = "20%";
    document.getElementById("HDes1").style.width = "40%";
    LineMarkAdd(1, " ", "green");
    LineMarkAdd(2, " ", "gray");
    LineMarkAdd(3, "R", "red");
    LineMarkAdd(4, " ", "blue");
    for (var tr = 0; tr < 3; tr++) {
        CarsDevideToLine(2);
        CarsDefine(3, tr, "普通", "", 4);
        CarsDefine(3, tr, "普通*", "", 3);
        CarsDefine(3, tr, "普通+", "", 6);
        console.log(Cars[3][tr]);
        Type[3][tr] = Type[3][tr].replace("*", "");
        Type[3][tr] = Type[3][tr].replace("+", "");
        CarsInto(2, tr, "TName");
        CarsInto(3, tr, "TName");
        document.getElementById("TName" + (2 + 1) + (tr + 1)).style.color = "orange";
        document.getElementById("TName" + (3 + 1) + (tr + 1)).style.color = "orange";
    }
} else if (station == "下関駅") {
    for (var tr = 0; tr < 2; tr++) {
        if (Type[0][tr] != "") {
            CarsDefine(0, tr, "普通", "", 4);
            CarsDefine(0, tr, "普通*", "", 2);
            Type[0][tr] = Type[0][tr].replace("*", "");
            CarsInto(0, tr, "TName");
            document.getElementById("TName" + (0 + 1) + (tr + 1)).style.color = "#0f0";
        }
        if (Type[1][tr] != "") {
            CarsDefine(1, tr, "普通", "", 4);
            CarsInto(1, tr, "TName");
        }
        if (Type[2][tr] != "") {
            document.getElementById("TName" + (2 + 1) + (tr + 1)).textContent = "ワンマン";
        }
    }

    comment.textContent = "両数は不正確";
}
if (station == "三原駅") {
    for (var tr = 0; tr < orderNum; tr++) {
        AllWordChange(1, tr, Des, "大野浦", "広島方面大野浦");
        AllWordChange(1, tr, Des, "五日市", "広島方面五日市");
        AllWordChange(1, tr, Des, "岩国", "広島方面岩国");
        AllWordChange(1, tr, Des, "南岩国", "広島方面南岩国");
        //無意味
        //DesMiddle(0, tr, '連絡');
        //DesMiddle(1, tr, '方面');
    }

    setInterval(allswitchMihara, 5000);
    if (holidayflag == 1) {
        document.getElementById("supplement").textContent =
            station + "のみ土休日ダイヤに対応(表示は土休日ダイヤ)";
    } else if (holidayflag == 0) {
        document.getElementById("supplement").textContent =
            station + "のみ土休日ダイヤに対応(表示は平日ダイヤ)";
    }
}
for (var td = 0; td < Tablenum; td++) {
    for (var tr = 0; tr < Tablenums[td]; tr++) {
        var L_TrainName = document.getElementById(
            "TName" + (td + 1) + "" + (tr + 1)
        );
        if (L_TrainName != null) {
            Ex_Name[td][tr] = L_TrainName.textContent;
        }
    }
}
if (Indexfile == "index4.php") {
    if (JRShinkansenflag == 0) {
        allJRColor();
    } else if (JRShinkansenflag == 1) {
        allJRWSZColor();
    }
}

if (TwoLetterDisflag == 1) {
    for (var td = 0; td < Tablenum; td++) {
        for (var tr = 0; tr < Tablenums[td]; tr++) {
            TwoLetterDistance(td, tr, Des, TDes, 1, 0.9);
        }
    }
}
if (station == "北新地駅") {
    //setInterval(allswitch_detail, 3000);
    setInterval(function () {
        allswitch_detail(Kitashinchi_Banner);
    }, 20000);
    //setInterval(switchdetail("TTLine", 1, 3, 5), 5000);
} else if (station == "米原駅") {
    //setInterval(allswitch_detail, 20000);
    setInterval(function () {
        allswitch_detail(Maibara_Banner);
    }, 20000);
}

/*function switchTrainInfo() {
    var SanyoCell = document.getElementById("TName11");
    var SaninCell = document.getElementById("TName31");

    // 表示を切り替える
    if (SanyoCell.innerText === "山陽線") {
        SanyoCell.innerText = "4両"
    } else {
        SanyoCell.innerText = "山陽線";
    }
    if (SaninCell.innerText === "山陰線") {
        SaninCell.innerText = "2両";
    } else {
        SaninCell.innerText = "山陰線";
    }
}
if (station == '下関駅') {
    // 10秒ごとに表示を切り替える
    setInterval(switchTrainInfo, 3000);
}*/
