window.addEventListener('load', init);

const currentWord = document.querySelector('#current-word');
const wordInput = document.querySelector('#word-input');
const tries = document.querySelector('#tries');
const scoreSelector = document.querySelector('#score');
const message = document.querySelector('#message');
const learntWords = document.querySelector('#learnt-words');

let words = {
  勉強: 'べんきょう',
  料理: 'りょうり',
  健康: 'けんこう',
  合格: 'ごうかく',
  能力: 'のうりょく',
  試験: 'しけん',
};

let currentWordGlobal;
let triesLeft = 3;
let scoreValue = 0;

function init() {
  showWord(words);
  setTries();
}

function setTries() {
  if (triesLeft > 0) {
    tries.innerHTML = triesLeft;
  } else if (triesLeft == 0) {
    tries.innerHTML = 0;
    message.innerHTML = 'Correct Hiragana: ' + words[currentWordGlobal] + '<br>Press Enter to Continue';

    wordInput.addEventListener('keyup', function(e) {
      if (e.keyCode === 13 && triesLeft <= 0) {
        location.reload();
      }
    });
  }
}

function showWord() {
  let key = Object.keys(words);
  let randIndex = Math.floor(Math.random() * key.length);
  let randWord = key[randIndex];

  currentWord.innerHTML = randWord;
  currentWordGlobal = randWord;
}

function setScore() {
  scoreSelector.innerHTML = scoreValue;
}

function learntWord() {
  learntWords.innerHTML += '<h3>' + currentWordGlobal + ' : ' + words[currentWordGlobal] + '</h3>';
}

wordInput.addEventListener('keyup', function(e) {
  if (e.keyCode === 13) {
    if (words[currentWordGlobal] === wordInput.value) {
      message.innerHTML = 'Correct, Try next.';
      // Add learnt word to side
      learntWord();
      wordInput.value = '';
      scoreValue++;
      setScore();
      showWord();
    } else {
      wordInput.value = '';
      message.innerHTML = 'Incorrect Hiragana, Try Again!';
      triesLeft--;
      setTries();
    }
  }
});
