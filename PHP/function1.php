<?php
//ボタンがクリックされた場合
//駅はfile.$filenumber.phpに登録されていなければならない
function exitfilejump($filenumber,$Astation){
    if (isset($_POST[$Astation])) {
        $test1 = $Astation;
        // 別のページにリダイレクト
        header('Location: index'.$filenumber.'.php?station=' . $test1);
        exit();
    }
}
//station=hogehogeが一致した場合
function Inisset($Astation){
    if($_GET['station']==$Astation){
      return true;
    }else{
      return false;
    }
  }
?>