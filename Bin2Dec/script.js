const convertFrom = document.getElementById("convert-from")
const convertTo = document.getElementById("convert-to");
const baseValue = document.getElementById("decimal");
const output = document.getElementById("output");
const btn = document.getElementById("button");
const popUp = document.getElementById("error");


btn.addEventListener("click", function(e){
    e.preventDefault();
    let outcome = convertFromOneBaseToAnother(convertFrom.value, convertTo.value, baseValue.value);
    output.innerText = outcome;
})

function validateNumbers(value, base){
    let isValid = true;
    while(value > 0){
        if(value % 10 > base - 1){
            popUp.classList.add(".show");
        }
        value = Math.trunc(value / 10);
    }
    return isValid;
}

function convertToDecimal(baseValue, base){
    if(validateNumbers(baseValue, base)){
        let decimal = 0;
        let remainder;
        let reverse;
        let power = 0;
    
        while(baseValue !== 0){
            remainder = baseValue % 10;
            reverse = Math.trunc(Math.pow(base, power++) * remainder + decimal);
            decimal = reverse;
            baseValue = baseValue / 10;
        }
        return decimal;
    }
    return -1;
   
}

function convertToAnotherBase(decimalValue, base){
    let remainder;
    let reverse = "";
    let divisor;
        while(decimalValue !== 0) {
            divisor = Math.trunc(decimalValue / base);
            remainder = decimalValue % base;
            reverse += remainder;
            decimalValue = divisor;
        }
        return reverse;
    
}


function convertFromOneBaseToAnother(convertFrom, convertTo, baseValue){
    let decimal;
    let newValue;

    decimal = convertToDecimal(baseValue, convertFrom);
    newValue = convertToAnotherBase(decimal, convertTo);

    return newValue;
}
