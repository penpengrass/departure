<?php
function JRKSTable($i, $tablenums, $detaillength, $column = 2)
{
  print('
 <table class="STable" id="TTable' . $i . '">');
  print('
<caption class="Ctitle"><p2 id="Tstation' . $i . '"></p2><p2 id="kn' . $i . '"></p2></caption>
    <tr>
      <th width="25%" colspan="3">種別</th>
      <th width="15%">時刻</th>
      <th width="20%">行先</th>
      <th width="15%">のりば</th>
      <th width="25%"></th>
    </tr>
  ');
  //n番目に発車する列車までを表示
  for ($j = 1; $j <= $tablenums[$i - 1]; $j++) {
    print('
    <tr id="TTLine' . $i . $j . '"><p10 id="TTLineContents' . $i . $j . '"></p10>
      <td width="50%" class="shubetu" id="TType' . $i . $j . '"colspan="2"><span id="WType' . $i . $j . '"></span></td>
      <td width="50%" class="name" id="TName' . $i . $j . '"><span class="Wname" id="WName' . $i . $j . '"></span></td>
      <td class="Ctime" id="TTime' . $i . $j . '"><p2 id="THour' . $i . $j . '"></p2>:<p2 id="TMin' . $i . $j . '"></p2></td>
      <td class="Destination" id="TDes' . $i . $j . '"><span id="WDes' . $i . $j . '"></span></td>
      <td class="railnumber" id="TNum' . $i . $j . '"></td>
      <td class="CDetail" id="TCars' . $i . $j . '"></td>
    </tr>
    ');
    if ($detaillength >= $j) {
      //<td colspan="2"><p3 class="CDetailtitle" id="TDetailtitle' . $i . $j . '"></p3></td>
      print('
    <tr>
    <td colspan="7" class="CDetail"><p2 class="news-banner__content" id="TDetail' . $i . $j . '"></p2></td>
    </tr>
    ');
    }
  }
  print('
    <td colspan="7" class="CDetail" ><p2 class="news-banner__content" id="TDetail' . $i . $tablenums[$i - 1] + 1 . '"></p2></td>
        </table>
');
  if ($i % $column == 0) {
    print('
        </tableline>
  <tableline id="tableline' . $i . '">');
  }
}
function JRKZTable($i, $column, $tablenums, $tableConnectFlag)
{
  print('
 <table id="ZTable' . $i . '">');
  print('
<caption class="Ctitle"><showing><p2 id="Tstation' . $i . '"></p2><p2 id="kn' . $i . '"></p2></showing></caption>
    <tr>
      <th width="30%" id="HType' . $i . '"></th>
      <th width="15%" id="HTime' . $i . '"></th>
      <th width="28%" id="HDes' . $i . '"></th>
      <th width="10%" id="HCars' . $i . '"></th>
      <th width="17%" class="HrailNumber" id="HrNumber' . $i . '"></th>
    </tr>
  ');
  for ($j = 1; $j <= $tablenums[$i - 1]; $j++) {
    print('
    <tr id="TRow' . $i . $j . '">
      <td class="shubetu" id="TType' . $i . $j . '"><span id="WType' . $i . $j . '"></span></td>
      <td class="CTime" id="TTime' . $i . $j . '"><p2 id="THour' . $i . $j . '"></p2>:<p2 id="TMin' . $i . $j . '"></p2></td>
      <td class="Destination" id="TDes' . $i . $j . '"></td>
      <td class="cars" id="TCars' . $i . $j . '"></td>
      <td class="railnumber" id="TNum' . $i . $j . '"></td>
    </tr>
    ');
  }
  if ($tableConnectFlag == 1) {
    $i++;
    print('
        <th class="Ctitle" colspan="5"><p2 id="Tstation' . $i . '"></p2><p2 id="kn' . $i . '"></p2></th>
        <tr>
      <th width="30%" id="HType' . $i . '"></th>
      <th width="15%" id="HTime' . $i . '"></th>
      <th width="28%" id="HDes' . $i . '"></th>
      <th width="10%" id="HCars' . $i . '"></th>
      <th width="17%" class="HrailNumber" id="HrNumber' . $i . '"></th>
    </tr>
      ');
    for ($j = 1; $j <= $tablenums[$i - 1]; $j++) {
      print('
    <tr id="TRow' . $i . $j . '">
      <td class="shubetu" id="TType' . $i . $j . '"><span id="WType' . $i . $j . '"></span></td>
      <td id="TTime' . $i . $j . '"><p2 id="THour' . $i . $j . '"></p2>:<p2 id="TMin' . $i . $j . '"></p2></td>
      <td class="Destination" id="TDes' . $i . $j . '"></td>
      <td class="cars" id="TCars' . $i . $j . '"></td>
      <td class="railnumber" id="TNum' . $i . $j . '"></td>
    </tr>
    ');
    }
  }
  print('
</table>
');
  if ($i % $column == 0) {
    print('</tableline>
  <tableline>');
  }
}
