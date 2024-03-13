<?php
function JRWSTable($i, $tablenums, $column = 2)
{
  print('
 <table id="TTable' . $i . '">');
  print('
<caption class="Ctitle"><p2 id="Tstation' . $i . '"></p2><p2 id="kn' . $i . '"></p2></caption>
    <tr>
      <th width="25%" colspan="2">列車名</th>
      <th width="15%">時刻</th>
      <th width="20%">行先</th>
      <th width="25%">自由席</th>
      <th width="10%">編成</th>
      <th width="5%">番線</th>
    </tr>
  ');
  //n番目に発車する列車までを表示
  for ($j = 1; $j <= $tablenums[$i - 1]; $j++) {
    print('
    <tr id="TTLine' . $i . $j . '"><p10 id="TTLineContents' . $i . $j . '"></p10>
      <td class="shubetu" id="TType' . $i . $j . '"><span id="WType' . $i . $j . '"></span></td>
      <td class="name" id="TName' . $i . $j . '"><span id="WName' . $i . $j . '"></span></td>
      <td class="Ctime" id="TTime' . $i . $j . '"><p2 id="THour' . $i . $j . '"></p2>:<p2 id="TMin' . $i . $j . '"></p2></td>
      <td class="Destination" id="TDes' . $i . $j . '"><span id="WDes' . $i . $j . '"></span></td>
      <td id="TJiyuseki' . $i . $j . '"></td>
      <td class="CDetail" id="TDetail' . $i . $j . '"></td>
      <td class="railnumber" id="TNum' . $i . $j . '"></td>
    </tr>
    ');
  }
  print('
        </table>
');
  if ($i % 2 == 0) {
    print('
        </tableline>
  <tableline id="tableline' . $i . '">');
  }
}

function JRWZTable($i, $column)
{
  print('
 <table class="ZTable" id="TTable' . $i . '">');
  print('
<caption class="Ctitle"><p2 id="Tstation' . $i . '"></p2><p2 id="kn' . $i . '"></p2></caption>
    <tr>
    ');
  print('
      <th width="10%">種別</th>
      <th width="32%" id="HName' . $i . '">列車名</th>
      <th width="20%">時刻</th>
      <th width="25%">行先</th>
      <th width="8%">番線</th>
    </tr>
  ');
  //n番目に発車する列車までを表示
  for ($j = 1; $j <= 3; $j++) {
    print('
    <tr id="TTLine' . $i . $j . '"><p10 id="TTLineContents' . $i . $j . '"></p10>
      <td class="shubetu" id="TType' . $i . $j . '"><span id="WType' . $i . $j . '"></span></td>
      <td class="name" id="TName' . $i . $j . '"><span id="WName' . $i . $j . '"></span></td>
      <td class="Ctime" id="TTime' . $i . $j . '"><p2 id="THour' . $i . $j . '"></p2>:<p2 id="TMin' . $i . $j . '"></p2></td>
      <td class="Destination" id="TDes' . $i . $j . '"><span id="WDes' . $i . $j . '"></span></td>
      <td class="railnumber" id="TNum' . $i . $j . '"></td>
    </tr>
    ');
  }
  print('
        </table>
');
  if ($i % $column == 0) {
    print('
                </tableline>
          <tableline id="tableline' . $i . '">');
  }
}
function JRWSTable2($i, $tablenums, $detaillength, $column = 2)
{
  print('
 <table class="STable" id="TTable' . $i . '">');
  print('
<caption class="Ctitle"><p2 id="Tstation' . $i . '"></p2><p2 id="kn' . $i . '"></p2></caption>
    <tr>
      <th width="25%" colspan="2">種別</th>
      <th width="15%">時刻</th>
      <th width="20%">行先</th>
      <th width="15%">のりば</th>
      <th width="25%">編成/自由席/遅れ</th>
    </tr>
  ');
  //n番目に発車する列車までを表示
  for ($j = 1; $j <= $tablenums[$i - 1]; $j++) {
    print('
    <tr id="TTLine' . $i . $j . '"><p10 id="TTLineContents' . $i . $j . '"></p10>
      <td width="50%" class="shubetu" id="TType' . $i . $j . '"><span id="WType' . $i . $j . '"></span></td>
      <td width="50%" class="name" id="TName' . $i . $j . '"><span class="Wname" id="WName' . $i . $j . '"></span></td>
      <td class="Ctime" id="TTime' . $i . $j . '"><p2 id="THour' . $i . $j . '"></p2>:<p2 id="TMin' . $i . $j . '"></p2></td>
      <td class="Destination" id="TDes' . $i . $j . '"><span id="WDes' . $i . $j . '"></span></td>
      <td class="railnumber" id="TNum' . $i . $j . '"></td>
      <td class="CDetail" id="TExplain' . $i . $j . '"></td>
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
  if ($i % $column == 0) {
    print('
        </tableline>
  <tableline id="tableline' . $i . '">');
  }
}
