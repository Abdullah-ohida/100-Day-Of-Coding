const btn = document.querySelector('.btn');
const container = document.querySelector('.users');

btn.addEventListener('click', loadItem);

function loadItem(){
   let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users", true);

   xhr.onload = function(){
       if(this.status == 200){
           let user = JSON.parse(this.responseText);
           let output = "";

           for(let prop in user){
               
               output += `
               <div class="user">
               <img src = "${user[prop].avatar_url}"
               <ul>
                <li>ID: ${user[prop].id}</li>
                    <li>Login: ${user[prop].login}</li>
                    <li>User-Repos: ${user[prop].repos_url}</li>
               </ul>
               </div>`
           }

           container.innerHTML = output;
       }
   }
   xhr.send();
};