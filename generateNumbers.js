/*
function randomNumbers() {

    return Math.floor(Math.random() * 10);
}

document.write(randomNumbers());



function randomNumbers() {

    return Math.floor(Math.random() * (8888 - 8000 + 1) + 8000)
}

document.write(randomNumbers());
*/

function numberGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

var numbers = numberGen(1, 19)
document.write(numbers)