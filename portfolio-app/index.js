console.log('Hello World 2314234');
const currentWord = document.getElementById("tap-button");
const karllaWord = document.getElementById("karlla");


currentWord.addEventListener('click',function(){
    console.log("tapped here");
    karllaWord.innerHTML = "<h1>Karlla is Cute!</h1>";
});