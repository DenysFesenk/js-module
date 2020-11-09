export const basicsHW = () => {
    // 1.Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
const firstBtn = document.getElementById('first'); //достаю кнопку из html файла 
firstBtn.addEventListener( 'click', () => { // при нажатии на клик выполняется действие 
    const name = prompt('Как вас зовут ?'); // запрашиваю имя
    alert (`Привет, ${name}!`); // Выдаю имя 
});

// 2.Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
const secondBtn = document.getElementById('second');
secondBtn.addEventListener('click', () => {
    const sizeOfSquare = prompt('Введите длину стороны квадрата.', 20);
    const sumSquare = 4 * sizeOfSquare;
    alert(sumSquare);
});

// 3.Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.
const thirdBtn = document.getElementById('third');
thirdBtn.addEventListener('click', () => {
    const yearYourBirthday = prompt('В каком году вы родились ?', 1900);
    const today = new Date();
    const yourAge = today.getFullYear() - yearYourBirthday;
    alert(`Вам ${yourAge} лет!`);
});

// 4.Запросите у пользователя радиус окружности и выведите площадь такой окружности.
const fourthBtn = document.getElementById('fourth');
fourthBtn.addEventListener('click', () => {
    const r = prompt('Задайте радиус окружности?', 30);
    const p = 3.1415926535;
    const areaOfCircle = p * (r ** 2);
    areaOfCircle = Math.floor(areaOfCircle);
    alert(`Площадь окружности ${areaOfCircle}!`);
});

// 5.Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
const fifthBtn = document.getElementById('fifth');
fifthBtn.addEventListener('click', () => {
    const distance = prompt('Какая дистанция между точкой А и Б?', 340);
    const timeToMove = prompt('За сколько времени вы планируете добраться ?', 6);
    const speed = distance / timeToMove;
    speed = Math.floor(speed);
    alert(`Вам нужно двигаться со скорость ${speed}км/ч`);
});

// 6.Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.
const sixthBtn = document.getElementById('sixth');
sixthBtn.addEventListener('click', () => {
    const USD = prompt(`Какую сумму доллоров вы желаете поменять ?`, 1000);
    const EUR = 0.85;
    const sumMoney = USD * EUR;
    alert(`Меняя ${USD} долларов, у вас получается ${sumMoney} евро!`);
});

// 7.Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.
const seventhBtn = document.getElementById('seventh');
seventhBtn.addEventListener('click', () => {
    const memory = prompt('Какой у вас обьем флешки в ГБ?', 16);
    const files = (memory * 1000) / 820;
    files = Math.floor(files);
    const residue = (memory * 1000) % 820;
    alert(`На вашу флешку с обьемом ${memory}, вы сможете загрузить ${files} файлов по 820мб. А еще у вас останется ${residue}мб😊`);
});

// 8.Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.
const eighthBtn = document.getElementById('eighth');
eighthBtn.addEventListener('click', () => {
    const amountOfMoney = prompt('Сколько у вас есть денег ?', 200);
    const chokolate = prompt('Цена одной шоколадки?', 28.5);
    const pieces = amountOfMoney / chokolate;
    pieces = Math.floor(pieces);
    const surrender = amountOfMoney % chokolate;
    const currency = 'гривен';
    alert(`На ${amountOfMoney}гривен вы можете купить ${pieces} шоколадок. И у вас останется ${surrender} ${currency}!`);
});

// 9.Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).
const ninthBtn = document.getElementById('ninth');
ninthBtn.addEventListener('click', () => {
    const num = prompt('Введите любое число! Желательно трехзначное!', 598);
    function getReversedNum(num) {
        let result = 0;
    while (num) {
        result = result * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return result;
    }
    alert(getReversedNum(num));
});

// 10.Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.
const tenthBtn = document.getElementById('tenth');
tenthBtn.addEventListener('click', () => {
    const num = prompt('Введите сумму вклада!');
    const months = prompt('На сколько месяцев вы хотите внести сумму ?');
    const sum = (num * 0.05) / 12 * months;
    sum = Math.floor(sum);
    alert(`За ${months} месяца, вам будет начисленно ${sum} гривну.`);
});
}

