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
  日本: 'にほん',
  社会: 'しゃかい',
  理解: 'りかい',
  特徴: 'とくちょう',
  真面目: 'まじめ',
  礼儀: 'れいぎ',
  約束: 'やくそく',
  時間: 'じかん',
  集団: 'しゅうだん',
  行動: 'こうどう',
  大切: 'たいせつ',
  迷惑: 'めいわく',
  人口: 'じんこう',
  治安: 'ちあん',
  物価: 'ぶっか',
  行事: 'ぎょうじ',
  季節: 'きせつ',
  祝日: 'しゅきじつ',
  確認: 'かくにん',
  問題: 'もんだい',
  住宅: 'じゅうたく',
  風呂: 'ふろ',
  畳: 'たたみ',
  床: 'ゆか',
  生活: 'せいかつ',
  規則: 'きそく',
  食事: 'しょくじ',
  公共: 'こうきょう',
  電車: 'でんしゃ',
  移動: 'いどう',
  自転車: 'じてんしゃ',
  携帯電話: 'けいたいでんわ',
  違反: 'いはん',
  交通: 'こうつう',
  歩行者: 'ほこうしゃ',
  自動車: 'じどうしゃ',
  犯罪: 'はんざい',
  就業: 'しゅうぎょう',
  挨拶: 'あいさつ',
  報告: 'ほうこく',
  連絡: 'れんらく',
  相談: 'そうだん',
  整理整頓: 'せいりせいとん',
  服装: 'ふくそう',
  髪型: 'かみがた'
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
