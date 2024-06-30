const board = document.querySelector('.board');
const boardBTN = document.querySelector('.board__button');
const BoardInput = document.querySelector('.board__input');

boardBTN.addEventListener('click', (event) => {
    event.preventDefault()
    
    let column = BoardInput.value;
    let count;

    if (column >= 2 && column <= 6 && column % 2 == 0) {
        count = column * column;
    } else {
        alert("Нужно написать четное число в указанном диапазоне.");
        return;
    }

    createBoard(column, count);
})

function createBoard(columns, count) {
    board.textContent = "";
    let newBoard = document.querySelector('#gameTableTemplate').cloneNode(true).content;

    const gameTable = newBoard.querySelector('.table');
    const restartBTN = newBoard.querySelector('.table__button');

    gameTable.style = `
        grid-template-columns: repeat(${columns}, 1fr);
        grid-template-rows: repeat(${columns}, 1fr);
    `;

    restartBTN.addEventListener("click", location.reload())
    
    for (let i = 0; i < count; i++) {
        gameTable.append(createCard());
    }

    board.append(gameTable);
    board.append(restartBTN);

}

function createCard() {

    let newCard = document.querySelector('#cardTemplate').cloneNode(true).content;

    const card = newCard.querySelector('.card')
}
