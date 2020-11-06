import uikit from 'uikit';
import 'uikit/dist/css/uikit.min.css'
import '../styles/style.scss'

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

// ========

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

// ========

// 3.1.Подсчитать сумму всех чисел в заданном пользователем диапазоне.
const threeOne = document.getElementById('threeOne').addEventListener('click', () => {
    let a = Number(prompt("Введите начало диапазона!","1"));
    let b = Number(prompt("Введите начало конец!","99"));
    let sum = 0;
    while(a <= b){       
           sum+=a;  
           a++;
        }
    alert(sum);
})

// 3.2.Запросить 2 числа и найти только наибольший общий делитель.
const threeTwo = document.getElementById('threeTwo').addEventListener('click', () => {
    let firstNumber = Number(prompt("Введите первое число", 40));
    let secondNumber = Number(prompt("Введите второе число", 80));
    while(firstNumber !== 0 && secondNumber !== 0){
        firstNumber > secondNumber ? firstNumber %= secondNumber : secondNumber %= firstNumber;
    }
    alert(firstNumber + secondNumber);
})

// 3.3.Запросить у пользователя число и вывести все делители этого числа.
const threeThree = document.getElementById('threeThree').addEventListener('click', () => {
    const number = Number(prompt('Введите число', 177));
    let i = 1;
    while(i <= number) {
        i++;
        number % i == 0 && i !== number ? alert(i) : false;
    }
})

// 3.4.Определить количество цифр в введенном числе.
const threeFore = document.getElementById('threeFore').addEventListener('click', () => {
    const number = prompt('Введите число', 2341);
    alert(number.length);
})

// 3.5.Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
const threeFive = document.getElementById('threeFive').addEventListener('click', () => {
    alert('В процессе!')
})

// 3.6.Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.
const threeSix = document.getElementById("threeSix").addEventListener("click", () => {
  do {
    const firstNumber = Number(prompt("Введи первое число", 124));
    const sign = prompt("Укажите задачу", "*");
    const secondNumber = Number(prompt("Введи первое число", 124));
    switch (sign) {
      case '+':
        alert(firstNumber + secondNumber);
        break;
      case '-':
        alert(firstNumber - secondNumber);
        break;
      case '*':
        alert(firstNumber * secondNumber);
        break;
      case '/':
        alert(firstNumber / secondNumber);
        break;
      case '%':
        alert(firstNumber % secondNumber);
        break;
      default:
        break
    }
  } while(confirm('Желаешь ли ты решить еще один пример?'));
});

// 3.7.Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
const threeSeven = document.getElementById('threeSeven').addEventListener('click', () => {
    alert('В процессе!')
})

// 3.8.Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.
const threeEight = document.getElementById('threeEight').addEventListener('click', () => {
    // alert('В процессе!')
    let i = 0;
    do{
        const days = [0, 1, 2, 3 ,4 ,5 ,6, 7];
        const day ='';
        switch(days[i]){
            case 0:
                day = "Sunday";
                alert(day);
                break;
            case 1:
                day = "Monday";
                alert(day);
                break;
            case 2:
                 day = "Tuesday";
                 alert(day);
                break;
            case 3:
                day = "Wednesday";
                alert(day);
                break;
            case 4:
                day = "Thursday";
                alert(day);
                break;
            case 5:
                day = "Friday";
                alert(day);
                break;
            case 6:
                day = "Saturday";
                alert(day);
                break;
            case 7:
                day = "Sun";
                i -= 7;
                alert(day);
            default:
                break;
            };
            i++;
    } while(confirm("Хотите увидеть следующий день?"));
});

// 3.9.Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
const threeNine = document.getElementById('threeNine').addEventListener('click', () => {
    const multiTable = alert;
    for (let i = 2; i < 10; i++){
        for (let n = 1; n <= 10; n++){
            console.log(`${i} * ${n} = ${i * n}`);
        }
    }
    alert('готово, загляните в консоль !')
})

// 3.10.Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.
const threeTenth = document.getElementById('threeTenth').addEventListener('click', () => {
    alert('В процессе!')
})

// ========

// 4.1.Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
const foreOne = document.getElementById('foreOne').addEventListener('click', () => {
    function backNumber(){
        const firstNum = Number(prompt('Введи первое число', 10))
        const secondNum = Number(prompt('Введи второе число', 20))
        if(firstNum > secondNum){
            alert('1')
        }else if(firstNum === secondNum){
            alert('0');
        }else if(firstNum < secondNum){
            alert('-1')
        }
    }
    backNumber();
})

// 4.2.Написать функцию, которая вычисляет факториал переданного ей числа.
const foreTwo = document.getElementById('foreTwo').addEventListener('click', () => {
    const n  = Number(prompt('Введи любо число', 3))
    function factorial(n) {
        return(n != 1) ? n * factorial(n - 1) : 1;
      }
    alert(factorial(n));
})

// 4.3.Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
const foreThree = document.getElementById('foreThree').addEventListener('click', () => {
    const firstNum = Number(prompt('Введи первое число', 12))
    const secondNum = Number(prompt('Введи второе число', 34))
    const thirdNum = Number(prompt('Введи третье число', 56))
    
    function transnumber(){
        const arr =[firstNum, secondNum, thirdNum];
        alert (arr.join(''));
    }
    transnumber()
})

// 4.4.Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
const foreFore = document.getElementById('foreFore').addEventListener('click', () => {
    const width = Number(prompt('Введи ширину', 27))
    const height = Number(prompt('Введи длину', 32))
    function square(width, height){
        return (
            width > 0 
            ? (width > 0 && height > 0 ? width * height : width * 4) 
            : height * 4
        )
    }
    alert(square(width, height))
})

// 4.5.Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.
const foreFive = document.getElementById('foreFive').addEventListener('click', () => {
    const randomNumber = Number(prompt('Введи любо число', 3));
    const isPerfect = (randomNumber) => {
        if (randomNumber === 0) return false;
      
        let sum = 0;
      
        for (let divisor = 1; divisor < randomNumber; divisor += 1) {
          if (randomNumber % divisor === 0) sum += divisor;
        }
      
        return sum === randomNumber;
      };
      alert(isPerfect(randomNumber));
})

// 4.6.Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 
const foreSix = document.getElementById('foreSix').addEventListener('click', () => {
    const minNumber = Number(prompt('Введи минимальное значение', 3));
    const maxNumber = Number(prompt('Введи максимальное значение', 300));
    const array = []
    for(let i = minNumber; i <= maxNumber; i++ ){
        const isPerfect = (i) => {
        if (i === 0) return false;
        let sum = 0;
        for (let divisor = 1; divisor < i; divisor += 1) {
          if (i % divisor === 0) sum += divisor;
        }
        return sum === i;
      };
      console.log(`${i} = ${isPerfect(i)}`);
    }
    
})

// 4.7.Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

const foreSeven = document.getElementById('foreSeven').addEventListener('click', () => {
        function time() {
            const hours = Number(prompt('Сколько часов ?', 3));
            const minuts = Number(prompt('Сколько минут ?', 25));
            const seconds = Number(prompt('Сколько секунд ?', 17));
            const object = [
                hours,
                minuts,
                seconds
            ]
            return alert(`${object.hours}:${object.minuts}:${object.seconds}`)
        }   
        time();
    })
// 4.8.Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
const foreEight = document.getElementById('foreEight').addEventListener('click', () => {
        const hours = Number(prompt('Сколько часов ?', 3));
        const minuts = Number(prompt('Сколько минут ?', 25));
        const seconds = Number(prompt('Сколько секунд ?', 17));
        function getSeconds(sum){
            sum = (hours * 3600) + (minuts * 60) + seconds;
            return sum
        }
        alert(`${getSeconds()} seconds`);
    })

// 4.9.Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
const foreNine = document.getElementById('foreNine').addEventListener('click', () => {
    const number = Number(prompt('Сколько секунд ?', 123456));
    function getSecToHours(){
        const hours = Math.floor(number / 60 / 60)
        const minuts = Math.floor(number / 60) - (hours * 60)
        const seconds = number % 60
        return alert(`${hours}:${minuts}:${seconds}`)
    } 
    getSecToHours()
})

// 4.10.Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»
const foreTenth = document
    .getElementById('foreTenth')
    .addEventListener('click', () => {
    alert('В процессе!')
})

// ========

// 5.1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:
// Функция для вывода на экран информации об автомобиле;
// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
const fiveOne = document
    .getElementById('fiveOne')
    .addEventListener('click', () => {
        const distance = prompt('Сколько вам нужно проехать км?', 340);
        const car = {
            madeIn: "Germany",
            model: "bmw",
            year: 2020,
            averageSpeed: 80
        }
        function getAboutCar(){
            console.log(car);
        }
        function getTime() {
            const travelTime = distance / car.averageSpeed
            const allTime = Math.floor((travelTime / 4) + travelTime)
            return alert(`${allTime} hours`)
        }
        getTime();
        getAboutCar()
})

// 5.2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 
// Функция сложения 2-х объектов-дробей; Функция вычитания 2-х объектов-дробей; Функция умножения 2-х объектов-дробей;
// Функция деления 2-х объектов-дробей; Функция сокращения объекта-дроби.
const fiveTwo = document
    .getElementById('fiveTwo')
    .addEventListener('click', () => {
        const numerator = Number(prompt('Введите первое число!', 20))
        const denominator = Number(prompt('Введите второе число!', 5))
        const object = {
            numerator,
            denominator
        };
        function calc() {
            return (object.numerator + object.denominator)
        }
    alert(calc())
})

// 5.3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 
// Функция вывода времени на экран;    Функция изменения времени на переданное количество секунд;
// Функция изменения времени на переданное количество минут;  Функция изменения времени на переданное количество часов. 
// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».


// =====

// 6.1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.


// 6.2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:
// Распечатка чека на экран;
// Подсчет общей суммы покупки;
// Получение самой дорогой покупки в чеке;
// Подсчет средней стоимости одного товара в чеке.
// 6.3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

// 6.4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним
// Вывод на экран всех аудиторий;
// Вывод на экран аудиторий для указанного факультета;
// Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
// Функция сортировки аудиторий по количеству мест;
// Функция сортировки аудиторий по названию (по алфавиту).


// =====


// 7.1 Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов. 


// 7.2 Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:
// поле, которое хранит цвет маркера;
// поле, которое хранит количество чернил в маркере (в процентах);
// метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.
// Продемонстрировать работу написанных методов. 


// 7.3 Реализовать класс Employee, описывающий работника, и создать массив работников банка.
// Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().
// Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().
