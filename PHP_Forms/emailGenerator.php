<?php
// PHP_Forms/emailGenerator.php

function generateEmailHTML($name, $email, $message) {
    $emailContent = "
    <html>
        <head>
            <style>
                /* You can put email-specific styles here. */
                body {
                    font-family: Arial, sans-serif;
                }
            </style>
        </head>
        <body>
            <h2>New Message from Your Contact Form</h2>
            <p><strong>Name:</strong> {$name}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Message:</strong><br/> {$message}</p>
        </body>
    </html>";

    return $emailContent;
}
?>
