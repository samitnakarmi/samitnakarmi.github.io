window.addEventListener('load', init);

const displayPokemon = document.querySelector('#display-pokemon');
const option1 = document.querySelector('#option-1');
const option2 = document.querySelector('#option-2');
const option3 = document.querySelector('#option-3');
const option4 = document.querySelector('#option-4');

const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');
const btn4 = document.querySelector('#btn-4');

const rightWrong = document.querySelector('#right-wrong');
const nextButton = document.querySelector('#go-to-next');

const pokemonImage = document.querySelector("#pokemon-image");

let pokemons = {
  bulbasaur: 'フシギダネ',
  ivysaur: 'フシギソウ',
  venasaur: 'フシギバナ',
  charmander: 'ヒトカゲ',
  charmeleon: 'リザード',
  charizard: 'リザードン',
  squirtle: 'ゼニガメ',
  wartotle: 'カメール',
  blastoise: 'カメックス',
  caterpie: 'キャタピー',
  metapod: 'トランセル',
  butterfree: 'バタフリー',
  weedle: 'ビードル',
  kakuna: 'コクーン',
  beedril: 'スピアー',
  pidgey: 'ポッポ',
  pidgeotto: 'ピジョン',
  pidgeot: 'ピジョット'
}

function init() {
  displayQuestion();
  displayOptions();
}

let randPokemon;

function displayQuestion() {
  let key = Object.keys(pokemons);
  let randIndex = Math.floor(Math.random() * key.length);
  randPokemon = key[randIndex];
  console.log(randPokemon);
  displayPokemon.innerHTML = "<div>" + randPokemon + "</div>";
}

function displayOptions() {
  randomnumber = getRandomNumber(4, 1);

  option1.innerHTML = getRandomJapaneseName();
  option2.innerHTML = getRandomJapaneseName();
  option3.innerHTML = getRandomJapaneseName();
  option4.innerHTML = getRandomJapaneseName();

  console.log(pokemons[randPokemon]);

  console.log(randomnumber);

  if (randomnumber == 1) {
    console.log('one');
    option1.innerHTML = pokemons[randPokemon];
  } else if (randomnumber == 2) {
    console.log('two');
    option2.innerHTML = pokemons[randPokemon];
  } else if (randomnumber == 3) {
    console.log('three');
    option3.innerHTML = pokemons[randPokemon];
  } else if (randomnumber == 4) {
    console.log('four');
    option4.innerHTML = pokemons[randPokemon];
  }
}

function getRandomJapaneseName() {
  let key = Object.keys(pokemons);
  let randIndex = Math.floor(Math.random() * key.length);
  randPokemonInner = key[randIndex];
  return pokemons[randPokemonInner];
}

function getRandomNumber(maximum, minimum) {
  let randomnumber;
  randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  return randomnumber;
}

btn1.onclick = function () {
  if (pokemons[randPokemon] == option1.innerText) {
    rightWrong.innerHTML = "<h1>正解！</h1>";
    btn1.className = "btn btn-success btn-lg";
    pokemonImage.innerHTML = `<img src="images/pokemonImages/${randPokemon}.png" alt="" />
    <div><h3>${pokemons[randPokemon]}。</h3></div>
    <div><h3>${randPokemon}。</h3></div>`;

  } else {
    rightWrong.innerHTML = "";
    btn1.className = "btn btn-danger btn-lg";
  }
  console.log(option1.innerText);

}

btn2.onclick = function () {
  if (pokemons[randPokemon] == option2.innerText) {
    rightWrong.innerHTML = "<h1>正解！</h1>";
    btn2.className = "btn btn-success btn-lg";
    pokemonImage.innerHTML = `<img src="images/pokemonImages/${randPokemon}.png" alt="" />
    <div><h3>${pokemons[randPokemon]}。</h3></div>
    <div><h3>${randPokemon}。</h3></div>`;
  } else {
    rightWrong.innerHTML = "";
    btn2.className = "btn btn-danger btn-lg";
  }
  console.log(option2.innerText);
}

btn3.onclick = function () {
  if (pokemons[randPokemon] == option3.innerText) {
    rightWrong.innerHTML = "<h1>正解！</h1>";
    btn3.className = "btn btn-success btn-lg";
    pokemonImage.innerHTML = `<img src="images/pokemonImages/${randPokemon}.png" alt="" />
    <div><h3>${pokemons[randPokemon]}。</h3></div>
    <div><h3>${randPokemon}。</h3></div>`;
  } else {
    rightWrong.innerHTML = "";
    btn3.className = "btn btn-danger btn-lg";
  }
  console.log(option3.innerText);
}

btn4.onclick = function () {
  if (pokemons[randPokemon] == option4.innerText) {
    rightWrong.innerHTML = "<h1>正解！</h1>";
    btn4.className = "btn btn-success btn-lg";
    pokemonImage.innerHTML = `<img src="images/pokemonImages/${randPokemon}.png" alt="" />
    <div><h3>${pokemons[randPokemon]}。</h3></div>
    <div><h3>${randPokemon}。</h3></div>`;
  } else {
    rightWrong.innerHTML = "";
    btn4.className = "btn btn-danger btn-lg";
  }
  console.log(option4.innerText);
}


nextButton.onclick = function () {
  if (rightWrong.innerHTML == "<h1>正解！</h1>") {
    location.reload();
  } else {
    rightWrong.innerHTML = "<h1>正しい選択選んでください。</h1>";
  }
}
