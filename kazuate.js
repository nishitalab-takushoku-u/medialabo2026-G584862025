// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// そのほか，必要に応じて変数を宣言してもよい

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  kaisu++;
  document.querySelector('#kaisu').textContent = kaisu;
  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  // ここから: テキストボックスに指定された数値を yoso に代入する
  let yoso;
  let input = document.querySelector('#yoso');
  yoso = Number(input.value);
  // ここまで: テキストボックスに指定された数値を yoso に代入する
  
  // ここから: 正解判定する
  if(yoso == kotae) {
      document.querySelector('#result').textContent='正解です. おめでとう!';
  } else {
    if(kaisu==3){
      document.querySelector('#result').textContent = 'まちがい. 残念でした答えは'+ kotae + 'です. ';
    } else if (yoso<kotae){
      document.querySelector('#result').textContent = 'まちがい. 答えはもっと大きいですよ';
    } else {
      document.querySelector('#result').textContent = 'まちがい. 答えはもっと小さいですよ'
    }
  }
  // 　　　　  正解/不正解のときのメッセージを表示する

  // ここまで: 正解判定する
}

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
let button = document.querySelector('#kaito');
button.addEventListener('click', hantei);
// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録
