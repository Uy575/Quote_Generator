
const mainQuotes = document.getElementById("mainQuotes");
const qC = document.getElementById("quoteContainer");
const author = document.getElementById("author");
const newQuote = document.getElementById("newQuote");
const twitter = document.getElementById("twitter");
const loading = document.getElementById("loader");
console.log(loading);


function load(){
    loading.hidden = false;
    qC.hidden = true;
}
function complete(){
    qC.hidden = false;
    loading.hidden = true;
}

// let quotes = [];
function randomquotes(){
    load();
    const rq = quotes[Math.floor(Math.random()*quotes.length)]
    console.log(rq);
    if(rq.text.length > 100){
        mainQuotes.classList.add("longQuote");
    }
    else{
        mainQuotes.classList.remove("longQuotes");
    }
    mainQuotes.textContent = rq.text;
    complete();
    if(!rq.author){
        author.textContent = "Unknown";
    }
    else{
        author.textContent = rq.author;
    }
}


function tweet(){
    const tweetUrl = `http://twitter.com/intent/tweet? text=${mainQuotes.textContent}-${author.textContent}`;
    window.open(tweetUrl,"_blank");
}

async function getQuotes(){
    load();
    const quotesApi = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
    const responce = await fetch(quotesApi);
     quotes = await responce.json();
    randomquotes();
}

getQuotes();

newQuote.addEventListener("click",randomquotes);
twitter.addEventListener("click",tweet);
