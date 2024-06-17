<?php
function SelectCompany($fileName, $message)
{
    echo '<button type="button" onclick="location.href=\'' . $fileName . '\'">' . $message . '</button>';
}
//JR西日本在来線の駅選択
function JRWStaSele($Select,$Select_Sanyo='山陽地区駅変更')
{
    JRKinkiStaSele($Select);
}
function JRKinkiStaSele($Select)
{
    echo '<form action="PHP/files4.php" method="POST" id="selectstation">
                <select name="staselect4">
                    <option value="kitashinti">北新地駅</option>
                    <option value="tsuruga">敦賀駅</option>
                    <option value="maibara">米原駅</option>
                    <option value="tennouji">天王寺駅</option>
                    <option value="osaka">大阪駅</option>
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
                <button type="submit" name="submit" class="staselection">' . $Select . '</button>
            </form>';
}
function JRSanyoStaSele($Select)
{
    echo '<form action="PHP/files4.php" method="POST" id="selectstation">
                <select name="staselect4">
                    <option value="okayama">岡山駅</option>
                    <option value="itozaki">糸崎駅</option>
                    <option value="mihara">三原駅</option>
                    <option value="hiroshima">広島駅</option>
                    <option value="niimi">新見駅</option>
                    <option value="iwakuni">岩国駅</option>
                    <option value="tokuyama">徳山駅</option>
                    <option value="shimonoseki">下関駅</option>
                </select>
                <button type="submit" name="submit" class="staselection">' . $Select . '</button>
            </form>';
}
function JRWSStaSele($Select)
{
    echo '<span class="selecttext">新幹線駅</span>
    <form action="PHP/files4_S.php" method="POST" id="selectstation">
    <select name="staselect4">
      <option value="hiroshima">広島駅</option>
      <option value="hakata">博多駅</option>
    </select>
    <button type="submit" class="henko" name="submit">'.$Select .'</button>
  </form>';
}