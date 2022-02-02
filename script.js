const quotes=document.getElementById("quotes");
const author=document.getElementById("author");
const newQ=document.getElementById("newQ");
const tweetme=document.getElementById("tweetme");

let realData="";
let quotesData="";

const tweetNow=()=>{
    const tweetPost=`https://twitter.com/intent/tweet?text=${quotesData.text}`;
    window.open(tweetPost);
}
const getNewQuotes=()=>{
    const randomNum=Math.floor(Math.random()*10);
    // console.log(realData[randomNum].text)
    // console.log(realData[randomNum].author)
    quotesData=realData[randomNum];
    quotes.innerHTML=`${quotesData.text}`;
    if(quotesData.author==null){
    author.innerHTML=unKnown;
    }
    else{
    author.innerHTML=`${quotesData.author}`;
    }
}
//         function myFunction() {
//   document.getElementById("myCheck").click();
// }
const getQuotes= async()=>{
    const api="https://type.fit/api/quotes";

    try{
        let data= await fetch(api);
         realData= await data.json();
        getNewQuotes();
        //  getNewQuotes();
        //console.log(realData[0].text);
    }catch(error){}

};
tweetme.addEventListener('click', tweetNow)
newQ.addEventListener('click', getNewQuotes)
getQuotes();