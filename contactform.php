<?php

if (isset($_POST['submit'])){
	$name = $_POST['text'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$subject = $_POST['message'];
	$formcontent=" From: $name \n Email: $email \n Message: $message";
	$recipient = "provozin99@gmail.com";

	$mailheader = "From: $email \r\n";
	mail($recipient, 'Email from gitresume', $formcontent, $mailheader) or die("Error!");
	echo "Thank You!";
?>