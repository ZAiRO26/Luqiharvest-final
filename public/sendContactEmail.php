<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Get POST data
$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'];
$email = $data['email'];
$message = $data['message'];
$phone = isset($data['phone']) ? $data['phone'] : '';
$quantity = isset($data['quantity']) ? $data['quantity'] : '';
$purpose = isset($data['purpose']) ? $data['purpose'] : '';
$time = date('Y-m-d H:i:s');

// SMTP configuration (replace with your Hostinger SMTP details)
$mailHost = 'smtp.hostinger.com';
$mailUsername = 'contact@luqiharvest.com';
// TODO: Replace the placeholder below with your actual SMTP password before uploading to Hostinger
$mailPassword = 'REPLACE_WITH_YOUR_ACTUAL_SMTP_PASSWORD'; // <-- Set your real password here
$mailPort = 465; // or 587 for TLS

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = $mailHost;
    $mail->SMTPAuth = true;
    $mail->Username = $mailUsername;
    $mail->Password = $mailPassword;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Use ENCRYPTION_STARTTLS for port 587
    $mail->Port = $mailPort;

    // Email to site owner (plain text)
    $mail->setFrom($mailUsername, 'Luqi Harvest');
    $mail->addAddress($mailUsername); // Send to yourself
    if (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $mail->addReplyTo($email, $name);
    }
    $mail->isHTML(false);
    $mail->Subject = 'New Contact Form Submission';
    $mail->Body = "A message by $name has been received. Kindly respond at your earliest convenience.\n\n👤\n$name\n$time\nEmail: $email\n\nPhone: $phone\n\nQuantity Required: $quantity\n\nPurpose of Contact: $purpose\n\nMessage:\n$message\n";
    $mail->send();

    // Auto-response to customer (HTML with logo)
    $mail->clearAddresses();
    $mail->clearReplyTos();
    $mail->addAddress($email, $name);
    $mail->isHTML(true);
    $mail->Subject = 'Thank you for contacting Luqi Harvest!';
    $logoUrl = 'https://luqiharvest.com/logo1.jpg';
    $htmlBody = <<<EOD
<!DOCTYPE html>
<html>
  <body style="font-family: Verdana, Geneva, sans-serif; background: #f6f6f6; margin:0; padding:0;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 40px auto; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px #eee;">
      <tr>
        <td style="background: #fff; text-align: center; padding: 24px;">
          <img src=\"$logoUrl\" alt=\"Luqi Harvest\" style="max-width: 120px; margin-bottom: 12px;">
        </td>
      </tr>
      <tr>
        <td style="padding: 24px;">
          <h2 style="color: #388e3c;">Thank you for contacting Luqi Harvest!</h2>
          <p>Hi $name,</p>
          <p>
            We appreciate your message and will get back to you soon.<br>
            Here’s what you sent us:
          </p>
          <div style="background: #e8f5e9; border-left: 4px solid #388e3c; margin: 16px 0; padding: 12px;">
            $message
          </div>
          <p>
            Warm regards,<br>
            <strong>Luqi Harvest Team</strong>
          </p>
        </td>
      </tr>
      <tr>
        <td style="background: #f1f1f1; color: #888; text-align: center; padding: 12px;">
          <small>This is an automated email. For urgent queries, call +91 81224 29668.</small>
        </td>
      </tr>
    </table>
  </body>
</html>
EOD;
    $mail->Body = $htmlBody;
    $mail->send();

    echo json_encode(['status' => 'success']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => $mail->ErrorInfo]);
}
?> 