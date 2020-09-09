//
var listbutton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ol = document.querySelector("ol");
var delButton = document.querySelectorAll(".delete");
var li = document.querySelectorAll("li");


function inputLength() {
    return input.value.length;
}

let del;

function createListElement() {
    var li = document.createElement("li");
    // li.appendChild(document.createTextNode(input.value));
    // var button = document.createElement("button");
    // button.innerText = "×";
    // button.classList.add("delete");
    // li.appendChild(button);
    li.innerHTML = ` <p class="title">${input.value}</p> 
         <div class="button-container">
             <button type="button" class="del">x</button>
         </div>`
    ol.appendChild(li);
    input.value = "";
    const delBtn = li.querySelector('.del');
    delBtn.addEventListener('click', delItem);

}

function delItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    ol.removeChild(element);
}


function addListAfterCLick() {
    if (inputLength() > 0) {
        createListElement();
    }
    else {
        alert("enter an item pls");
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}




listbutton.addEventListener("click", addListAfterCLick);
input.addEventListener("keypress", addListAfterKeypress);

delButton.forEach((delBtn) => {
    delBtn.addEventListener('click', function (e) {
        let element = e.currentTarget.parentElement;
        ol.removeChild(element);
    })
});




