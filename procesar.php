<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nombre = htmlspecialchars($_POST['nombre'] ?? '');
    $edad = (int)($_POST['edad'] ?? 0);
    $color = $_POST['color'] ?? 'negro';

    if ($color === "blanco") {
        $bg = "#f9fafb";    
        $card = "#ffffff";  
        $text = "#111";     
        $accent = "#111";   
    } else {
        $bg = "#0a0a0a";    
        $card = "#1a1a1a";  
        $text = "white";    
        $accent = "#333";   
    }

    echo "<style>
        body {
            background: $bg;
            color: $text;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .card {
            background: $card;
            padding: 40px;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            width: 350px;
        }
        h2 { margin-top: 0; }
        b { color: " . ($color === 'blanco' ? '#000' : '#fff') . "; text-decoration: underline; }
    </style>";

    if (!empty($nombre) && $edad > 0) {
        echo "<div class='card'>";
        echo "<h2>¡Felicidades, $nombre! 👋</h2>";
        echo "<p>Con <b>$edad años</b>, acabas de adquirir un vehículo increíble.</p>";
        echo "<hr style='border: 0; border-top: 1px solid rgba(128,128,128,0.2); margin: 20px 0;'>";
        echo "<p>Tu nuevo <b>Mercedes Benz</b> color <b>$color</b>Iniciando proceso de envio.</p>";
        echo "<br><small>Gracias por tu compra.</small>";
        echo "</div>";
    } else {
        echo "<div class='card' style='border: 1px solid red;'>";
        echo "<h2>Error en los datos</h2>";
        echo "<p>Por favor, regresa y completa el formulario correctamente.</p>";
        echo "</div>";
    }
}
?>