const people = ["Aristotle",
"Emily Brontë",
"Charles Darwin",
"Charles Dickens",
"Albert Einstein",
"Richard Feynman",
"Mahatma Gandhi",
"Jesus",
"John Keats",
"Helen Keller",
"Martin Luther King, Jr.",
"Laozi",
"Timothy Leary",
"Muhammad",
"Thomas Paine",
"Eleanor Roosevelt",
"Bertrand Russell",
"William Saroyan",
"William Shakespeare",
"George Bernard Shaw",
"Percy Bysshe Shelley",
"Leo Tolstoy",
"Anonymous",
"Anonymous",
"Anonymous",];
const main = $('main');
const quote = $('#quote');
// const quote2 = $('#quote2');
const author = $('.blockquote-footer');
const quoteBlock = $('.blockquote');
const tweet = $('#tweet');
const authorNavButton = $('#author-nav-button');
const authorNavMenu = $('.side-nav');
const authorNavClose = $('.close-author-nav-menu');
const authorButtons = $('#author-buttons');
const max = people.length;
let quoteText;
let authorName;
var quotedata = $('quotedata')

function getQuote(name){
    WikiquoteApi.openSearch(name,
      function(results) {
        // console.log(results)
        // Get quote
        WikiquoteApi.getRandomQuote(name,
          function(newQuote) {
            console.log(Object.values(newQuote));
            // document.getElementById("quote1").innerHTML = Object.values(newQuote)[1]
            
            if(newQuote.quote.length > 2){


                var quotetextval = Object.values(newQuote)[1]
            var author1 = Object.values(newQuote)[0]
            document.getElementById("quote1").innerHTML = quotetextval
            document.getElementById("author1").innerHTML = author1

              quoteBlock.hide();
              quote.html(newQuote.quote);
            //   var x = "marijani"
            //   console.log(x);
            //   console.log(quote.text());
              quoteText = quote.text();
              quote.text(quoteText);
                //  document.createElement(`quote1`).values = quoteText 
                //  document.getElementById("quote1").innerHTML = x;
                // kiquote = x
                // console.log(kiquote)
              author.text(newQuote.titles);
            //   console.log(author.text)
            //   document.getElementById("quote1").innerHTML = author;
              quoteBlock.fadeIn(1800);
            }
            else {
              getQuote(name);
            }
          },
          function(msg){
            alert(msg);
          }
        );
      },
      function(msg) {
        alert(msg);
      }
    );
  }


function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}


window.onload = function(){ 
    getQuote(people[getRandomIndex(max)]);
    getQuote2(people[getRandomIndex(max)]);
    getQuote3(people[getRandomIndex(max)]);
};

function getQuote2(name){
    WikiquoteApi.openSearch(name,
      function(results) {
        // console.log(results)
        // Get quote
        WikiquoteApi.getRandomQuote(name,
          function(newQuote) {
            
            if(newQuote.quote.length > 2){


                console.log(Object.values(newQuote));
                document.getElementById("quote2").innerHTML = Object.values(newQuote)[1]
                document.getElementById("author2").innerHTML = Object.values(newQuote)[0]

              quoteBlock.hide();
              quote.html(newQuote.quote);
            //   console.log(quote.text());
              quoteText = quote.text();
              quote.text(quoteText);
                // var kiquote = document.createElement(`quote3`);
                // kiquote = quoteText
                // console.log(kiquote)
              author.text(newQuote.titles);
              quoteBlock.fadeIn(1800);
            }
            else {
              getQuote(name);
            }
          },
          function(msg){
            alert(msg);
          }
        );
      },
      function(msg) {
        alert(msg);
      }
    );
  }






  function getQuote3(name){
    WikiquoteApi.openSearch(name,
      function(results) {
        // console.log(results)
        // Get quote
        WikiquoteApi.getRandomQuote(name,
          function(newQuote) {
            
            if(newQuote.quote.length > 2){

                console.log(Object.values(newQuote));
                document.getElementById("quote3").innerHTML = Object.values(newQuote)[1]
                document.getElementById("author3").innerHTML = Object.values(newQuote)[0]

              quoteBlock.hide();
              quote.html(newQuote.quote);
            //   console.log(quote.text());
              quoteText = quote.text();
              quote.text(quoteText);
                // var kiquote = document.createElement(`quote2`);
                // kiquote = quoteText
                // console.log(kiquote)
              author.text(newQuote.titles);
              quoteBlock.fadeIn(1800);
            }
            else {
              getQuote(name);
            }
          },
          function(msg){
            alert(msg);
          }
        );
      },
      function(msg) {
        alert(msg);
      }
    );
  }

