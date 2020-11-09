export const typesHW = () => {
//1.1 Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
const firstOne = document.getElementById('firstOne').addEventListener('click', () => {
    const age = Number(prompt('Сколько вам лет?'));

    if( age < 12) {
        alert('Вы еще ребенок👶');
    } else if (age < 18) {
        alert('Вы все еще подросток 👦');
    } else if (age < 60) {
        alert('Поздравляю, вы уже взрослый 👱‍♂️');
    } else if(age <= 100) {
        alert('Вы уже пенсионер 👴 еще чуть чуть ...');
    } else {
        alert('Странно, вы все еще живы🤔');
    }
    console.log(TypeOf.age);
});

// 2.2 Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
const secondTwo = document.getElementById('secondTwo').addEventListener('click', () => {
    const randomNumber = Number(prompt('Введите число от 0 до 9'));
    switch (randomNumber) {
        case 1:
            alert('1 - !');
            break;
        case 2:
            alert('2 - @');
            break;
        case 3:
            alert('3 - #');
            break;
        case 4:
            alert('4 - $');
            break;
        case 5:
            alert('5 - %');
            break;
        case 6:
            alert('6 - ^');
            break;
        case 7:
            alert('7 - &');
            break;
        case 8:
            alert('8 - *');
            break;
        case 9:
            alert('9 - "("');
            break;
        case 0:
            alert('0 - ")"');
            break;
        default:
            alert('странно!');
            break;
    }
});

// 2.3 Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
const thirdThree = document.getElementById('thirdThree').addEventListener('click', () => {
    const randomNumber = prompt('Введите трехзначное число на проверку', 123);
    randomNumber[0] == randomNumber[1] || randomNumber[1] == randomNumber[2] || randomNumber[2] == randomNumber[0]? alert('Найдено совпадение'): alert('Совпадение не найдено');
})

// 2.4 Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
const fourthFore = document.getElementById('fourthFore').addEventListener('click', () => {
    const randomYear = prompt('Угадайте высокосный год', 1994);
    randomYear % 400 == 0 || randomYear % 4 == 0 && randomYear % 100 !== 0? alert('Верно, год высокосный!'): alert('Жаль, год не высокосный!')
})

// 2.5 Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
const fifthFive = document.getElementById('fifthFive').addEventListener('click', () => {
    const fiveDigitNumber = prompt('Введите пятизначное число', 12321);
    if (fiveDigitNumber < 10000 || fiveDigitNumber > 99999){
        alert('Извините, вы ввели не пятизначное число')
    } else if(fiveDigitNumber[0] == fiveDigitNumber[4] && fiveDigitNumber[1] == fiveDigitNumber[3]){
        alert('Число является палиндромом')
    } else {
        alert('Число НЕ является палиндромом')
    }
})

// 2.6 Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.
const sixthSix = document.getElementById('sixthSix').addEventListener('click', () => {
    const amountUSD = prompt('Сколько USD вы хотите поменять ?', 300);
         currency = prompt('В какую валюту хочет перевести: EUR, UAN, AZN?', 'UAN');
    const sumEUR = 0.85 * amountUSD;
    const sumUAN = 28.34 * amountUSD;
    const sumAZN = 1.7 * amountUSD;
    switch(currency){
        case "EUR":
        case "eur":
            alert(`Вы получите ${sumEUR} евро`);
            break;
        case "UAN":
        case "uan":
            alert(`Вы получите ${sumUAN} гривен`);
            break;
        case "AZN":
        case "azn":
            alert(`Вы получите ${sumAZN} азербайджанских манат`); 
            break;
        default:
            alert('Не коректная валюта !');
    }
});

// 2.7 Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
const seventhSeven = document.getElementById('seventhSeven').addEventListener('click', () => {
    const sumMoney = Number(prompt('Введите суму покупок!', 450));
    if(sumMoney >= 200 && sumMoney < 300){
        alert(`С вас ${sumMoney - (sumMoney / 100 * 3)} валюты.`);
    } else if(sumMoney >= 300 && sumMoney < 500){
        alert(`С вас ${sumMoney - (sumMoney / 100 * 5)} валюты.`);
    }else if(sumMoney >= 500){
        alert(`С вас ${sumMoney - (sumMoney / 100 * 7)} валюты.`);
    } else{
        alert(`У вас нет скидки ⚠️. С вас ${sumMoney} валюты.`)
    }
})

// 2.8 Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
const eighthEight = document.getElementById('eighthEight').addEventListener('click', () => {
    const perimetrSquade = Number(prompt('Введите периметр квадрата!', 70));
    const lengthCircle = Number(prompt('Введите длину окружности!', 110));
    perimetrSquade >= lengthCircle? alert(`Ура. Круг поместится в квадрат!`) : alert(`Эхх... Круг не поместился в квадрат!`);
})

// 2.9 Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
const ninthNine = document.getElementById('ninthNine').addEventListener('click', () => {
    const questionOne = prompt('Назовите столицу Польши!', "Варшава, Вроцлав, Люблин");
    const questionTwo = prompt('Cколько было президентов США?', "44, 45, 46");
    const questionTree = prompt('2+2*2', "4, 6, 8");
        points = 0;
    if(questionOne == "Варшава"){
        points += 2;
    } if(questionTwo == 44){
        points += 2;
    } if(questionTree == 6){
        points += 2;
    } 
    points >= 2 ? alert(`Поздравляю, вы заработали ${points} баллов.`) : alert(`К сожалению, у вас нет правильных ответов`);
})

// 2.10 Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.
const tenTenth = document.getElementById('tenTenth').addEventListener('click', () => {
    const someData = new Date(prompt(`Введите дату (yyyy-mm-dd)`, "2011-03-15"))
    someData.setDate(someData.getDate() + 1);
    alert(someData);
})
}
