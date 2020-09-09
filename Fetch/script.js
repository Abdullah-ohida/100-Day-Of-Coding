const btnText = document.querySelector('.btn-text');
btnText.addEventListener('click', getText);

const btnGetUsers = document.querySelector('.btn-user');
btnGetUsers.addEventListener('click', getUser);

const btnGetPost = document.querySelector('.btn-post');
btnGetPost.addEventListener('click', getPost);


const addPost = document.querySelector('.addpost');
addPost.addEventListener('submit', addItem);


function getText(){
    fetch('text.txt').then((res)=> res.text())
    .then((data)=>{
        output = "";
        output = `<h2  class="mt-4 mb-3">Plain Text</h2>
         <p  class="list-group-item">${data}</p>
        `
        document.querySelector('.output').innerHTML = output;
    })
    .catch((error)=> console.log(error))
}

function getUser() {
    fetch('text.json').then((res) => res.json())
        .then((data) => {
                output = "";
            output = `<h2>users</h2>`
            data.forEach(element => {
             output += `
                <ul class = "list-group mb-3">
                    <li class="list-group-item">ID: ${element.name}</li>
                     <li class="list-group-item">Age: ${element.age}</li>
                      <li class="list-group-item">Email: ${element.email}</li>
                </ul>
             `
            });

            document.querySelector('.output').innerHTML = output;
        });
};



function getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())
        .then((data) => {
            output = "";
            output = `<h2>Post</h2>`
            data.forEach(element => {
                output += `
                <div class = "card card-body mb-3">
                    <h3>Title: ${element.title}</h3>
                     <p>Body: ${element.body}</p>

                </div>
             `
            });

            document.querySelector('.output').innerHTML = output;
        });
};

function addItem(e){
    e.preventDefault();

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;
    

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method:"POST",
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({title:title, body:body})
    }).then((res)=> res.json())
    .then((data)=> console.log(data))

}

fetch("https://marvelstefan-skliarovv1.p.rapidapi.com/getCharactersByStory", {
    "method": "POST",
    "headers": {
        "x-rapidapi-host": "Marvelstefan-skliarovV1.p.rapidapi.com",
        "x-rapidapi-key": "1b7b469bc5mshbe86592c9a41636p1ad34ajsn396d513fb441",
        "content-type": "application/x-www-form-urlencoded"
    },
    "body": {}
})
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });

