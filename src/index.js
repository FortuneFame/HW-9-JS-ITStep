// -------------------------------- Global --------------------------------

function checking(x) {
    let ret;
    if (x) {
        if (isNaN(x)||(!x.trim())) {
            ret = false;
        }
        else if (x < 0) {
            ret = false;
        }
        else if (x % 1 != 0) {
            ret = false    
        }
        else {
            ret = true;
        }
    }
    else {
        ret = false;
    }
    return ret;
}


// --------------------------------- Task-1 ---------------------------------

btn1.onclick = function () {

    let userInput = inputTask1.value

    let upperCase = 0;
    let lowerCase = 0;
    let space = 0;
    let symbols = 0;
    let numbers = 0;

    let result = "";

    if (userInput == null || userInput == "") {
        result = "<h2>" + "Что-то пошло не так, попробуйте еще раз 🥺!!Error!!" + "</h2>"
    }
    else {
        for (let i = 0; i < userInput.length; i++) {
            if ((userInput[i] >= "A" && userInput[i] <= "Z")
                || (userInput[i] >= "А" && userInput[i] <= "Я")
                || userInput[i] == "І"
                || userInput[i] == "Ї"
                || userInput[i] == "Ё") {
                upperCase++;
            }
            else if ((userInput[i] >= "a" && userInput[i] <= "z")
                || (userInput[i] >= "а" && userInput[i] <= "я")
                || userInput[i] == "і"
                || userInput[i] == "ї"
                || userInput[i] == "ё") {
                lowerCase++;
            }
            else if (userInput[i] === " ") {
                space++;
            }
            else if (userInput[i] >= "0" && userInput[i] <= "9") {
                numbers++;
            }
            else {
                symbols++;
            }
        }
        result += "<p>" + "Верхний регистр: " + " " + upperCase + "</p>";
        result += "<p>" + "Нижний регистр: " + " " + lowerCase + "</p>";
        result += "<p>" + "Пробелов:" + " " + space + "</p>";
        result += "<p>" + "Символов" + " " + symbols + "</p>";
        result += "<p>" + "Чисел:" + " " + numbers + "</p>";
    }
    return document.getElementById('result1').innerHTML = result;
}

// --------------------------------- Task-2 ---------------------------------

btn2.onclick = function () {

    let numberUser = inputTask2.value.replace(/\./g, '');
    let numberToString = "";

    let first = [
        "Ноль",
        "Один",
        "Два",
        "Три",
        "Четыре",
        "Пять",
        "Шесть",
        "Семь",
        "Восемь",
        "Девять"
    ];
    let second = [
        "Десять",
        "Одиннадцать",
        "Двенадцать",
        "Тринадцать",
        "Четырнадцать",
        "Пятнадцать",
        "Шестнадцать",
        "Семнадцать",
        "Восемнадцать",
        "Девятнадцать"
    ];
    let third = [
        "Двадцать",
        "Тридцать",
        "Сорок",
        "Пятьдесят",
        "Шестьдесят",
        "Семьдесят",
        "Восемьдесят",
        "Девяносто"
    ];

    if (!checking(numberUser)) {
        numberToString = "<h2>" + "Что-то пошло не так, попробуйте еще раз 🥺!!Error!!" + "</h2>";
    }
    else if (numberUser >= 0 && numberUser <= 9) {
        numberToString = "<h2>" + first[numberUser] + "</h2>";
    }
    else if (numberUser >= 10 && numberUser <= 19) {
        numberToString = "<h2>" + second[numberUser - 10] + "</h2>";
    }
    else if (numberUser >= 20 && numberUser <= 99) {
        let str = `${numberUser}`;
        str = str.split("");
        let firstNumber = str[0];
        let secondNumber = str[1];
        numberToString = "<h2>" + third[firstNumber - 2] + " " + first[secondNumber] + "</h2>";
    }
    else {
        numberToString = "<h2>" + "Что-то пошло не так, попробуйте еще раз 🥺!!Error!!" + "</h2>";
    }

    return document.getElementById('result2').innerHTML = numberToString;
}


// --------------------------------- Task-3 ---------------------------------


btn3.onclick = function () {

    let textUser = inputTask3.value;
    
    let result = [];

    for (let i = 0; i < textUser.length; i++) {
        if (/^\d+$/.test(textUser[i])) {
            result.push('_');
        }
        else if (textUser[i].toUpperCase() === textUser[i]) {
            result.push(textUser[i].toLowerCase());
        }
        else if (textUser[i].toLowerCase() === textUser[i]) {
            result.push(textUser[i].toUpperCase());
        }
        else {
            result.push(textUser[i]);
        }
    }

    res = result.join('');

    return document.getElementById('result3').innerHTML = "<h3 class = \"text\" >" + res + "</h3>";
};


// --------------------------------- Task-4 ---------------------------------


btn4.onclick = function () {
    let textUser = inputTask4.value.replace(/[^a-z-\s]/gi, '');
    let result = "";
    
    if (textUser === "") {
        result += "<h2>" + "Что-то пошло не так, попробуйте еще раз 🥺!!Error!!" + "</h2>";
    }
    for (let i = 0; i < textUser.length; ++i) {
        if (textUser[i] !== "-") {
            result += textUser[i];
        }
        
        else {
            i++;
            result += textUser[i].toUpperCase();
        }
    }
    return document.getElementById('result4').innerHTML = "<h3 class = \"text\" >" + result + "</h3>";
}


// --------------------------------- Task-5 ---------------------------------


btn5.onclick = function () {

    let textUser = inputTask5.value.replace(/[^a-zа-яёії\s]/gi, '');

    let buf = [];
    let result = "";
    buf = textUser.split(" ");
    
    for (let i = 0; i < buf.length; ++i) {

        for (let j = 0; j === 0; ++j) {

            if ((buf[i][j] == Number)||(buf[i][j] == undefined)||(buf[i][j] == NaN)) {
                result = "<h2>" + "Что-то пошло не так, попробуйте еще раз 🥺!!Error!!" + "</h2>";
                break
            }
            else {
                result += buf[i][j];
            }
        }
    }

    return document.getElementById('result5').innerHTML = "<h3 class = \"text\" >" + result.toUpperCase() + "</h3>"
}


// --------------------------------- Task-6 ---------------------------------


btn6.onclick = function () {

    let textUser = inputTask6.value;
 
    let arr1;
    let protocol;
    let domain;
    let arr2;
    let way;
    let result = "";

    arr1 = textUser.split("://");
    protocol = arr1[0];

    arr2 = arr1[1].split("/");
    domain = arr2[0];
 
    arr2.shift();
    way = arr2.join("/");
 

    result = "<p>" + "Протокол:" + " " + protocol + "</p>";
    result += "<p>" + "Протокол:" + " " + domain + "</p>";
    result += "<p>" + "Протокол:" + " " + way + "</p>";
    return document.getElementById('result6').innerHTML = result;
}


// --------------------------------- Task-7 ---------------------------------


btn7.onclick = function () {

    let textUser = inputTask7.value;
    let sumbUser = inputTask7symbol.value;

    let result = ""
    let index = 0;
    let arr = [];

    for (let i = 0; i < textUser.length; i++) {
        if (textUser[i] === sumbUser) {
            arr[index] = textUser.substring(0, i);
            index++;
            textUser = textUser.substring(i + 1);
            i = 0
        }
    }
    arr[index] = textUser.substring(0);
    result = "<h3>" + arr.join(", ") + "</h3>";

    return document.getElementById('result7').innerHTML = result;
}

