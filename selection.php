<?php
function SelectCompany($fileName,$message){
    echo '<button type="button" onclick="location.href=\''.$fileName.'\'">'.$message.'</button>';
}
//JR西日本在来線の駅選択
function JRWStaSele($Select){
    echo '<form action="index4.php" method="POST" id="selectstation">
                <select name="stasele">
                    <option value="csv/JRW/JRS1.csv">北新地駅</option>
                    <option value="csv/JRW/maibara1.csv">米原駅</option>
                    <option value="csv/JRW/tennoji1.csv">天王寺駅</option>
                    <option value="csv/JRW_S/himeji_S1.csv">姫路駅</option>
                    <option value="csv/JRW/SanyoArea/okayama_sanyo1.csv">岡山駅</option>
                    <option value="csv/JRW/SanyoArea/itozaki1.csv">糸崎駅</option>
                    <option value="csv/JRW/SanyoArea/mihara1.csv">三原駅</option>
                    <option value="csv/JRW/SanyoArea/hiroshima1.csv">広島駅</option>
                    <option value="csv/JRW/niimi1.csv">新見駅</option>
                    <option value="csv/JRW/SanyoArea/iwakuni1.csv">岩国駅</option>
                    <option value="csv/JRW/SanyoArea/tokuyama1.csv">徳山駅</option>
                    <option value="csv/JRW/SanyoArea/shimonoseki1.csv">下関駅</option>
                </select>
                <button type="submit" name="submit">'.$Select.'</button>
            </form>';
}
?>