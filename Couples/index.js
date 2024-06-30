const board = document.querySelector(".board");
const boardBTN = document.querySelector('.board__button');
const BoardInput = document.querySelector('.board__input');

boardBTN.addEventListener('click', (event) => {
    event.preventDefault()
    
    let colums = input.value;
    let count;

    if (colums >= 2 && colums <= 6 && colums % 2 == 0) {
        count = colums * colums;
    } else {
        alert("Нужно написать четное число в указанном диапазоне.");
        return;
    }

    createBoard(count, colums);
})

function createBoard(count, colums) {
    board.textContent = "";
}
