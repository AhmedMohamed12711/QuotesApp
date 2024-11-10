var head=document.getElementById("text_head");
head.innerHTML='Quote of the Day';

var paragraph=document.getElementById("pargraph");
paragraph.innerHTML='Press the button below to recieve a random quote!';

var quotes = [
    `"You miss 100% of the shots you don't take <br>-- Wayne Gretzky"`,
    `"It's not what happens to you, but how you react to it that matters<br> -- Epictetus"`,
    `"Do not take life too seriously. You will not get out alive.<br> -- Elbert Hubbard"`,
    `"The best revenge is massive success.<br> -- Frank Sinatra"`,
    `"Resentment is like drinking poison and waiting for your enemies to die.<br> -- Nelson Mandela"`
];
var lastQuote = null;

function getRandomQuote() {
    var newQuote;
    do {
        var randomIndex = Math.floor(Math.random() * quotes.length);
        newQuote = quotes[randomIndex];
    } while (newQuote === lastQuote); 

    lastQuote = newQuote; 
    return newQuote;
}

function click_btn(){
    var quote = getRandomQuote();
    document.getElementById('quote').innerHTML = quote;
}

