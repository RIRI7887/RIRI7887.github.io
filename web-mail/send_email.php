<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

require 'vendor/autoload.php';

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    // Email details
    //$to = "Erich@Delanosolutions.Co.Za";
    $to = "harilalariri@gmail.com";
    $subject = "New Contact Us Message from $name";
    $body = "You have received a new message from your website contact form.\n\n".
            "Here are the details:\n".
            "Name: $name\n".
            "Email: $email\n".
            "Phone: $phone\n".
            "Message:\n$message";

    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->isSMTP();                                    // Set mailer to use SMTP
        $mail->Host = $_ENV['SMTP_HOST'];                   // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                             // Enable SMTP authentication
        $mail->Username = $_ENV['SMTP_USER'];               // SMTP username
        $mail->Password = $_ENV['SMTP_PASS'];               // SMTP password
        $mail->SMTPSecure = 'tls';                          // Enable TLS encryption, `ssl` also accepted
        $mail->Port = $_ENV['SMTP_PORT'];                   // TCP port to connect to

        //Recipients
        $mail->setFrom($email, $name);
        $mail->addAddress($to);                             // Add a recipient

        // Content
        $mail->isHTML(false);                               // Set email format to plain text
        $mail->Subject = $subject;
        $mail->Body    = $body;

        $mail->send();
        echo 'Message has been sent successfully!';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Invalid request";
}
?>
