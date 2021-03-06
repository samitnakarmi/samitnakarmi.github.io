const listOfWords = document.querySelector('#list-of-words');

let wordList = {
  出力: 'output',
  入力: 'input',
  コメント: 'comment',
  実行: 'execution',
  指定: 'designation',
  足し算: 'addition',
  引き算: 'substraction',
  掛け算: 'multiplication',
  割り算: 'division',
  演算子: 'operator',
  実行: 'execution',
  変数: 'variable',
  代入: 'assign',
  値: 'value',
  定義: 'declare',
  参照: 'reference',
  文字列: 'string',
  整数: 'integer',
  引数: 'argument',
  更新: 'update',
  表示: 'display',
  反復: 'loop',
  改行: 'new line',
  連続: 'continuous',
  分岐: 'branch',
  正規表現: 'regular expression',
  初期値: 'initial value',
  真: 'true',
  偽: 'false',
  比較: 'comparison',
  論理演算子: 'logical operator',
  判定: 'judgement',
  格納: 'storage',
  括弧: 'brackets',
  置き換える: 'replace',
  合致: 'match',
  削除: 'delete',
  成功: 'success',
  失敗: 'failure',
  追加: 'add',
  保持: 'retention',
  上限: 'upper limit',
  下限: 'lower limit',
  数値: 'numerical value',
  桁: 'digit',
  要素: 'element',
  想定: 'assumption',
  順序: 'sequence',
  宣言: 'decleration',
  代入: 'assignment',
  参照: 'reference',
  処理: 'processing',
  範囲: 'range',
  中断: 'interruption',
  拡張子: 'extension',
  入れ子: 'nest',
  階層: 'hierarchy',
  自動化: 'automation',
  作成: 'creation',
  対象: 'target',
  記録: 'record',
  変更履歴: 'change history',
  合併: 'merge',
  編集中: 'modified',
  差分: 'difference',
  配列: 'array',
  データ構造: 'data structure',
  伝播: 'transmission',
  大次元配列: 'multidimensional array',
  二次元配列: 'two dimensional array',
  可読性: 'readability',
  逆転: 'reversal',
  定数: 'constant',
  雛形: 'model',
  二進数: 'binary number',
  修飾子: 'modifier',
  公開: 'public',
  非公開: 'private',
  実体: 'entity',
  参照型: 'reference type',
  最適化: 'optimization',
  例外: 'exception',
  例外処理: 'exception handling',
  ナルポ: 'null pointer exception',
  実行時: 'run time',
  圧縮: 'compression',
  保守性: 'maintainability',
  処理速度: 'processing speed',
  増加: 'increment',
  静的: 'static',
  唯一: 'unique',
  暗黙的: 'implicitly',
  明示的: 'explicitly',
  計測: 'measurement',
  割った余り: 'remainder',
};

for (var key in wordList) {
  listOfWords.innerHTML += `<h1>${key}:${wordList[key]}</h1>`;
}
