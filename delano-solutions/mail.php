<?php
// index.php
require 'vendor/autoload.php';
require 'jwt.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$config = include('config.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') { 
    $authHeader = $_SERVER['HTTP_AUTHORIZATION'];
    $jwt = str_replace('Bearer ', '', $authHeader); 
    $decoded = validateJWT($jwt);
    if (!$decoded) {
        http_response_code(401);
        echo json_encode(['message' => 'Unauthorized']);
        exit;
    }

    // Get the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
var_dump($_POST);die;
    // Save the contact information to the database
    try {
        $pdo = new PDO('mysql:host='.$config['db']['host'].';dbname='.$config['db']['dbname'], $config['db']['user'], $config['db']['pass']);
        $stmt = $pdo->prepare('INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)');
        $stmt->execute([$name, $email, $phone, $message]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['message' => 'Database error']);
        exit;
    }

    // Send the email
    $mail = new PHPMailer(true);
    try {
        $mail->setFrom($config['email']['from']);
        $mail->addAddress($config['email']['to']);
        $mail->isHTML(true);
        $mail->Subject = 'New Contact Message';
        $mail->Body    = "Name: $name<br>Email: $email<br>Phone: $phone<br>Message: $message";
        $mail->send();
        echo json_encode(['message' => 'Message sent successfully']);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['message' => 'Email error']);
    }
} else {
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed']);
}
