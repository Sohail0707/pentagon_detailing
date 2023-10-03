<?php
// PHP_Forms/formHandler.php

// Load required configurations and helper functions
require_once 'config.php';            // Load email configuration details
require_once 'emailGenerator.php';    // Load email HTML generator function

// Check if the server request is a POST request
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Sanitize and fetch form inputs
    $name = strip_tags(trim($_POST["user_name"]));
    $email = filter_var(trim($_POST["user_email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["user_message"]);

    // Validate form inputs
    if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Please complete the form and try again.";
        exit;
    }

    // Setup Swift Mailer configurations
    require_once './vendor/autoload.php';  // Load Swift Mailer library
    $transport = (new Swift_SmtpTransport(SMTP_HOST, SMTP_PORT))
        ->setUsername(SMTP_USERNAME)
        ->setPassword(SMTP_PASSWORD);
    $mailer = new Swift_Mailer($transport);

    // Generate email content using the HTML generator function
    $emailHTML = generateEmailHTML($name, $email, $message);

    // Configure the email message headers and body
    $swiftMessage = (new Swift_Message('New message from your contact form'))
        ->setFrom(['noreply@yourdomain.com' => 'PENTAGON DETAILING'])
        ->setReplyTo($email, $name)  // Make sure replies go back to the user
        ->setTo(COMPANY_EMAIL)
        ->setBody($emailHTML, 'text/html');  // Set content type to HTML

    // Attempt to send the email
    $result = $mailer->send($swiftMessage);

    // Provide feedback to user based on email sending outcome
    if ($result) {
        echo "Thank you for your message!";
    } else {
        echo "Oops! Something went wrong, please try again.";
    }
}
?>
