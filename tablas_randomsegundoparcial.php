<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tarea1</title>
</head>
<body>
  <h1>Arreglo generado</h1>
<table border = "1">
<?php
  $arreglo = array_fill(0, 20, 0); 

  for ($i = 0; $i < 20; $i++) {
    $arreglo[$i] = rand(1,100);
  }

  // Imprimir el arreglo en forma de tabla
  echo "<tr>";
  for ($i = 0; $i < 20; $i++) {
    echo "<th style='background-color: #009fff; color: #ffffff'>Elemento", $i, "</th>";
  }
  /*echo "<th>Elemento 0</th>";
  echo "<th>Elemento 1</th>";
  echo "<th>Elemento 2</th>";
  echo "<th>Elemento 3</th>";
  echo "<th>Elemento 4</th>";
  echo "<th>Elemento 5</th>";
  echo "<th>Elemento 6</th>";
  echo "<th>Elemento 7</th>";
  echo "<th>Elemento 8</th>";
  echo "<th>Elemento 9</th>";*/
  echo "</tr>";

  // Imprimir los elementos del arreglo desde la última posición hasta la primera
  echo "<tr>";
  for ($i = 0; $i < 20; $i++) {
    echo "<th style='background-color: #84d1ff;'>",$arreglo[$i], "</th>";
  }
  echo "</tr>";
?>
</table>
</body>
</html>