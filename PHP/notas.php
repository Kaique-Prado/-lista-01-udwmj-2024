<?php
    $notas = $_POST['notas'];
    
    $notas100 = floor($notas / 100);
    $notas50 = floor(($notas % 100) / 50);
    $notas10 =  floor(($notas % 50) / 10);
    $notas1 = $notas % 10;

    echo "Suas notas: " . $notas;
    echo "<br> Notas de cem: ";
    echo $notas100;
    echo "<br> Notas de cinquenta:";
    echo $notas50;
    echo "<br> Notas de dez:";
    echo $notas10;
    echo "<br> Notas de um:";
    echo $notas1;
    
    
?>