<?php
function JRATOSTable($i, $tablenums)
{
  print('
 <table class="CATOSTable" id="TATOSTable' . $i . '">
<caption class="Ctitle" id="kn' . $i . '"></caption>
    <tr>
      <th width="28%" id="HName' . $i . '"></th>
      <th width="15%" id="HType' . $i . '"></th>
      <th width="20%" id="HTime' . $i . '"></th>
      <th width="20%" id="HDes' . $i . '">行先</th>
      <th width="10%" id="HCars' . $i . '"></th>
      <th width="7%" class="HrailNumber" id="HrNumber' . $i . '">のりば</th>
    </tr>
  ');
  for ($j = 1; $j <= $tablenums[$i - 1]; $j++) {
    print('
    <tr id="TRow' . $i . $j . '">
      <td class="CName" id="TName' . $i . $j . '"><span id="WName' . $i . $j . '"></td>
      <td class="shubetu" id="TType' . $i . $j . '"><span id="WType' . $i . $j . '"></span></td>
      <td id="TTime' . $i . $j . '"><p2 id="THour' . $i . $j . '"></p2>:<p2 id="TMin' . $i . $j . '"></p2></td>
      <td class="Destination" id="TDes' . $i . $j . '"></td>
      <td class="cars" id="TCars' . $i . $j . '"></td>
      <td class="railnumber" id="TNum' . $i . $j . '"></td>
    </tr>
    ');
  }
  print('
</table>
');
  if ($i % 2 == 0) {
    print('</tableline>
  <tableline>');
  }
}
function JRE_STable($i, $tablenums,$detaillength)
{
  print('
  <table class="STable" id="TATOSTable' . $i . '">
<caption class="Ctitle"><showing><p2 id="Tstation' . $i . '"></p2><p2 id="kn' . $i . '"></p2></showing></caption>
    <tr>
    ');
  print('
      <th width="20%">列車名</th>
      <th width="10%">番号</th>
      <th width="15%">時刻</th>
      <th width="20%" class="HDes">行先</th>
      <th width="5%">番線</th>
      <th width="30%">記事</th>
    </tr>
  ');
  for ($j = 1; $j <= $tablenums[$i - 1]; $j++) {
    print('
    <tr id="TLine' . $i . $j . '">
      <td class="shubetu' . $i . $j . '" id="TType' . $i . $j . '"><p2 id="WType' . $i . $j . '"></p2></td>
      <td class="name" id="TName' . $i . $j . '"><p2 id="WName' . $i . $j . '"></p2></td>
      <td class="Ctime" id="TTime' . $i . $j . '"><p2 id="THour' . $i . $j . '"></p2>:<p2 id="TMin' . $i . $j . '"></p2></td>
      <td class="Destination" id="TDes' . $i . $j . '"></td>
      <td class="railnumber" id="TNum' . $i . $j . '"></td>
      <td class="topic" id="Ttopic' . $i . $j . '"></td>
    </tr>
     ');
    if ($detaillength >= $j) {
      print('
    <tr>
      <td><p3 class="CDetailtitle" id="TDetailtitle' . $i . $j . '"></p3></td>
      <td class="CDetail" colspan="5"><p2 class="news-banner__content" id="TDetail' . $i . $j . '"></p2></td>
      </tr>
      ');
    }
  }
  print('
</table>
');
  if ($i % 2 == 0) {
    print('</tableline>
<tableline>');
  }
}
