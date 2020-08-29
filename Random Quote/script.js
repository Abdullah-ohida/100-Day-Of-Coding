// select Element
const btn = document.querySelector('.btn');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

// create an array object
let content = [
    {
        id: 1,
        quote: `“The Way Get Started Is To Quit Talking And Begin Doing.”`,
        author: `– Walt Disney`
    },
    {
        id: 2,
        quote: `“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.”`,
        author: ` – Winston Churchill`
    },
    {
        id: 3,
        quote: ` “Don’t Let Yesterday Take Up Too Much Of Today.”`,
        author: ` – Will Rogers`
    },
    {
        id: 4,
        quote: `“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.”`,
        author: `Ismail Abdullah`
    },
    {
        id: 5,
        quote: `“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.”`,
        author: `– Vince Lombardi`
    },
    {
        id: 6,
        quote: `“If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.”`,
        author: ` – Steve Jobs`
    },
    {
        id: 7,
        quote: ` “People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.”`,
        author: ` – Rob Siltanen`
    },
    {
        id: 8,
        quote: `“Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.”`,
        author: ` – Og Mandino`
    },
    {
        id: 9,
        quote: `“Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur.”`,
        author: `– Mohnish Pabrai`
    },
    {
        id: 10,
        quote: `“We May Encounter Many Defeats But We Must Not Be Defeated.”`,
        author: `– Maya Angelou`
    },
]

let currentQuote = 0;
window.addEventListener('DOMContentLoaded', function(){
    getQuote(currentQuote);
    setInterval(()=>{
        currentQuote++;
        console.log(currentQuote)
        if(currentQuote === content.length-1){
            currentQuote = 0;
        }
        getQuote(currentQuote);
        
    }, 10000)
    quote.classList.add('slide-in');
        author.classList.add('slide-in');
});

// 

// show quote
function getQuote(value){
    const item = content[value];
    quote.textContent = item.quote;
    author.textContent = item.author;
}

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()*content.length);
    getQuote(random);
    quote.classList.add('slide-in');
    author.classList.add('slide-in');
})
// 