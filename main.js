// Homework 2

// 0

let day = 0;

switch (day) {
    case 1:
        console.log("19:00 — встреча с друзьями");
        break;
    case 2:
        console.log("18:00 — поход в театр");
        break;
    case 3:
        console.log("19:00 — спортзал");
        break;
    case 4:
        console.log("19:00 — посетить занятие по йоге");
        break;
    case 5:
        console.log("Пятничный кураж");
        break;
    case 6:
        console.log("Заниматься домашними делами");
        break;
    case 7:
        console.log("Спортзал, спа");
        break;
    default:
        console.log("Указан несуществующий день недели");
}

// 1 

let time = 10;
let variant = prompt("Введите город или код:", "");
let variant = "Ростов";
let price;
if ((variant == "Москва") || ("905")) {
    price = 4.15;
    console.log("Стоимость " + time + "-минутного звонка - " + time * price + " руб.");
} else if ((variant == "Ростов") || ("194")) {
    price = 1.98;
    console.log("Стоимость " + time + "-минутного звонка - " + time * price + " руб.");
} else if ((variant == "Краснодар") || ("491")) {
    price = 2.69;
    console.log("Стоимость " + time + "-минутного звонка - " + time * price + " руб.");
} else if ((variant == "Киров") || ("800")) {
    price = 5.00;
    console.log("Стоимость " + time + "-минутного звонка - " + time * price + " руб.");
} else console.log("Указаны неверные данные");




// 2

let $min = 60;

if (($min >= 0) && ($min <= 15)) {
    console.log("Число " + $min + " относится к первой четверти часа");
}
if (($min > 15) && ($min <= 30)) {
    console.log("Число " + $min + " относится ко второй четверти часа");
}
if (($min > 30) && ($min <= 45)) {
    console.log("Число " + $min + " относится к третьей четверти часа");
}
if (($min > 45) && ($min <= 59)) {
    console.log("Число " + $min + " относится к четвертой четверти часа");
}

//3

let $num = 2;
let $result1 = "Зима";
let $result2 = "Весна";
let $resulе3 = "Лето";
let $result4 = "Осень";

if ($num == 1) {
    console.log($result1);
} else if ($num == 2) {
    console.log($result2);
} else if ($num == 3) {
    console.log($result3);
} else if ($num == 4) {
    console.log($result4);
} else {
    console.log("Несуществующее значение");
}


//4

//4.0.

let height = 23;
let width = 10;
let s = height * width;

console.log("Площадь прямоугольника = " + s + " см^2");

// 4.1.

let heightC = 10;
let dC = 4;
let rC = dC / 2;

let v = 3.14 * Math.pow(rC, 2) * heightC;
console.log(Math.round(v));


//4.2.
let n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));

console.log(k);

// 4.3
// let n = 12;
// let nFib = Math.round(Math.pow((Math.sqrt(5) + 1) / 2, n) / Math.sqrt(5));
// console.log(nFib);

//5.0
let num5 = 45;

while ((num5 >= 45) && (num5 <= 67)) {
    console.log(num5);
    num5++;
}

// 5.1
let num51 = 45;

while (num51 <= 670) {
    if (num51 % 10 == 0) {
        console.log(num51);
    }
    num51++;
}


// 5.2.1.
let num521 = 45;

for (let i = 45; i <= 67; i++) {
    console.log(i);

}



// 5.2.2.
let numMin = 45;
let numMax = 670;

for (let i = numMin; i <= numMax; i++) {
    if (i % 10 == 0) {
        console.log(i + " ");
    }
}


// 6
let numbeR = 6;
let sum = 0;

while (numbeR > 0) {
    if (numbeR % 2 == 0) {
        sum = sum + numbeR;
    }
    numbeR--;
}
console.log(sum);

// 7
let flag = true;
while (flag) {
    let x = Number(prompt("Введите 1й операнд:"));
    let y = Number(prompt("Введите 2й операнд:"));
    let operation = prompt("Введите операцию — '+, -, /, *'");

    switch (operation) {
        case '-':
            alert(x + " - " + y + " = " + Number(x - y));
            break;
        case '+':
            alert(x + " + " + y + " = " + Number(x + y));
            break;
        case '*':
            alert(x + " * " + y + " = " + Number(x * y));
            break;
        case '/':
            if (y == 0) {
                alert("Деление на 0 невозможно.");
                break;
            } else {
                alert(x + " / " + y + " = " + Number(x / y));
                break;
            }
            case '0':
                flag = false;
                break;

    }
}

// 8

let numb$ = 255;
let sum_8 = 0;


while (numb$ > 0) {
    if (numb$ % 2 != 0) {
        sum_8 = sum_8 + numb$;
    }
    numb$--;
}
console.log(sum_8);

// 9

for (let i = 1; i <= 10; i++) {
    console.log("3 * " + i + " = " + 3 * i);

}

// 10

let userNumber = Number(prompt("Укажите любое положительное число", ""));
let sum_10 = 0;

for (let i = 1; i <= userNumber; i++) {
    sum_10 += i;
}
alert(sum_10);

//11 while_switch

let attemptNumber = 0;
while (attemptNumber < 3) {
    let userAnswer = prompt("Ваш ответ?");
    switch (userAnswer) {
        case "Сдаюсь":
            alert("Правильный ответ: Троллейбус");
            attemptNumber = 4;
            break;
        case "Троллейбус":
            alert("Правильно!");
            attemptNumber = 4;
            break;
        default:
            alert("Подумай еще.");
            break;
    }
    attemptNumber++;
}

// //11 for_if
let rightAnswer = "Троллейбус";
for (let i = 1; i < 4; i++) {
    let userAnswer = prompt("Ваш ответ?");
    if (userAnswer == "Сдаюсь") {
        alert("Правильный ответ: Троллейбус");
        i = 4;
    } else if (userAnswer == rightAnswer) {
        alert("Правильно!");
        i = 4;
    } else alert("Подумай еще.");
}


//12
let startRange = Number(prompt("Введите начало диапазона:", ''));
let endRange = Number(prompt("Введите конец диапазона:", ''));
let sum_12 = 0;

for (let i = startRange; i <= endRange; i++)
    if (i % 2 != 0) sum_12 += i;
alert(sum_12);

//13

let userNumb = prompt("Укажите число", "");
let factorial = 1;

for (let i = 1; i <= userNumb; i++) {
    factorial = factorial * i;
}
alert(factorial);

// 14

let num14 = Number(prompt("Введите основание:"));
let power = Number(prompt("Введите степень:"));
let answer = num14;

for (let i = 1; i < power; i++) {
    answer *= num14;
    console.log(answer);
}
alert(num14 + " в степени " + power + " = " + answer);