<?php


/*
 * ----------------------------------------------------------------------------------------
    Author        : Himas Rafeek
    Template Name : LKS - Resume, CV 1.0 - Responsive Bootstrap Template
    Version       : 1.0.0
    Author URI    : https://himasrafeek.com/about
 * ----------------------------------------------------------------------------------------
 */

  
?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>LKS - 1.0.0 Docs</title>

  <style>
  
  body{
    height: 100%;
    color: #333;
    font-family: 'roboto',sans-serif;
    font-size: 18px;
  }
  
  .container{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 800px;
    margin: 0 auto;
    flex-wrap: wrap;
  }

  *{
    margin: 0;
  }

  

  </style>

</head>
<body>


  <div class="container">
    <h1>

<?php

// Checking if the request method is get
  if (isset($_GET['user'])   && $_GET['user'] !== '') {
    $name = $_GET['user'];
    echo "Thank you for contacting me $name, you will get notified within 24 hours";
  }else{
  header('Location: ./');
  }



?>

    </h1>
  </div>
  

  <script>
  
  setTimeout(function() {

    window.location.href = './';
    
  }, 2500);

  </script>
  
</body>
</html>