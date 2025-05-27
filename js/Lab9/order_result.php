
<!DOCTYPE html>
<html>
<head>
  <title>Результат замовлення</title>
</head>
<body>
  <h3>Ваше замовлення прийнято</h3>
  <?php
    $item = $_POST["item"];
    $material = $_POST["material"];
    $quantity = $_POST["quantity"];
    echo "Замовлено виріб - " . $item . "<br>";
    echo "Матеріал - " . $material . "<br>";
    echo "Кількість - " . $quantity;
  ?>
</body>
</html>
