// const btn = document.getElementById('btn');

// btn.addEventListener('click', getItem);

// function getItem(){
//     // Create an XHR object
//    let xhr = new XMLHttpRequest();
// //    OPEN type, url,file, async
//     xhr.open("GET", "read2.txt", true);
//     // check if the obj exit
//     xhr.onprogress = function(){
//         console.log("READYSTATE:", xhr.readyState)
//     }
//     xhr.onload = function(){
//         console.log("READYSTATE:", xhr.readyState)
//         if(this.status == 200){
//         //    console.log(this.responseText);
//         document.getElementById('text').innerHTML = this.responseText;
//         }else if(this.status == 404){
//             document.getElementById('text').innerHTML = "Not Found";
//         }
//     }
//     xhr.send()
// }