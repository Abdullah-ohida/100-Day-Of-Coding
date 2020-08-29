// select Element
const btn = document.querySelector('.btn');
const hex = document.querySelector('.hex');

const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "b", "c", "D", "F"];
btn.addEventListener('click', function(){
    let hexCode = '#';
    for(let i = 0; i < 6; i++){
        hexCode += hexColors[getRandomValue()];
    }
    document.body.style.backgroundColor = hexCode;
    hex.textContent = hexCode;
    hex.style.visibility = "visible";
    hex.style.color = hexCode;
});

function getRandomValue(){
    return Math.floor(Math.random() * hexColors.length);
}