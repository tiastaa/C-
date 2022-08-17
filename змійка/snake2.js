// import{fieldSize , createExels } from './modules/snakefunc.js';


document.getElementById("startbutton").onclick = () => {
    let numberOfRows = parseInt(document.getElementById("rows").value);
    let numberOfColumns = parseInt(document.getElementById("columns").value);
    let snakeLenght = parseInt(document.getElementById("snakeLength").value);
    fieldSize(numberOfRows, numberOfColumns);
    createExels(numberOfRows, numberOfColumns);
    setExelAttribute(numberOfRows, numberOfColumns);
    let direction = snakeDirection();
    let cordinatesSnakeHead = createSnakeCoordinates(numberOfRows, numberOfColumns, direction, snakeLenght);
    let snake = createSnake(snakeLenght, cordinatesSnakeHead, direction);
    setClassListForSnake(snake);

}