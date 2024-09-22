document.getElementById("yesButton").addEventListener("click", function() {
    // Ocultar los botones iniciales
    document.getElementById("yesButton").style.display = "none";
    document.getElementById("noButton").style.display = "none";
    
    // Mostrar el canvas y comenzar la animación de la flor
    const canvas = document.getElementById("flowerCanvas");
    const ctx = canvas.getContext("2d");
    canvas.style.display = "block";
    
    drawFlower(ctx, function() {
        // Mostrar el tercer botón una vez que termine la animación
        document.getElementById("nextButton").style.display = "inline-block";
    });
});

document.getElementById("noButton").addEventListener("click", function() {
    // Mostrar mensaje triste si se selecciona "No"
    document.getElementById("message").innerText = "No pensé que escogerías esto...bueno... :'C";
});

document.getElementById("nextButton").addEventListener("click", function() {
    // Mostrar mensaje especial
    document.getElementById("message").innerText = "Que bueno que te gusten las flores, programé esta para ti owo, espero que te guste mucho uwu, (Me costó mucho x'D), cuídate mucho mi cielo, te amo y toma mucha agua, espero que te esté yendo bien y que no te sientas mal <3 Atte: Tito";
});

// Función para dibujar la flor con hojas más gruesas en forma de mango
function drawFlower(ctx, callback) {
    let step = 0;

    function animate() {
        if (step === 0) {
            // Dibujar el tallo
            ctx.beginPath();
            ctx.moveTo(200, 400);
            ctx.lineTo(200, 250);
            ctx.strokeStyle = "#228B22"; // Color verde del tallo
            ctx.lineWidth = 5;
            ctx.stroke();
            step++;
        } else if (step === 1) {
            // Dibujar una hoja a la izquierda, más gruesa y en forma de mango
            ctx.beginPath();
            ctx.moveTo(200, 280); // Posicionar más arriba
            ctx.bezierCurveTo(170, 290, 140, 320, 180, 350); // Hacer la hoja más curva y ancha
            ctx.bezierCurveTo(160, 310, 180, 290, 200, 280); // Volver al tallo
            ctx.fillStyle = "#228B22"; // Color verde de la hoja
            ctx.fill();
            step++;
        } else if (step === 2) {
            // Dibujar una hoja a la derecha, más gruesa y en forma de mango
            ctx.beginPath();
            ctx.moveTo(200, 280); // Posicionar más arriba
            ctx.bezierCurveTo(230, 290, 260, 320, 220, 350); // Hacer la hoja más curva y ancha
            ctx.bezierCurveTo(240, 310, 220, 290, 200, 280); // Volver al tallo
            ctx.fillStyle = "#228B22"; // Color verde de la hoja
            ctx.fill();
            step++;
        } else if (step === 3) {
            // Dibujar los pétalos de la flor alrededor del centro
            const petalCount = 8; // Número de pétalos
            const petalLength = 70; // Longitud de los pétalos
            const petalWidth = 20; // Ancho de los pétalos
            ctx.fillStyle = "#FFDA03"; // Amarillo para los pétalos

            for (let i = 0; i < petalCount; i++) {
                const angle = (i * Math.PI * 2) / petalCount; // Ángulo para distribuir los pétalos
                const x = 200 + Math.cos(angle) * 30; // Posición del centro
                const y = 200 + Math.sin(angle) * 30;

                // Dibujar pétalo elíptico alargado con punta redondeada
                ctx.beginPath();
                ctx.ellipse(x, y, petalWidth, petalLength, angle, 0, Math.PI * 2);
                ctx.fill();
            }
            step++;
        } else if (step === 4) {
            // Dibujar el centro de la flor (café) al final y en frente
            ctx.beginPath();
            ctx.arc(200, 200, 20, 0, Math.PI * 2); // Centro más pequeño
            ctx.fillStyle = "#8B4513"; // Color café para el centro
            ctx.fill();

            step++;
            callback(); // Llamar callback cuando la flor esté terminada
        }

        if (step <= 4) {
            setTimeout(animate, 1000); // Controla la velocidad de la animación
        }
    }

    animate();
}
