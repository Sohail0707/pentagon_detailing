<?php
// PHP_Forms/formHandler.php

require_once 'config.php';  // Include the email config file

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["user_name"]));
    $email = filter_var(trim($_POST["user_email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["user_message"]);

    if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Please complete the form and try again.";
        exit;
    }

    // Include and setup Swift Mailer
    require_once './vendor/autoload.php';

    $transport = (new Swift_SmtpTransport(SMTP_HOST, SMTP_PORT))
        ->setUsername(SMTP_USERNAME)
        ->setPassword(SMTP_PASSWORD);

    $mailer = new Swift_Mailer($transport);

    $swiftMessage = (new Swift_Message('New message from your contact form'))
        ->setFrom($email)
        ->setTo(COMPANY_EMAIL)
        ->setBody("Name: $name\nEmail: $email\nMessage: $message");

    $result = $mailer->send($swiftMessage);

    if ($result) {
        echo "Thank you for your message!";
    } else {
        echo "Oops! Something went wrong, please try again.";
    }
}
?>
