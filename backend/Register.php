<?php
header("Access-Control-Allow-Origin: http://localhost:5173/");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$host = "localhost";
$user = "root";
$password = "";
$data_base = "dancesheduler";

$connect = new mysqli($host, $user, $password, $data_base);

if ($connect->connect_errno) {
    die("Conexion fallida" . $connect->connect_errno);
} else {
    echo "conectado";
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    $name = strtolower($data['name']) ?? null;
    $surname = strtolower($data['surname']) ?? null;
    $identification = $data['identification'] ?? null;
    $phone = $data['phone'] ?? null;
    $gender = strtolower($data['gender']) ?? null;
    $email = strtolower($data['email']) ?? null;
    $password = $data['password'] ?? null;
    $rol = $data['rol'] ?? null;

    if ($name && $surname && $identification && $phone && $gender && $email && $password) {
        try {
            $sql = "INSERT INTO estudiantes (nombres, apellidos, identificacion, telefono, genero, correo, contrasena) VALUES (?, ?, ?, ?, ?, ?, ?)";
            $stmt = $connect->prepare($sql);
            $stmt->bind_param("ssiisss", $name, $surname, $identification, $phone, $gender, $email, $password);
            $stmt->execute();
            $stmt->close();

            $sql2 = "INSERT INTO login (correo, contrasena, rol) VALUES (?, ?, ?)";
            $stmt = $connect->prepare($sql2);
            $stmt->bind_param("sss", $email, $password, $rol);
            $stmt->execute();
            $stmt->close();
        } catch (Exception $e) {
            echo "Error al guardar los datos:" . $e->getMessage();
        }
    } else {
        echo "Faltan datos";
    }
}

$connect->close();
