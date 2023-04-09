// // 2. Написать функцию, которая принимает двузначное число
// // и возвращает его в текстовом виде.
// // Например: 35 – тридцать пять, 89 – восемьдесят девять,
// // 12 – двенадцать.

// function numberToString(number) {
//   let first = [
//     "Один",
//     "Два",
//     "Три",
//     "Чотири",
//     "Пять",
//     "Шість",
//     "Сім",
//     "Вісім",
//     "Девять"
//   ];
//   let second = [
//     "Десять",
//     "Одинадцять",
//     "Дванадцять",
//     "Тринадцять",
//     "Чотирнадцять",
//     "Пятнадцять",
//     "Шістнадцять",
//     "Сімнадцять",
//     "Вісімнадцять",
//     "Дев'ятнадцять"
//   ];
//   let third = [
//     "Двадцять",
//     "Тридцять",
//     "Сорок",
//     "П'ятдесят",
//     "Шістдесят",
//     "Сімдесят",
//     "Вісімдесят",
//     "Дев'яносто"
//   ];
//   if (number > 0 && number <= 9) {
//     return first[number - 1];
//   }
//   if (number >= 10 && number <= 19) {
//     return second[number - 10];
//   }
//   if (number >= 20 && number <= 99) {
//     let str = `${number}`;
//     str = str.split("");
//     let firstNumber = str[0];
//     let secondNumber = str[1];
//     return `${third[firstNumber - 2]} ${first[secondNumber - 1]}`;
//   }
// }
// let firstExample = prompt("Enter number ( 0 - 99)");
// alert(numberToString(firstExample));

// // 3. Написать функцию, которая заменяет в полученной строке
// // большие буквы на маленькие, маленькие – на большие, а
// // цифры – на знак нижнего подчеркивания.

// let changeString = function() {
//   let str = prompt("Enter some text:", "Hello world (111)");
//   let buf = "";
//   var regExp = /\d+/;
//   console.log(str.match(regExp));
//   for (var i = 0; i < str.length; ++i) {
//     if (str[i].toUpperCase() === str[i]) {
//       buf += str[i].toLowerCase();
//     } else if (str === str.match(regExp)) {
//       buf += "_";
//     } else {
//       buf += str[i].toUpperCase();
//     }
//   }
//   return buf;
// };
// let a = changeString();
// console.log(a);

// // 4. Написать функцию, которая преобразует названия cssстилей с дефисом в название в СamelСase стиле: font-size
// // в fontSize, background-color в backgroundColor, textalign в textAlign.

// function toCamelCase(str) {
//   let buf = " ";
//   for (let i = 0; i < str.length; ++i) {
//     if (str[i] !== "-") {
//       buf += str[i];
//     } else {
//       i++;
//       buf += str[i].toUpperCase();
//     }
//   }
//   console.log(buf);
//   return buf;
// }

// toCamelCase("font-size");
// toCamelCase("background-color");
// toCamelCase("text-align");

// // 5. Написать функцию, которая принимает словосочетание
// // и превращает его в аббревиатуру.
// // Например: cascading style sheets в CSS, объектно ориентированное программирование в ООП.

// function toABB(str) {
//   let buf = [];
//   let res = "";
//   buf = str.split(" ");

//   for (var i = 0; i < buf.length; ++i) {
//     for (var j = 0; j === 0; ++j) {
//       res += buf[i][j].toUpperCase();
//     }
//   }
//   console.log(res);
//   return res;
// }

// toABB("cascading style sheets");
// toABB("объектно ориентированное программирование");



// btn6.onclick = function () {
    
//     let arr1;
//     let protocol;
//     let domain;
//     let arr2;
//     let way;
//     let result = "";

//     arr1 = url.split("://");
//     protocol = arr1[0];

//     arr2 = arr1[1].split("/");
//     domain = arr2[0];
 
//     arr2.shift();
//     way = arr2.join("/");
 

//     result = "<h3 class = \"text\" >" + "Протокол:" + " " + protocol + "</h3>";
//     result += "<h3 class = \"text\" >" + "Протокол:" + " " + domain + "</h3>";
//     result += "<h3 class = \"text\" >" + "Протокол:" + " " + way + "</h3>"


//     return document.getElementById('result6').innerHTML = result;
  
// }