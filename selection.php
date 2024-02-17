<?php
function SelectCompany($fileName,$message){
    echo '<button type="button" onclick="location.href=\''.$fileName.'\'">'.$message.'</button>';
}
//JR西日本在来線の駅選択
function JRWStaSele($Select){
    echo '<form action="PHP/files4.php" method="POST" id="selectstation">
                <select name="staselect4">
                    <option value="kitashinti">北新地駅</option>
                    <option value="maibara">米原駅</option>
                    <option value="tennouji">天王寺駅</option>
                    <option value="sannomiya">三ノ宮駅</option>
                    <option value="himeji">姫路駅</option>
                    <option value="okayama">岡山駅</option>
                    <option value="itozaki">糸崎駅</option>
                    <option value="mihara">三原駅</option>
                    <option value="hiroshima">広島駅</option>
                    <option value="niimi">新見駅</option>
                    <option value="iwakuni">岩国駅</option>
                    <option value="tokuyama">徳山駅</option>
                    <option value="shimonoseki">下関駅</option>
                </select>
                <button type="submit" name="submit">'.$Select.'</button>
            </form>';
}
?>