<?php
require 'src/js/libs/mailer/Exception.php'
require 'src/js/libs/mailer/PHPMailer.php'
require 'src/js/libs/mailer/SMTP.php'

$name = $_POST['surname']
$phone = $_POST['phone']
$email = $_POST['email']
$comment = $_POST['comment']
$isPolicy = $_POST['isPolicy']

$mail = new PHPMailer();
$mail->isSMTP();
$mail->SMTPDebug = 2;
$mail->CharSet = "UTF-8";
$mail->SMTPAuth = true;

$mail->Host = 'smtp.yandex.ru';
$mail->Username = 'username';
$mail->Password = 'pass';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->setFrom('info@biomix.site', 'biomix');

$mail->addAddress($_POST["email"]);

$mail->isHTML(true);
$mail->Subject = 'Получить консультацию';
$mail->Body = 'Вы оставили заявку на получение персональной консультации';