// select item
const btns = document.querySelectorAll('button')
const count = document.querySelector('h2');

let counter = 0;
btns.forEach((btn)=>{
    btn.addEventListener('click', function(e){
        if(e.currentTarget.classList.contains('low')){
            counter--;
            count.style.color = "rgb(107, 11, 11";
        }else if(e.currentTarget.classList.contains('add')){
            counter++;
        }else{
            counter = 0;
        }
        if(counter > 0){
            count.style.color = "green";
        }
        if(counter < 0){
            count.style.color = "rgb(107, 11, 11";
        }
        if(counter === 0){
            
            count.style.color = "black"
        }
        count.textContent = counter
    })
});



