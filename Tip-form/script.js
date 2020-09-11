const UsersBill = document.querySelector('.bill');
const numUsers = document.querySelector('.user');
const percent = document.querySelector('select');
const tip = document.querySelector('.tip');
const tipTotal = document.querySelector('.tip-total');
const userTipAmount = document.querySelector('.tip-user');
const userAmount = document.querySelector('.tiptotal-user');
const form = document.querySelector('.form');
const solution = document.querySelector('.solution');
const clear = document.querySelector('.clear')



const calculate = (bill, user, num)=>{
    percentage = (num / 100);
    let tipValue = (bill * percentage);
    let tipTotalValue = (bill + tipValue);
    let userAmountValue = (tipTotalValue / user);
    let eachValue = (tipValue / user);
    tip.textContent = tipValue.toFixed(2);
    tipTotal.textContent = tipTotalValue.toFixed(2);
    userAmount.textContent = userAmountValue.toFixed(2);
    userTipAmount.textContent = eachValue.toFixed(2);
}



const getItem = (e) => {
    e.preventDefault();
    if(percent.value == undefined){
        alert("Choose sharing percentage")
    }
    calculate(parseFloat(UsersBill.value), parseFloat(numUsers.value), parseFloat(percent.value));

    solution.style.display = "block"
}

form.addEventListener('submit', getItem);

clear.addEventListener('click', function(){
    solution.style.display = "none"
})

