<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    header('Content-Type: application/json'); // Встановлення JSON-заголовка

    // Отримання даних з форми
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $address = htmlspecialchars($_POST['address']);
    $date = htmlspecialchars($_POST['date']);
    $time = htmlspecialchars($_POST['time']);

    // Отримання вибраних послуг
    $services = isset($_POST['services']) ? explode(', ', $_POST['services']) : [];
    $servicesList = "<ul>";
    foreach ($services as $service) {
        $servicesList .= "<li>" . htmlspecialchars($service) . "</li>";
    }
    $servicesList .= "</ul>";

    // Ваша електронна адреса
    $to = "booking@family-cleaning-co.com";
    $subject = "New Cleaning Booking from $name";

    // Формування повідомлення для адміністратора
    $message = "
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

    // Заголовки для відправки HTML-листа
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: <$email>" . "\r\n";

    // Відправка листа адміністратору
    if (mail($to, $subject, $message, $headers)) {
        // Формування повідомлення для користувача
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

        // Заголовки для відправки HTML-листа користувачу
        $userHeaders = "MIME-Version: 1.0" . "\r\n";
        $userHeaders .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $userHeaders .= "From: <no-reply@family-cleaning-co.com>" . "\r\n";

        // Відправка листа користувачу
        mail($email, $userSubject, $userMessage, $userHeaders);

        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode(["status" => "error"]);
    }
} else {
    header('Content-Type: application/json');
    echo json_encode(["status" => "invalid_request"]);
}
?>
