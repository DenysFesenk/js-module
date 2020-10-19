// 1.Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
const firstBtn = document.getElementById('first'); //достаю кнопку из html файла 
firstBtn.addEventListener( 'click', () => { // при нажатии на клик выполняется действие 
    let name = prompt('Как вас зовут ?'); // запрашиваю имя
    alert (`Привет, ${name}!`); // Выдаю имя 
});

// 2.Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
const secondBtn = document.getElementById('second');
secondBtn.addEventListener('click', () => {
    let sizeOfSquare = prompt('Введите длину стороны квадрата.', 20);
    let sumSquare = 4 * sizeOfSquare;
    alert(sumSquare);
});


// 3.Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.
const thirdBtn = document.getElementById('third');
thirdBtn.addEventListener('click', () => {
    let yearYourBirthday = prompt('В каком году вы родились ?', 1900);
    let today = new Date();
    let yourAge = today.getFullYear() - yearYourBirthday;
    alert(`Вам ${yourAge} лет!`);
});

// 4.Запросите у пользователя радиус окружности и выведите площадь такой окружности.
const fourthBtn = document.getElementById('fourth');
fourthBtn.addEventListener('click', () => {
    let r = prompt('Задайте радиус окружности?', 30);
    let p = 3.1415926535;
    let areaOfCircle = p * (r ** 2);
    areaOfCircle = Math.floor(areaOfCircle);
    alert(`Площадь окружности ${areaOfCircle}!`);
});

// 5.Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
const fifthBtn = document.getElementById('fifth');
fifthBtn.addEventListener('click', () => {
    let distance = prompt('Какая дистанция между точкой А и Б?', 340);
    let timeToMove = prompt('За сколько времени вы планируете добраться ?', 6);
    let speed = distance / timeToMove;
    speed = Math.floor(speed);
    alert(`Вам нужно двигаться со скорость ${speed}км/ч`);
});

// 6.Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.
const sixthBtn = document.getElementById('sixth');
sixthBtn.addEventListener('click', () => {
    let USD = prompt(`Какую сумму доллоров вы желаете поменять ?`, 1000);
    const EUR = 0.85;
    let sumMoney = USD * EUR;
    alert(`Меняя ${USD} долларов, у вас получается ${sumMoney} евро!`);
});

// 7.Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.
const seventhBtn = document.getElementById('seventh');
seventhBtn.addEventListener('click', () => {
    let memory = prompt('Какой у вас обьем флешки в ГБ?', 16);
    let files = (memory * 1000) / 820;
    files = Math.floor(files);
    let residue = (memory * 1000) % 820;
    alert(`На вашу флешку с обьемом ${memory}, вы сможете загрузить ${files} файлов по 820мб. А еще у вас останется ${residue}мб😊`);
});

// 8.Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.
const eighthBtn = document.getElementById('eighth');
eighthBtn.addEventListener('click', () => {
    let amountOfMoney = prompt('Сколько у вас есть денег ?', 200);
    let chokolate = prompt('Цена одной шоколадки?', 28.5);
    let pieces = amountOfMoney / chokolate;
    pieces = Math.floor(pieces);
    let surrender = amountOfMoney % chokolate;
    let currency = 'гривен';
    alert(`На ${amountOfMoney}гривен вы можете купить ${pieces} шоколадок. И у вас останется ${surrender} ${currency}!`);
});

// 9.Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).
const ninthBtn = document.getElementById('ninth');
ninthBtn.addEventListener('click', () => {
    let num = prompt('Введите любое число! Желательно трехзначное!', 598);
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
    let num = prompt('Введите сумму вклада!');
    let months = prompt('На сколько месяцев вы хотите внести сумму ?');
    let sum = (num * 0.05) / 12 * months;
    sum = Math.floor(sum);
    alert(`За ${months} месяца, вам будет начисленно ${sum} гривну.`);
});

//1.1 Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
const firstOne =document.getElementById('firstOne');
firstOne.addEventListener('click', () => {
    let age = +prompt('Сколько вам лет?');

    if( age < 12) {
        alert('Вы еще ребенок👶');
    } else if ( age => 12 || age < 18) {
        alert('Вы все еще подросток 👦');
    } else if ( age => 18 || age < 60) {
        alert('Поздравляю, вы уже взрослый 👱‍♂️');
    } else if( age => 60 || age <= 100) {
        alert('Вы уже пенсионер 👴 еще чуть чуть ...');
    } else {
        alert('Странно, вы все еще живы🤔');
    }
    console.log(age);
});