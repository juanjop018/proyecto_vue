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
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    $email = $data['email'] ?? null;
    $password = $data['password'] ?? null;

    if ($email && $password) {
        try {
            $sql = "SELECT correo, contrasena, rol FROM login WHERE correo = ? AND contrasena = ?";
            $stmt = $connect->prepare($sql);
            $stmt->bind_param("ss", $email, $password);
            $stmt->execute();
            $result = $stmt->get_result();
            $row = $result->fetch_assoc();

            if ($result->num_rows > 0) {
                if ($row['rol'] == "estudiante") {
                    $srol = "estudiante";
                    echo $srol;
                } elseif ($row['rol'] == "administrador") {
                    $srol = "administrador";
                    echo $srol;
                } elseif ($row['rol'] == "profesor") {
                    $srol = "profesor";
                    echo $srol;
                }
            } else {
                $srol = "noresult";
                echo $srol;
            }

            $stmt->close();
        } catch (Exception $e) {
            echo "Error al buscar los datos:" . $e->getMessage();
        }
    } else {
        echo "Faltan datos";
    }
}

$connect->close();
