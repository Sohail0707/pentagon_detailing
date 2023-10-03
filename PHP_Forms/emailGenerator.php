<?php

final class EmailGenerator
{
    private $simplifiedFormData;
    private $arrayServiceFieldHTMLString = [];
    private $arrayGeneralFieldHTMLString = [];

    // Fields definition
    private const SERVICE_FIELDS = [
        'eipStarter', 'eipStandard', 'eipShowroom',
        'eopStandard', 'eopShowroom',
        'iopStandard', 'iopShowroom', 'iopAddon'
    ];

    private const GENERAL_FIELDS = [
        'firstName', 'name', 'lastName', 'email', 'phone', 'message', 'subject', 'service'
    ];

    private const SERVICE_HTML_MAP = [
        'eipStarter' => '<li style="color: #000000;"><strong>THE STARTER</strong> DETAIL</li>',
        // ... (Similar entries for other service fields)
    ];

    private $senderEmail = "Unknown";

    public function __construct($postData)
    {
        $this->simplifyPostData($postData);
    }

    private function simplifyPostData($postData)
    {
        if (isset($postData['formData'])) {
            $this->simplifiedFormData = array_column($postData['formData'], 'value', 'name');
        }
    }

    private function processServiceFields($fieldKey)
    {
        if (isset($this->simplifiedFormData[$fieldKey]) && $this->simplifiedFormData[$fieldKey] === $fieldKey) {
            $this->arrayServiceFieldHTMLString[] = self::SERVICE_HTML_MAP[$fieldKey];
        }
    }

    private function processGeneralFields($fieldKey)
    {
        $fieldValue = trim($this->simplifiedFormData[$fieldKey] ?? "");

        if (!empty($fieldValue)) {
            $safeOutput = $this->secureOutput($fieldValue);
            switch ($fieldKey) {
                case 'email':
                    $this->senderEmail = $safeOutput;
                    // ... (Continue for other fields as in your original method)
            }
        }
    }

    private function secureOutput($string)
    {
        return htmlspecialchars($string, ENT_QUOTES, 'UTF-8');
    }

    private function generateOutput()
    {
        $output = '';

        if (!empty($this->arrayServiceFieldHTMLString)) {
            $output .= '<p><strong>Services:</strong> </p><ul>';
            $output .= implode('', $this->arrayServiceFieldHTMLString);
            $output .= '</ul>';
        }

        if (!empty($this->arrayGeneralFieldHTMLString)) {
            $output .= implode('', $this->arrayGeneralFieldHTMLString);
        }

        return $output;
    }

    public function generate()
    {
        foreach (self::SERVICE_FIELDS as $field) {
            $this->processServiceFields($field);
        }

        foreach (self::GENERAL_FIELDS as $field) {
            $this->processGeneralFields($field);
        }

        return $this->generateOutput();
    }

    public function getFromEmail()
    {
        return $this->senderEmail;
    }
}
