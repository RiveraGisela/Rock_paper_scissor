

// Variables para las puntuaciones
let userScore = 0;
let cpuScore = 0;

// Función para jugar una ronda
function play(userChoice) {
    if (userScore >= 3 || cpuScore >= 3) {
        return; // Detener el juego si alguien ya alcanzó 3 puntos
    }

    const choices = ['CPU eligio piedra', 'CPU eligio papel', 'CPU eligio tijera'];
    const cpuChoice = choices[Math.floor(Math.random() * choices.length)];

    // Mostrar elecciones
    document.getElementById('user-choice').textContent = userChoice;
    document.getElementById('cpu-choice').textContent = cpuChoice;

    // Determinar el ganador de la ronda
    let roundResult = '';
    if (userChoice === cpuChoice) {
        roundResult = 'Empate';
    } else if (
        (userChoice === 'piedra' && cpuChoice === 'tijera') ||
        (userChoice === 'papel' && cpuChoice === 'piedra') ||
        (userChoice === 'tijera' && cpuChoice === 'papel')
    ) {
        userScore++;
        roundResult = 'Ganaste esta ronda';
    } else {
        cpuScore++;
        roundResult = 'La CPU ganó esta ronda';
    }

    // Actualizar puntuaciones
    document.getElementById('user-score').textContent = userScore;
    document.getElementById('cpu-score').textContent = cpuScore;

    // Mostrar el resultado de la ronda
    document.getElementById('round-result').textContent = roundResult;

    // Verificar si alguien alcanzó 3 puntos
    if (userScore === 3) {
        //alert('¡Felicidades! ¡Ganaste el juego!');
        Swal.fire({
            title: "¡Felicidades! ¡Ganaste el juego! Preciona Reload para jugar de nuevo",
            imageUrl: './assets/game_over.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
            });
        disableButtons();
    } else if (cpuScore === 3) {
        Swal.fire({
            title: "La CPU ha ganado el juego. Preciona Reload para jugar de nuevo",
            imageUrl: './assets/game_over.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
            });
    
       // alert('La CPU ha ganado el juego. ¡Inténtalo de nuevo!');
        disableButtons();
    }
}

// Función para deshabilitar los botones de elección
function disableButtons() {
    const buttons = document.querySelectorAll('.user .buttons button');
    buttons.forEach(button => {
        button.disabled = true;
    });
}



