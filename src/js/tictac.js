const game = document.querySelector('.game');
const gameSteps = document.querySelectorAll('.game__inner');
const gameResult = document.querySelector('.result__text');
const playAgain = document.querySelector('.result__again');

let i = 0;
const makeStep = (e) => {
    const step = e.target;
    if (!step.innerHTML) {
        step.innerHTML = "x";
        checkWinner();
        i += 1;
        if (i > 4) {
            return;
        } else {
            botStep();
        }
    }
}
game.addEventListener("click", makeStep);

const getRandomInt = () => {
    return Math.floor(Math.random() * (8 - 0) + 0);
}

const botStep = () => {
    let randomMove = Number.parseInt(getRandomInt());
    if (!gameSteps[randomMove].innerHTML) {
        gameSteps[randomMove].innerHTML = "o";
    } else {
        botStep();
    }
}

const checkFreeSteps = () => {
    let result = false;
    for(let i = 0; i < gameSteps.length; i++) {
		if (gameSteps[i].hasChildNodes()){
			result = false;
		} else {
			result = true;
			break;
		}
	}
    return result;
}

const checkWinner = () => {
    const combs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let comb of combs) {
        if (gameSteps[comb[0]].textContent == gameSteps[comb[1]].textContent &&
            gameSteps[comb[1]].textContent == gameSteps[comb[2]].textContent &&
            gameSteps[comb[0]].textContent != '') {
            if (gameSteps[comb[0]].textContent === "x" &&
                gameSteps[comb[1]].textContent === "x" &&
                gameSteps[comb[2]].textContent === "x") {
                gameResult.textContent = "You win!";
                playAgain.classList.remove('disabled');
                playAgain.textContent = "Wanna play again?";
                game.removeEventListener("click", makeStep);
            } else {
                gameResult.textContent = "Bot winned:(";
                playAgain.classList.remove('disabled');
                playAgain.textContent = "Wanna play again?";
                game.removeEventListener("click", makeStep);
            }

        }
    }
    if(!checkFreeSteps()) {
        gameResult.textContent = "It is a draw!";
        playAgain.classList.remove('disabled');
        playAgain.textContent = "Wanna play again?";
        game.removeEventListener("click", makeStep);
    }
}

playAgain.addEventListener("click", clearGame = () => {
    gameSteps.forEach(step => step.innerHTML = "");
    gameResult.textContent = "";
    playAgain.textContent = "";
    playAgain.classList.add('disabled');
    i = 0;
    game.addEventListener("click", makeStep);
})

