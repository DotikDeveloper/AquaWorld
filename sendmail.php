<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

// Set mail from

// $mail->setFrom('info@aquaworld63.ru', 'AquaWorld63.ru'); // от кого
// $mail->addAddress('info@aquaworld63.ru');     // кому
$mail->setFrom('dotikdeveloper@gmail.com', 'AquaWorld63.ru'); // от кого
$mail->addAddress('dotikdeveloper@gmail.com');     // кому
$mail->Subject = 'Запрос на расчет калькулятора с сайта AquaWorld63.ru';

// Тело письма
$body = '<h1>Запрос через форму калькулятора на индивидуальный расчет</h1>>';

if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['email']))){
    $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
}
if(trim(!empty($_POST['tel']))){
    $body.='<p><strong>Телефон:</strong> '.$_POST['tel'].'</p>';
}

$mail->Body = $body;

//отправляем

if (!$mail->send()) {
    $message = 'Ошибка отправки сообщения. Попробуйте снова.';
} else {
    $message = 'Данные отправлены!';
}

$response = ['message' => $message];

header('Content-Type: application/json');
echo json_encode($response);

?>