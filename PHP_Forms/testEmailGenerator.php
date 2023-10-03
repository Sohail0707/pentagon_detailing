<?php

include_once __DIR__ . '/emailGenerator.php';

// Test data simulating different form submissions
$data = [
	'formData' => [
		['name' => 'firstName', 'value' => '"double" \'single\' Hung'],
		['name' => 'name', 'value' => 'Hung'],
		['name' => 'service', 'value' => 'Premium'],
		['name' => 'phone', 'value' => ''], // Empty field will be excluded
		['name' => 'lastName', 'value' => 'Do'], // Trailing and leading spaces will be removed
		['name' => 'eopShowroom', 'value' => 'eopShowroom'],
		['name' => 'email', 'value' => 'test@test.net'],
		['name' => 'message', 'value' => 'Hi there!<script>alert(\'hi\');</script>']
	]
];

$emailGenerator = new EmailGenerator($data);

// Display the generated email content
$output = $emailGenerator->generate();
echo htmlspecialchars($output, ENT_QUOTES, 'UTF-8');
