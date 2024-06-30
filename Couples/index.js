const board = document.querySelector(".board");
const boardBTN = document.querySelector(".board__button")

function createBoard(event) {
    event.preventDefault();

    board.textContent = "";
}

boardBTN.addEventListener('click', createBoard())
