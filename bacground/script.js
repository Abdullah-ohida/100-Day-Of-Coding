// const body = ;
const btn = document.querySelector('.btn');
const body = document.querySelector('body');

let colors = ['red', 'yellow', 'green', 'blue', 'brown', 'white', 'purple', 'orange', 'cyan', 'green'];

btn.addEventListener('click',function(){
    let randomValue = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomValue];
})

