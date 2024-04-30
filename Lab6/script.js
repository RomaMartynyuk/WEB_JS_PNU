document.addEventListener('DOMContentLoaded', () => {
    const gameboard = document.getElementById('gameboard');
    const clicksDisplay = document.getElementById('clicks');
    const timerDisplay = document.getElementById('timer');
    const restartButton = document.getElementById('restart');
    const requireStepsDisplay = document.getElementById('requireSteps');

    //win button
    const winButton = document.getElementById('win-button');

    let board = [];
    let clicks = 0;
    let timerInterval;
    let isPlaying = false;
    let reqSteps;

    function initializeGame() {
        clicks = 0;
        clicksDisplay.textContent = 0;
        clearInterval(timerInterval);
        timerDisplay.textContent = '00:00';

        let gameLayouts = ['GameLayouts/game1.json', 'GameLayouts/game2.json', 'GameLayouts/game3.json'];
        let randomIndex = Math.floor(Math.random() * gameLayouts.length);
        console.log(gameLayouts[randomIndex]);

        /*for (let i = 0; i < 25; i++) {
            board.push(Math.random() < 0.5);
        }*/
        $ajaxUtils.sendGetRequest(gameLayouts[randomIndex], function(request){
            
            let matrix = request.matrix;
            reqSteps = request.reqSteps;
            board = [];

            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 5; j++){
                    board.push(matrix[i][j]);
                    console.log(matrix[i][j]);
                }
            }

            generateBoard();
            isPlaying = true;
            startTimer();

        })   
    }

    function generateBoard() {
        gameboard.innerHTML = '';
        requireStepsDisplay.textContent = reqSteps;

        for (let i = 0; i < 25; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.index = i;
            cell.addEventListener('click', handleClick);

            if (board[i] === 1) {
                cell.classList.add('on');
            } else {
                cell.classList.add('off');
            }

            gameboard.appendChild(cell);
        }
    }

    function handleClick(event) {
        if (!isPlaying) return;

        const index = parseInt(event.target.dataset.index);
        toggleCell(index);

        const neighbors = getNeighbors(index);

        for (const neighbor of neighbors) {
            if (neighbor >= 0 && neighbor < 25) {
                toggleCell(neighbor);
            }
        }

        checkWin();
        clicks++;
        clicksDisplay.textContent = clicks;
    }

    function toggleCell(index) {
        const cell = gameboard.children[index];
        cell.classList.toggle('on');
        cell.classList.toggle('off');
        board[index] = !board[index];
    }

    function startTimer() {
        let seconds = 0;
        timerInterval = setInterval(() => {
            seconds++;
            const minutes = Math.floor(seconds / 60);
            const formattedSeconds = (seconds % 60).toString().padStart(2, '0');
            timerDisplay.textContent = `${minutes}:${formattedSeconds}`;
        }, 1000);
    }

    function checkWin() {
        let allCellsOn = true;
      
        for (let i = 0; i < board.length; i++) {
          if (!board[i]) {
            allCellsOn = false;
            break;
          }
        }
      
        if (allCellsOn) {
          isPlaying = false;
          clearInterval(timerInterval);
          alert('Ви перемогли! Не так як у logicgamesonline.com ;)');
        }
      }
      

    function getNeighbors(index) {
        const neighbors = [];
      
        const row = Math.floor(index / 5);
        const col = index % 5;
      
        // Верхня сторона
        if (row > 0) {
          neighbors.push(index - 5);
        }
      
        // Права сторона
        if (col < 4) {
          neighbors.push(index + 1);
        }
      
        // Нижня сторона
        if (row < 4) {
          neighbors.push(index + 5);
        }
      
        // Ліва сторона
        if (col > 0) {
          neighbors.push(index - 1);
        }
      
        return neighbors;
    }

    //win
    winButton.addEventListener('click', () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = true;
        }
        checkWin();
    });

    restartButton.addEventListener('click', initializeGame);

    initializeGame();
});