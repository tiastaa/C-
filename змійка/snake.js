let field = document.getElementById("field");
for (let i = 0; i < 100; i++) {
    let exel = document.createElement('div');
    field.appendChild(exel);
    exel.classList.add("exel");

}



let exel = document.getElementsByClassName("exel");
let x = 1;
let y = 10;
for (let i = 0; i < 100; i++) {
    if (x == 11) {
        x = 1;
        y--;
    }
    exel[i].setAttribute('x', x);
    exel[i].setAttribute('y', y);
    x++;

}

function createSnake() {
    let x = Math.round(Math.random() * (7 - 3) + 3);
    let y = Math.round(Math.random() * (7 - 1) + 1);
    return [x, y];
}
let cordinatesSnakeHead = createSnake();

function createApple() {
    let x = Math.round(Math.random() * (10 - 1) + 1);
    let y = Math.round(Math.random() * (10 - 1) + 1);
    while (snakeHead.indexOf(document.querySelector('[x="' + x + '"][y= "' + y + '"]')) != -1) {
        x = Math.round(Math.random() * (10 - 1) + 1);
        y = Math.round(Math.random() * (10 - 1) + 1);
    }

    return [x, y];
}
let cordinatesaApple = createApple();
let apple = document.querySelector('[x="' + cordinatesaApple[0] + '"][y= "' + cordinatesaApple[1] + '"]');

apple.classList.add("apple");

document.getElementById("startbutton").onclick = () => {

    function NiceCode(newHeadPosition) {
        try {
            if (snakeHead.indexOf(document.querySelector('[x="' + parseInt(newHeadPosition.getAttribute("x")) + '"][y= "' + parseInt(newHeadPosition.getAttribute("y")) + '"]')) != -1) {
                // alert("dead");
                window.location.reload();


            }
            newHeadPosition.classList.add("snakehad");
            snakeHead[0].classList.remove("snakehad");
            snakeHead[0].classList.add("snakebody");
            snakeHead.unshift(newHeadPosition);
            if (newHeadPosition != apple) {
                snakeHead[snakeHead.length - 1].classList.remove("snakebody")
                snakeHead.pop();
            }
            if (newHeadPosition == apple) {
                apple.classList.remove("apple");
                cordinatesaApple = createApple();
                apple = document.querySelector('[x="' + cordinatesaApple[0] + '"][y= "' + cordinatesaApple[1] + '"]');
                apple.classList.add("apple");
            }
        } catch (err) {
            // alert("dead");
            window.location.reload();

        }

    }
    let interval = window.setInterval(function () {
        try {
            newHeadPosition = document.querySelector('[x="' + (parseInt(snakeHead[0].getAttribute("x")) + 1) + '"][y= "' + (parseInt(snakeHead[0].getAttribute('y'))) + '"]');
            newHeadPosition.classList.add("snakehad");
            snakeHead[0].classList.remove("snakehad");
            snakeHead[0].classList.add("snakebody");
            snakeHead.unshift(newHeadPosition);
            if (newHeadPosition != apple) {
                snakeHead[snakeHead.length - 1].classList.remove("snakebody")
                snakeHead.pop();
            } else {
                apple.classList.remove("apple");
                cordinatesaApple = createApple();
                apple = document.querySelector('[x="' + cordinatesaApple[0] + '"][y= "' + cordinatesaApple[1] + '"]');
                apple.classList.add("apple");
            }
        } catch (err) {
            // alert("dead");
            window.location.reload();

        }

    }, 500);






    function movesOfSnake(event) {
        // try{
        if (event.key == 'ArrowLeft' || event.key == 'a') {
            if (!(parseInt(snakeHead[0].getAttribute("y")) == parseInt(snakeHead[1].getAttribute("y")) && parseInt(snakeHead[0].getAttribute("x")) - parseInt(snakeHead[1].getAttribute('x')) == 1)) {
                clearInterval(interval);

                newHeadPosition = document.querySelector('[x="' + (snakeHead[0].getAttribute("x") - 1) + '"][y= "' + (parseInt(snakeHead[0].getAttribute('y'))) + '"]');


                NiceCode(newHeadPosition);

                interval = window.setInterval(function () {

                    newHeadPosition = document.querySelector('[x="' + (snakeHead[0].getAttribute("x") - 1) + '"][y= "' + (parseInt(snakeHead[0].getAttribute('y'))) + '"]');

                    NiceCode(newHeadPosition);
                }, 500);






            }


        }

        if (event.key == 'ArrowUp' || event.key == 'w') {
            if (!(parseInt(snakeHead[0].getAttribute("x")) == parseInt(snakeHead[1].getAttribute("x")) && parseInt(snakeHead[0].getAttribute("y")) - parseInt(snakeHead[1].getAttribute('y')) == -1)) {
                clearInterval(interval);
                newHeadPosition = document.querySelector('[x="' + snakeHead[0].getAttribute("x") + '"][y= "' + (parseInt(snakeHead[0].getAttribute('y')) + 1) + '"]');

                NiceCode(newHeadPosition);


                interval = window.setInterval(function () {

                    newHeadPosition = document.querySelector('[x="' + snakeHead[0].getAttribute("x") + '"][y= "' + (parseInt(snakeHead[0].getAttribute('y')) + 1) + '"]');
                    NiceCode(newHeadPosition);


                }, 500);
            }


        }


        if (event.key == 'ArrowDown' || event.key == 's') {
            if (!(parseInt(snakeHead[0].getAttribute("x")) == parseInt(snakeHead[1].getAttribute("x")) && parseInt(snakeHead[0].getAttribute("y")) - parseInt(snakeHead[1].getAttribute('y')) == 1)) {
                clearInterval(interval);
                newHeadPosition = document.querySelector('[x="' + snakeHead[0].getAttribute("x") + '"][y= "' + (parseInt(snakeHead[0].getAttribute('y')) - 1) + '"]');


                NiceCode(newHeadPosition);
                interval = window.setInterval(function () {

                    newHeadPosition = document.querySelector('[x="' + snakeHead[0].getAttribute("x") + '"][y= "' + (parseInt(snakeHead[0].getAttribute('y')) - 1) + '"]');
                    NiceCode(newHeadPosition);
                }, 500);

            }


        }
        if (event.key == 'ArrowRight' || event.key == 'd') {
            if (!(parseInt(snakeHead[0].getAttribute("y")) == parseInt(snakeHead[1].getAttribute("y")) && parseInt(snakeHead[0].getAttribute("x")) - parseInt(snakeHead[1].getAttribute('x')) == -1)) {
                clearInterval(interval);
                newHeadPosition = document.querySelector('[x="' + (parseInt(snakeHead[0].getAttribute("x")) + 1) + '"][y= "' + (parseInt(snakeHead[0].getAttribute('y'))) + '"]');

                NiceCode(newHeadPosition);
                interval = window.setInterval(function () {
                    newHeadPosition = document.querySelector('[x="' + (parseInt(snakeHead[0].getAttribute("x")) + 1) + '"][y= "' + (parseInt(snakeHead[0].getAttribute('y'))) + '"]');
                    NiceCode(newHeadPosition);
                }, 500);
            }



        }
        // }
        // catch(err){
        //     alert("dead");
        // }
    }


    document.addEventListener('keyup', movesOfSnake);

}








// document.getElementById("pausebutton").onclick=()=>{



// }