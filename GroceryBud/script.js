// *********** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// *********** EDIT OPTION **********
let editElement;
let editFlag = false;
let editId = "";

// *********** EVENT LISTENERS **********
// submitform
form.addEventListener('submit', addItem);
// clear item
// Load item
window.addEventListener('DOMContentLoaded', setUpItem);
clearBtn.addEventListener('click', clearItem);
// *********** FUNCTIONALITY **********
// AddItems
function addItem(e) {
    e.preventDefault();
    let value = grocery.value;
    const id = new Date().getTime().toString();
    if (value && !editFlag) {
        // Create Grocery List
       createList(id, value);
        // display alert
        displayAlert('Item added to the list', 'success');
        // show-container
        container.classList.add('show-container');
        // add to local storage
        addToLocalStorage(id, value);
        // set back tp default
        setDefault();
    } else if (value && editFlag) {
        editElement.innerHTML = value;
        displayAlert("Item Changed", 'success');
        editLocalstorage(editId, value)
        setDefault();
    } else {
        displayAlert('Please enter value', 'danger')
    }
}

// Display Alert
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    // setTimeOut
    setTimeout(() => {
        {
            alert.textContent = '';
            alert.classList.remove(`alert-${action}`);
        }
    }, 1000)
}

// clear item
function clearItem() {
    const groceryList = document.querySelectorAll('.grocery-item');
    if (groceryList.length > 0) {
        groceryList.forEach((item) => {
            list.removeChild(item)
        });;
    };
    container.classList.remove('show-container');
    displayAlert('Empty list', 'danger')
    localStorage.removeItem('list')
    setDefault();
}

// deleteItem Function
function deleteItem(e) {
    // console.log(itemValue)
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    //    console.log(list.removeChild(element).itemValue);
    if (list.children.length === 0) {
        container.classList.remove('show-container');
        //    remove fromlocal storage
        removeFromLocalStorage(id);
    }
    displayAlert('Remove item', 'danger');
    setDefault();
}
//EditItem Function
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    // set form value 
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editId = element.dataset.id;
    submitBtn.textContent = 'edit'
}
//set back tp default 
function setDefault() {
    grocery.value = '';
    editFlag = false;
    editId = "";
    submitBtn.textContent = 'submit';

}

// set to captital letter
function getUpper(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

//  getUpper('hello');
// *********** LOCAL STORAGE **********
// add to local storage
function addToLocalStorage(id, value) {
    const grocery = { id, value };
    let items = getLocalStorage();
    items.push(grocery);
    localStorage.setItem('list', JSON.stringify(items));
}
// remove from loacl storage
function removeFromLocalStorage(id) {
    let items = getLocalStorage();
    items = items.filter((item) => {
        if (item.id !== id) {
            return item;
        }
    });
    localStorage.setItem('list', JSON.stringify(items));
};
// edit fom local storage
function editLocalstorage(id, value) {
    let items = getLocalStorage();

    items = items.map((item) => {
        if (item.id === id) {
            item.value = value;
        }
        return item;
    });
    localStorage.setItem('list', JSON.stringify(items));
}
// Get Items from Local storage
function getLocalStorage() {
    return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];;
}
// ********* LOCAL STORAGE API *********
//SET ITEMS
//GET ITEMS
// REMOVE ITEMS
// SAVE ITEMS AS STRINGS   
//   

// *********** SETUP ITEMS **********
function setUpItem() {
    let items = getLocalStorage();
    if (items.length > 0) {
        items.forEach((item)=>{
            createList(item.id, item.value);
        });
        container.classList.add('show-container');
    }
}

    // creatList function
    function createList(id, value){
         // create item
         const element = document.createElement('article');
         // add classname;
         element.classList.add('grocery-item');
         // add id
         attr = document.createAttribute('data-id');
         attr.value = id;
         // assign id to element
         element.setAttributeNode(attr);
         element.innerHTML = ` <p class="title">${getUpper(value)}</p> 
         <div class="button-container">
             <button type="button" class="edit"><i class="fas fa-edit"></i></button>
             <button type="button" class="del"><i class="fas fa-trash"></i></button>
         </div>`
         // get DeleteBtn & EditBtn
         const deleteBtn = element.querySelector('.del');
         const editBtn = element.querySelector('.edit');
         // Add EventLister to BUttons
         deleteBtn.addEventListener('click', deleteItem);
         editBtn.addEventListener('click', editItem);
         // append child
         list.appendChild(element);
    }





 
 