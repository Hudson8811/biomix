<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'mailer/Exception.php';
require 'mailer/PHPMailer.php';
require 'mailer/SMTP.php';

$name = $_POST['surname'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$comment = $_POST['comment'];
$isPolicy = $_POST['isPolicy'];

$mail = new PHPMailer();
$mail->isSMTP();
$mail->CharSet = "UTF-8";
$mail->SMTPAuth = true;

$mail->Host = 'smtp.yandex.ru';
$mail->Username = 'user';
$mail->Password = 'pass';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->setFrom('info@biomix.site', 'biomix');

$mail->addAddress('info@biomix.site');

$mail->isHTML(true);
$mail->Subject = 'Получить консультацию';
$mail->Body = 'Заявка на получение персональной консультации';
$mail->send();