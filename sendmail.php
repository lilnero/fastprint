<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'PHPMailer/src/Exception.php';
  require 'PHPMailer/src/PHPMailer.php';

  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('ru','phpmailer/language');
  $mail->isHTML(true);


  $mail->setFrom('gribovskijvladimir0@gmail.com','От меня');
  $mail->addAddress('gribovskijvladimir0@gmail.com');
  $mail->Subject = 'FastPrint.com';

  $body = '<h1>FastPrint.com</h1>';
  if(trim(!empty($_POST['title']))){
    $body.='<p><strong>Услуга:</strong> '.$_POST['title'].'</p>';
  }

  if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
  }

  if(trim(!empty($_POST['tel']))){
    $body.='<p><strong>Телефон:</strong> '.$_POST['tel'].'</p>'; 
  }

  if(trim(!empty($_POST['email']))){
    $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>'; 
  }
    
  if(trim(!empty($_POST['size']))){
    $body.='<p><strong>Размер:</strong> '.$_POST['size'].'</p>';
  }
  
  if(trim(!empty($_POST['paper']))){
    $body.='<p><strong>Бумага:</strong> '.$_POST['paper'].'</p>';
  }

  if(trim(!empty($_POST['double-sided']))){
    $body.='<p><strong>Двухсторонняя:</strong> '.$_POST['double-sided'].'</p>';
  }

  if(trim(!empty($_POST['color']))){
    $body.='<p><strong>Цветная:</strong> '.$_POST['color'].'</p>';
  }
  
  if(trim(!empty($_POST['count']))){
    $body.='<p><strong>Количество:</strong> '.$_POST['count'].'</p>';
  }

  if(trim(!empty($_POST['delivery']))){
    $body.='<p><strong>Доставка:</strong> '.$_POST['delivery'].'</p>';
  }
  if(trim(!empty($_POST['message']))){
    $body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
  }

	if (!empty($_FILES['file']['name'][0])) {
	    foreach ($_FILES['file']['name'] as $key => $value) {
	        $out_files[] = array("name"=>$_FILES['file']['name'][$key], "tmp_name" => $_FILES['file']['tmp_name'][$key]);
	    }
	    $filesSend = true;
	} else {
	    $filesSend = false;
	}
	if ($filesSend) {
	    foreach ($out_files as $k=>$v) {
	        $mail->AddAttachment($out_files[$k]['tmp_name'], $out_files[$k]['name']);
	    }
	}
  
  $mail->Body = $body;

  if($mail->send()){
  $message = 'Спасибо, Ваш заказ отправлен! С вами свяжется наш менеджер!';
  }else{
    $message = 'Ошибка!';
  }

  $response = ['message' => $message];

  header('Content-type: application/json');
  echo json_encode($response);  
?>