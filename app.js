
let userScore = 0;
let cpuScore = 0;


function play(userChoice) {
    if (userScore >= 3 || cpuScore >= 3) {
        return;
    }

    const choices = ['piedra', 'papel', 'tijera'];
    const cpuChoice = choices[Math.floor(Math.random() * choices.length)];


    document.getElementById('user-choice').textContent = `Usuario eligió ${userChoice}`;
    document.getElementById('cpu-choice').textContent = `CPU eligió ${cpuChoice}`;


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

    document.getElementById('user-score').textContent = userScore;
    document.getElementById('cpu-score').textContent = cpuScore;
    document.getElementById('round-result').textContent = roundResult;

    
    if (userScore === 3) {
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
        disableButtons();
    }
}

function disableButtons() {
    const buttons = document.querySelectorAll('.user .buttons button');
    buttons.forEach(button => {
        button.disabled = true;
    });
}
