<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $name = htmlspecialchars($_POST['name']);
    $city = htmlspecialchars($_POST['city']);
    $message = htmlspecialchars($_POST['message']);

    // Адрес получателя
    $to = "your-email@example.com"; // Замените на ваш email

    // Тема письма
    $subject = "Контактная форма: $name";

    // Сообщение
    $body = "
    Имя: $name\n
    Город: $city\n
    Сообщение: \n$message
    ";

    // Заголовки письма
    $headers = "From: no-reply@example.com" . "\r\n" .
               "Reply-To: no-reply@example.com" . "\r\n" .
               "Content-Type: text/plain; charset=UTF-8";

    // Отправляем письмо
    if (mail($to, $subject, $body, $headers)) {
        echo "Success.";
    } else {
        echo "Error.";
    }
}
?>
