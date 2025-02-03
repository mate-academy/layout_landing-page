<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    header('Content-Type: application/json'); // Встановлення JSON-заголовка

    // Отримання даних з форми та базова валідація
    $name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : "";
    $phone = isset($_POST['phone']) ? htmlspecialchars($_POST['phone']) : "";
    $email = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) : "";
    $address = isset($_POST['address']) ? htmlspecialchars($_POST['address']) : "";
    $date = isset($_POST['date']) ? htmlspecialchars($_POST['date']) : "";
    $time = isset($_POST['time']) ? htmlspecialchars($_POST['time']) : "";
    $services = isset($_POST['services']) ? explode(', ', $_POST['services']) : [];

    // Перевірка, чи всі необхідні поля заповнені
    if (!$name || !$phone || !$email || !$address || !$date || !$time || empty($services)) {
        echo json_encode(["status" => "error", "message" => "Please fill in all required fields."]);
        exit;
    }

    // Формування списку вибраних послуг
    $servicesList = "<ul>";
    foreach ($services as $service) {
        $servicesList .= "<li>" . htmlspecialchars($service) . "</li>";
    }
    $servicesList .= "</ul>";

    // Email адміністратора
    $adminEmail = "booking@family-cleaning-co.com";
    $adminSubject = "New Cleaning Booking from $name";

    // Формування email для адміністратора
    $adminMessage = "
    <html>
    <head>
    <title>New Cleaning Booking</title>
    </head>
    <body>
    <h2>Booking Details</h2>
    <p><strong>Name:</strong> $name</p>
    <p><strong>Phone:</strong> $phone</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Address:</strong> $address</p>
    <p><strong>Preferred Date:</strong> $date</p>
    <p><strong>Preferred Time:</strong> $time</p>
    <p><strong>Selected Services:</strong> $servicesList</p>
    </body>
    </html>
    ";

    // Заголовки email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: Family Cleaning Co. <no-reply@family-cleaning-co.com>" . "\r\n";

    // Відправка email адміністратору
    $adminMailSent = mail($adminEmail, $adminSubject, $adminMessage, $headers);

    if ($adminMailSent) {
        // Формування email для клієнта
        $userSubject = "Booking Confirmation";
        $userMessage = "
        <html>
        <head>
        <title>Booking Confirmation</title>
        </head>
        <body>
        <h2>Thank you for your booking!</h2>
        <p>Dear $name,</p>
        <p>We have received your booking request with the following details:</p>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Address:</strong> $address</p>
        <p><strong>Preferred Date:</strong> $date</p>
        <p><strong>Preferred Time:</strong> $time</p>
        <p><strong>Selected Services:</strong> $servicesList</p>
        <p>We will contact you shortly to confirm your booking.</p>
        <p>Best regards,<br>Family Cleaning Co.</p>
        </body>
        </html>
        ";

        // Заголовки email для клієнта
        $userHeaders = "MIME-Version: 1.0" . "\r\n";
        $userHeaders .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $userHeaders .= "From: Family Cleaning Co. <no-reply@family-cleaning-co.com>" . "\r\n";

        // Відправка email клієнту
        $userMailSent = mail($email, $userSubject, $userMessage, $userHeaders);

        if ($userMailSent) {
            echo json_encode([
                "status" => "success",
                "message" => "<h2>Thank You for Your Booking!</h2>
                              <p>We have received your request and will contact you shortly to confirm your booking and discuss any details.</p>
                              <p>Have a great day!</p>"
            ]);
        } else {
            // Логування помилки у файл, якщо клієнтський email не надісланий
            file_put_contents("log.txt", "[" . date("Y-m-d H:i:s") . "] Error sending email to user ($email)\n", FILE_APPEND);
            echo json_encode(["status" => "error", "message" => "Booking request was sent, but confirmation email failed."]);
        }
    } else {
        // Логування помилки у файл, якщо email адміністратору не надісланий
        file_put_contents("log.txt", "[" . date("Y-m-d H:i:s") . "] Error sending email to admin ($adminEmail)\n", FILE_APPEND);
        echo json_encode(["status" => "error", "message" => "Failed to send booking request."]);
    }
} else {
    header('Content-Type: application/json');
    echo json_encode(["status" => "invalid_request", "message" => "Invalid request method."]);
}
?>
