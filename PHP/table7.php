<?php
function JRCZTable($i,$tablenums,$column){
    print('
 <table id="TTable' . $i . '">');
    print('
<caption class="Ctitle"><showing><p2 id="Tstation' . $i . '"></p2><p2 id="kn' . $i . '"></p2></showing></caption>
    <tr>
      <th width="30%">種別</th>
      <th width="20%">発車時刻</th>
      <th width="30%">行先</th>
      <th width="5%">のりば</th>
      <th width="15%"></th>
    </tr>
  ');
      for ($j = 1; $j <= $tablenums[$i-1]; $j++) {
        print('
    <tr>
      <td class="shubetu" id="TType' . $i . $j . '"><span id="WType' . $i . $j . '"></span></td>
      <td id="TTime' . $i . $j . '"><p2 id="THour' . $i . $j . '"></p2>:<p2 id="TMin' . $i . $j . '"></p2></td>
      <td class="Destination" id="TDes' . $i . $j . '"></td>
      <td class="railnumber" id="TNum' . $i . $j . '"></td>
    </tr>
    ');
      }
      print('
</table>
');
      if ($i % $column == 0) {
        print('</tableline>
  <tableline>');
      }
    }
function JRCSTable($i,$tablenums,$column){
    print('
 <table id="TTable' . $i . '">');
      print('
<caption class="Ctitle"><p2 id="Tstation' . $i . '"></p2><p2 id="kn' . $i . '"></p2></caption>
    <tr>
      <th width="15%">列車名</th>
      <th width="10%">列車番号</th>
      <th width="15%">時刻</th>
      <th width="20%">行先</th>
      <th width="10%">のりば</th>
      <th width="30%"></th>
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
      <td class="CDetail" id="TDetail' . $i . $j . '"></td>
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
    ?>
