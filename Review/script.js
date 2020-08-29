const imgPerson = document.querySelector('.photo');
const authorPerson = document.querySelector('.author');
const star = document.querySelectorAll('i');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const infoPerson = document.querySelector('.testimony');

//  Load 
const reviewer = [
    {
        img: `img/img1.jfif`,
        info: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores laborum
        dolore pariatur accusantium sint illum rerum sequi aliquam ratione ea?.`,
        author: 'Adrel Jowel'
    },
    {
        img: `img/img2.jfif`,
        info: `It only serves to show what sort of person a man must be who can't even get testimonials. No, no; if a man brings references, it proves nothing; but if he can't, it proves a great deal.`,
        author: 'John doe'
    },
    {
        img: `img/img3.jfif`,
        info: `It only serves to show what sort of person a man must be who can't even get testimonials. No, no; if a man brings references, it proves nothing; but if he can't, it proves a great deal.`,
        author: 'Micheal sam'
    },
    {
        img: `img/img4.jfif`,
        info: `It only serves to show what sort of person a man must be who can't even get testimonials. No, no; if a man brings references, it proves nothing; but if he can't, it proves a great deal.`,
        author: 'faquk knoxk'
    },
    {
        img: `img/img5.jfif`,
        info: `It only serves to show what sort of person a man must be who can't even get testimonials. No, no; if a man brings references, it proves nothing; but if he can't, it proves a great deal.`,
        author: 'Peter thru'
    },

];

let {img, info, author} = reviewer;
let current = 0
window.addEventListener('DOMContentLoaded', function(){
    newReviewer(current);
});

// get new Reveiwer
function newReviewer(user){
    const item = reviewer[user];
    imgPerson.src = item.img;
    authorPerson.textContent = item.author;
    infoPerson.textContent = item.info;
};

prev.addEventListener('click', function(){
    current++;
    if(current === 0){
        current = reviewer.length-1;
    }
    newReviewer(current);
})

next.addEventListener('click', function(){
    current++;
    if(current ===  reviewer.length-1){
        current = 0;
    }
    newReviewer(current);
});