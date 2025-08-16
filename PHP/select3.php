<?php
function JRATOSStaSele($Select)
{
    echo '<form action="PHP/files3.php" method="POST">
    <select name="staselect3">
      <option value="musashikosugi">武蔵小杉駅</option>
      <option value="kuroiso">黒磯駅</option>
      <option value="utsunomiya">宇都宮駅</option>
      <option value="omiya">大宮駅</option>
      <option value="akabane">赤羽駅</option>
      <option value="tokyo">東京駅</option>
      <option value="shinjuku">新宿駅</option>
      <option value="yokohama">横浜駅(ATOS)</option>
      <option value="odawara">小田原駅</option>
      <option value="atami">熱海駅</option>
    </select>
    <button type="submit" name="submit">'.$Select.'</button>
  </form>';
}
function JRATOS_SStaSele($Select)
{
    echo '<span class="selecttext">新幹線駅</span>
    <form action="PHP/files3_S.php" method="POST">
    <select name="staselect3_S">
      <option value="nagano">長野駅</option>
      <option value="utsunomiya">宇都宮駅</option>
    </select>
    <button type="submit" name="submit">'.$Select.'</button>
  </form>';
}