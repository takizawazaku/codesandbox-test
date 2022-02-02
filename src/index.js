/**
 * const、let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可能
// // val3 = "const変数を上書き";

// // constは再宣言不可能
// const val3 = 'const変数を再宣言'

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけぇ",
//   age: "28"
// };
// val4.name = "jak";
// val4.address = "Hiroshima";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "じゃけぇ";
// const age = 28;
// // 「私の名前はじゃけぇです。年齢は28歳です。」

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// オブジェクトで使うケース
// 通常の書き方
// const myProfile = {
//   name: "じゃけぇ",
//   age: 28
// };
// // こういう書き方もできるが長くなって面倒
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);
// 分割代入してみる
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// 配列で使うケース
// 通常の書き方
// const myProfile = ["じゃけぇ", 28];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);
// // 分割代入してみる
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * 関数のフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちわ!${name}さん!`);
// sayHello(); // 初期値がない場合、「こんにちわ!undefinedさん!」となってしまう
// sayHello("じゃけぇ");

/**
 * スプレッド構文 ...
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);     // [1, 2]
// console.log(...arr1);  // 1 2
// この例だとわかりやすい
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]); // 3
// sumFunc(...arr1);          // 3

// まとめる(分割代入と一緒に使われることが多い)
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1); // 1
// console.log(num2); // 2
// console.log(arr3); // [3, 4, 5]

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6); // [10, 20]
// arr6[0] = 100;
// console.log(arr6); // [100, 20]
// console.log(arr4); // [10, 20]

// const arr7 = [...arr4, ...arr5];
// console.log(arr7); // [10, 20, 30, 40]

// 配列コピーするならシンプルにarr4を入れちゃダメなの？
// const arr8 = arr4;
// console.log(arr8); // [10, 20] 確かにコピーされてる
// arr8[0] = 100;
// console.log(arr8); // [100, 20] 値を入れ替えると…
// console.log(arr4); // [100, 20] コピー元のarr4まで値が変わってしまう(参照渡しになっている)

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "じゃけぇ"];
// for文の場合
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(`${i + 1}番目は${nameArr[i]}です`);
// }

// mapの基本的な構文
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// for文で3行で書いてたものをmap関数で1行で書く例
// nameArr.map((name, i) => console.log(`${i + 1}番目は${name}です`));

// filterで数値の配列から奇数のみ抽出する
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr); // [1, 3, 5]

// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけぇ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr); // ["田中さん", "山田さん", "じゃけぇ"]

/**
 * 三項演算子 ※ES2015からではないがReactでよく使うので解説
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 < 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています!!" : "許容範囲内です";
// };
// console.log(checkSum(10, 90));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// const flag1 = true;
// const flag2 = true;
// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// 「||」 は左側がfalseなら右側を返す。左側がtrueなら左側を返す。
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

// 「&&」は左側がtrueなら右側を返す。左側がfalseなら左側を返す。
// const num2 = null;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
