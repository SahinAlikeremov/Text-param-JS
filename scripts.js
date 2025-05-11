//Task2
const pattern = /[a-zA-Z]/g;

function numCounter(history) {
    let letters = String(history).match(pattern).length;
    return letters;

}
console.log(numCounter("Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, qui."));

//Task3
function capitalizeWords(text) {
    let words = String(text).split(" ");
    let capitalize = words[0].slice(0, 1).toUpperCase() + words[0].slice(1) + " " + words[1].slice(0, 1).toUpperCase() + words[1].slice(1)
    return capitalize;
}

console.log(capitalizeWords("hello world"));

//Task4
function isLucky(number) {
    let hexacopter = String(number).split("").slice(0, 6);

    if (+hexacopter[0] + +hexacopter[1] + +hexacopter[2] === +hexacopter[3] + +hexacopter[4] + +hexacopter[5]) {
        return true;
    }
    else {
        return false;
    }

}

console.log(isLucky(141231));
console.log(isLucky(111191));