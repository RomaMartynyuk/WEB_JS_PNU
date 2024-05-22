document.addEventListener('DOMContentLoaded', function() {
    let score = 0;
    let isPlaying = false;
    let timer;
    let square = document.getElementById('square');
    let startBtn = document.getElementById('startBtn');
    let scoreDisplay = document.getElementById('score');
    let difficultySelect = document.getElementById('difficulty');
    let colorSelect = document.getElementById('color');
    let gameDiv = document.getElementById('game');
    let menuDiv = document.getElementById('controls');
    let showSquare = document.getElementById('showColorSquare');
    let timerDisplay = document.getElementById('timer');
    let startTime;
    let timerInterval;

    function getRandomPosition() {
        let posX = Math.floor(Math.random() * (window.innerWidth - 100));
        let posY = Math.floor(Math.random() * (window.innerHeight - 100));
        return [posX, posY];
    }

    function moveSquare() {
        if (!isPlaying) {
            return;
        }
        let pos = getRandomPosition();
        square.style.left = pos[0] + 'px';
        square.style.top = pos[1] + 'px';
        square.style.backgroundColor = colorSelect.value;
        timer = setTimeout(() => {
            gameEnded();
            clearTimeout(timer);
        }, getTimeout());
    }

    function gameEnded() {
        clearInterval(timerInterval);
        alert('Game over! Your score: ' + score);
        score = 0;
        scoreDisplay.textContent = 'Score: ' + score;
        menuDiv.style.display = 'block';
        gameDiv.style.display = 'none';
    }

    function getTimeout() {
        let difficulty = difficultySelect.value;
        if (difficulty === 'easy') {
            square.style.width = '100px';
            square.style.height = '100px';
            return 5000;
        } else if (difficulty === 'medium') {
            square.style.width = '75px';
            square.style.height = '75px';
            return 3000;
        } else {
            square.style.width = '50px';
            square.style.height = '50px';
            return 1500;
        }
    }

    function updateTimer() {
        let elapsed = Date.now() - startTime;
        let seconds = Math.floor(elapsed / 1000);
        let milliseconds = elapsed % 1000;
        timerDisplay.textContent = `${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
    }

    colorSelect.addEventListener('click', () => {
        showSquare.style.backgroundColor = colorSelect.value;
    });

    square.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = 'Score: ' + score;
        clearTimeout(timer);
        clearInterval(timerInterval);
        startTime = Date.now();
        timerInterval = setInterval(updateTimer, 5);
        timer.textContent = "00:00";
        moveSquare();
    });

    startBtn.addEventListener('click', () => {
        score = 0;
        scoreDisplay.textContent = 'Score: ' + score;
        isPlaying = true;
        gameDiv.style.display = 'block';
        menuDiv.style.display = 'none';
        startTime = Date.now();
        timerInterval = setInterval(updateTimer, 5);
        moveSquare();
    });

    moveSquare();
    showSquare.style.backgroundColor = colorSelect.value;
});
