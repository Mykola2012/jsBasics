console.group("Таски на переменные:");

const a = 5;
const b = 2;
console.log(a * b);

const c = 20;
const d = 2;
console.log(c / d);

const e = 4;
const f = 6;
console.log(e + f);

const number = 11;
const bool = true;
const lineJs = "iava script";
const lineNumb = "100";
console.log(number, bool, lineJs, lineNumb);

let num = 1;
num += 11;
num -= 11;
num *= 11;
num /= 11;
num++;
num--;

console.groupEnd();

console.group("Таски на prompt:");

const sguareIt = Number(prompt("Введите число:"));
alert(sguareIt ** 2);

const numb1 = Number(prompt("Введите первое число:"));
const numb2 = Number(prompt("Введите второе число:"));
alert((numb1 + numb2) / 2);

const timeNumb = Number(prompt("Введите количество минут:"));
alert("Это " + timeNumb * 60 + " секунд");

const greeting = "Hello, ";
const userName = prompt("Введите свое имя:");
alert(greeting + userName);

console.groupEnd();

console.group("Таски на условия:");

const userNumb = Number(prompt("Введите число '10'"));
if (userNumb === 10) {
  alert("Верно");
} else {
  alert("Неверно");
}

const test = true;

if (test) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

if (!test) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

const sumUser = Number(prompt("Введите Вашу сумму:"));

if (sumUser > 500 && sumUser <= 800) {
  console.log(
    "Ваша сумма с учетом скидки в 3% составила: " +
      (sumUser - (sumUser / 100) * 3) +
      " грн."
  );
} else if (sumUser > 800) {
  console.log(
    "Ваша сумма с учетом скидки в 5% составила: " +
      (sumUser - (sumUser / 100) * 5) +
      " грн."
  );
} else {
  console.log("Ваша сумма: " + sumUser + " грн.");
}

console.groupEnd();

console.group("Таски на циклы:");

let stepsCount = 26;
const currentStep = 0;

while (--stepsCount >= currentStep) {
  console.log(stepsCount);
}

for (let i = 25; i >= currentStep; i--) {
  console.log(i);
}

let currentPage = 5;
const pageCount = 50;

while (currentPage++ <= pageCount) {
  if (currentPage % 5 === 0) {
    console.log(currentPage);
  }
}

for (let i = 10; i <= 50; i += 5) {
  console.log(i);
}

let sum = 0;
let numbI = 0;
const sumCount = 100;

while (++numbI <= sumCount) {
  sum += numbI;
}
console.log("sum =", sum);

let sumEnd = 0;

for (let i = 1; i <= 100; ++i) {
  sumEnd += i;
}
console.log("sumEnd =", sumEnd);

console.groupEnd();

console.group("Таски на switch..case.:");

const dayWeek = Number(prompt("Введите номер дня недели:"));

switch (dayWeek) {
  case 1:
    alert("Понедельник");
    break;
  case 2:
    alert("Вторник");
    break;
  case 3:
    alert("Среда");
    break;
  case 4:
    alert("Четверг");
    break;
  case 5:
    alert("Пятница");
    break;
  case 6:
    alert("Суббота");
    break;
  case 7:
    alert("Воскресенье");
    break;
  default:
    alert("Введите номер от 1 до 7");
}

const day = 0;

switch (day) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
    console.log("Первая декада");
    break;
  case 11:
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
  case 18:
  case 19:
  case 20:
    console.log("Вторая декада");
    break;
  case 21:
  case 22:
  case 23:
  case 24:
  case 25:
  case 26:
  case 27:
  case 28:
  case 29:
  case 30:
  case 31:
    console.log("Третья декада");
    break;
  default:
    console.log("Введите число от 1 до 31");
}

console.groupEnd();
