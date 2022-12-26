<?php


/*
 * ----------------------------------------------------------------------------------------
    Author        : Himas Rafeek
    Template Name : LKS - Resume, CV 1.0 - Responsive Bootstrap Template
    Version       : 1.0.0
    Author URI    : https://himasrafeek.com/about
 * ----------------------------------------------------------------------------------------
 */


// Checking if the request method is post
if($_SERVER['REQUEST_METHOD'] === 'POST'){

  if(isset($_POST['contact'])){

    // Place your Email Here
    $to = 'contact@himasrafeek.com';


    // Do not Edit This Unless you are a Developer
    $name = strip_tags($_POST['name']);
    $email = strip_tags($_POST['email']);
    $subject = strip_tags($_POST['subject']);
    $message = strip_tags($_POST['message']);

    $header = 'From '.$name .' Email '.$email;  
    $mail = mail($to,$subject, $message, $header);

    if($mail){
      header('Location: success.php?user='.$name);
    }else{
      $_SESSION['name'] = $name;
      $_SESSION['email'] = $email;
      $_SESSION['subject'] = $subject;
      $_SESSION['message'] = $message;
      header('Location: ./?error=1');
    }

  }

}else{
  header('Location: ./');
}