function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function fieldSize(numberOfRows, numberOfColumns) {
    let field = document.getElementById("field");
    let RowHeight = 500 / numberOfRows;
    field.style.height = `500px`;
    let fieldWidth = RowHeight * numberOfColumns;
    field.style.width = `${fieldWidth}px`;

}

function createExels(numberOfRows, numberOfColumns) {
    let exelSize = `${500/numberOfRows}px`
    let field = document.getElementById("field");
    let numberOfExels = numberOfRows * numberOfColumns;
    for (let i = 0; i < numberOfExels; i++) {
        let exel = document.createElement('div');
        field.appendChild(exel);
        exel.classList.add("exel");;
        exel.style.height = exelSize;
        exel.style.width = exelSize;
    }

}

function setExelAttribute(numberOfRows, numberOfColumns) {
    let exel = document.getElementsByClassName("exel");
    let x = 1;
    let y = numberOfRows;
    let numberOfExels = numberOfRows * numberOfColumns;
    for (let i = 0; i < numberOfExels; i++) {
        if (x == (numberOfColumns + 1)) {
            x = 1;
            y--;
        }
        // console.log(x == (numberOfColumns + 1), numberOfColumns, numberOfColumns + 1 ,numberOfColumns*1 + 1)
        exel[i].setAttribute('x', x);
        exel[i].setAttribute('y', y);
        x++;

    }
}

function snakeDirection() {
    let direction = ["up", "down", "left", "right"];
    let randomDirection = randomInteger(0, 3);
    console.log(randomDirection, direction[randomDirection]);
    return direction[randomDirection];
}

function createSnakeCoordinates(numberOfRows, numberOfColumns, direction, snakeLenght) {
    let x;
    let y;
    if (direction == "up") {
        x = randomInteger(1, numberOfColumns);
        y = randomInteger(snakeLenght, (numberOfRows - 3));
    }
    if (direction == "down") {
        x = randomInteger(1, numberOfColumns);
        y = randomInteger(3, (numberOfRows - snakeLenght));
    }
    if (direction == "left") {
        x = randomInteger(3, (numberOfColumns - snakeLenght));
        y = randomInteger(1, (numberOfRows));

    }
    if (direction == "right") {
        x = randomInteger(snakeLenght, (numberOfColumns - 3));
        y = randomInteger(1, (numberOfRows));

    }
    console.log("x y", x, y);
    return [x, y];
}

function createSnake(snakeLenght, cordinatesSnakeHead, direction) {

    let snake = [document.querySelector('[x="' + cordinatesSnakeHead[0] + '"][y= "' + cordinatesSnakeHead[1] + '"]')];
    if (direction == "up") {

        for (let i = 0; i < snakeLenght; i++) {
            snake.push(document.querySelector('[x="' + cordinatesSnakeHead[0] + '"][y= "' + (parseInt(cordinatesSnakeHead[1]) - i) + '"]'))
        }
    }
    if (direction == "down") {

        for (let i = 0; i < snakeLenght; i++) {
            snake.push(document.querySelector('[x="' + cordinatesSnakeHead[0] + '"][y= "' + (parseInt(cordinatesSnakeHead[1]) + i) + '"]'))
        }
    }
    if (direction == "left") {

        for (let i = 0; i < snakeLenght; i++) {
            snake.push(document.querySelector('[x="' + (parseInt(cordinatesSnakeHead[0]) + i) + '"][y= "' + (cordinatesSnakeHead[1]) + '"]'))
        }
    }
    if (direction == "right") {

        for (let i = 0; i < snakeLenght; i++) {
            snake.push(document.querySelector('[x="' + (parseInt(cordinatesSnakeHead[0]) - i) + '"][y= "' + (cordinatesSnakeHead[1]) + '"]'))
        }
    }
    console.log(snake)
    return snake;

}

function setClassListForSnake(snake) {
    snake[0].classList.add("snakehad");
    for (let i = 1; i < snake.length; i++) {
        snake[i].classList.add("snakebody");
    }
}