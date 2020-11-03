// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"index.js":[function(require,module,exports) {
function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

// 1.Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
var firstBtn = document.getElementById('first'); //достаю кнопку из html файла 

firstBtn.addEventListener('click', function () {
  // при нажатии на клик выполняется действие 
  var name = prompt('Как вас зовут ?'); // запрашиваю имя

  alert("\u041F\u0440\u0438\u0432\u0435\u0442, ".concat(name, "!")); // Выдаю имя 
}); // 2.Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

var secondBtn = document.getElementById('second');
secondBtn.addEventListener('click', function () {
  var sizeOfSquare = prompt('Введите длину стороны квадрата.', 20);
  var sumSquare = 4 * sizeOfSquare;
  alert(sumSquare);
}); // 3.Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.

var thirdBtn = document.getElementById('third');
thirdBtn.addEventListener('click', function () {
  var yearYourBirthday = prompt('В каком году вы родились ?', 1900);
  var today = new Date();
  var yourAge = today.getFullYear() - yearYourBirthday;
  alert("\u0412\u0430\u043C ".concat(yourAge, " \u043B\u0435\u0442!"));
}); // 4.Запросите у пользователя радиус окружности и выведите площадь такой окружности.

var fourthBtn = document.getElementById('fourth');
fourthBtn.addEventListener('click', function () {
  var r = prompt('Задайте радиус окружности?', 30);
  var p = 3.1415926535;
  var areaOfCircle = p * Math.pow(r, 2);
  areaOfCircle = (_readOnlyError("areaOfCircle"), Math.floor(areaOfCircle));
  alert("\u041F\u043B\u043E\u0449\u0430\u0434\u044C \u043E\u043A\u0440\u0443\u0436\u043D\u043E\u0441\u0442\u0438 ".concat(areaOfCircle, "!"));
}); // 5.Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.

var fifthBtn = document.getElementById('fifth');
fifthBtn.addEventListener('click', function () {
  var distance = prompt('Какая дистанция между точкой А и Б?', 340);
  var timeToMove = prompt('За сколько времени вы планируете добраться ?', 6);
  var speed = distance / timeToMove;
  speed = (_readOnlyError("speed"), Math.floor(speed));
  alert("\u0412\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u0434\u0432\u0438\u0433\u0430\u0442\u044C\u0441\u044F \u0441\u043E \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C ".concat(speed, "\u043A\u043C/\u0447"));
}); // 6.Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.

var sixthBtn = document.getElementById('sixth');
sixthBtn.addEventListener('click', function () {
  var USD = prompt("\u041A\u0430\u043A\u0443\u044E \u0441\u0443\u043C\u043C\u0443 \u0434\u043E\u043B\u043B\u043E\u0440\u043E\u0432 \u0432\u044B \u0436\u0435\u043B\u0430\u0435\u0442\u0435 \u043F\u043E\u043C\u0435\u043D\u044F\u0442\u044C ?", 1000);
  var EUR = 0.85;
  var sumMoney = USD * EUR;
  alert("\u041C\u0435\u043D\u044F\u044F ".concat(USD, " \u0434\u043E\u043B\u043B\u0430\u0440\u043E\u0432, \u0443 \u0432\u0430\u0441 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0441\u044F ").concat(sumMoney, " \u0435\u0432\u0440\u043E!"));
}); // 7.Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.

var seventhBtn = document.getElementById('seventh');
seventhBtn.addEventListener('click', function () {
  var memory = prompt('Какой у вас обьем флешки в ГБ?', 16);
  var files = memory * 1000 / 820;
  files = (_readOnlyError("files"), Math.floor(files));
  var residue = memory * 1000 % 820;
  alert("\u041D\u0430 \u0432\u0430\u0448\u0443 \u0444\u043B\u0435\u0448\u043A\u0443 \u0441 \u043E\u0431\u044C\u0435\u043C\u043E\u043C ".concat(memory, ", \u0432\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C ").concat(files, " \u0444\u0430\u0439\u043B\u043E\u0432 \u043F\u043E 820\u043C\u0431. \u0410 \u0435\u0449\u0435 \u0443 \u0432\u0430\u0441 \u043E\u0441\u0442\u0430\u043D\u0435\u0442\u0441\u044F ").concat(residue, "\u043C\u0431\uD83D\uDE0A"));
}); // 8.Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.

var eighthBtn = document.getElementById('eighth');
eighthBtn.addEventListener('click', function () {
  var amountOfMoney = prompt('Сколько у вас есть денег ?', 200);
  var chokolate = prompt('Цена одной шоколадки?', 28.5);
  var pieces = amountOfMoney / chokolate;
  pieces = (_readOnlyError("pieces"), Math.floor(pieces));
  var surrender = amountOfMoney % chokolate;
  var currency = 'гривен';
  alert("\u041D\u0430 ".concat(amountOfMoney, "\u0433\u0440\u0438\u0432\u0435\u043D \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043A\u0443\u043F\u0438\u0442\u044C ").concat(pieces, " \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043E\u043A. \u0418 \u0443 \u0432\u0430\u0441 \u043E\u0441\u0442\u0430\u043D\u0435\u0442\u0441\u044F ").concat(surrender, " ").concat(currency, "!"));
}); // 9.Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).

var ninthBtn = document.getElementById('ninth');
ninthBtn.addEventListener('click', function () {
  var num = prompt('Введите любое число! Желательно трехзначное!', 598);

  function getReversedNum(num) {
    var result = 0;

    while (num) {
      result = result * 10 + num % 10;
      num = Math.floor(num / 10);
    }

    return result;
  }

  alert(getReversedNum(num));
}); // 10.Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.

var tenthBtn = document.getElementById('tenth');
tenthBtn.addEventListener('click', function () {
  var num = prompt('Введите сумму вклада!');
  var months = prompt('На сколько месяцев вы хотите внести сумму ?');
  var sum = num * 0.05 / 12 * months;
  sum = (_readOnlyError("sum"), Math.floor(sum));
  alert("\u0417\u0430 ".concat(months, " \u043C\u0435\u0441\u044F\u0446\u0430, \u0432\u0430\u043C \u0431\u0443\u0434\u0435\u0442 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u043E ").concat(sum, " \u0433\u0440\u0438\u0432\u043D\u0443."));
}); //1.1 Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

var firstOne = document.getElementById('firstOne').addEventListener('click', function () {
  var age = Number(prompt('Сколько вам лет?'));

  if (age < 12) {
    alert('Вы еще ребенок👶');
  } else if (age < 18) {
    alert('Вы все еще подросток 👦');
  } else if (age < 60) {
    alert('Поздравляю, вы уже взрослый 👱‍♂️');
  } else if (age <= 100) {
    alert('Вы уже пенсионер 👴 еще чуть чуть ...');
  } else {
    alert('Странно, вы все еще живы🤔');
  }

  console.log(TypeOf.age);
}); // 2.2 Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

var secondTwo = document.getElementById('secondTwo').addEventListener('click', function () {
  var randomNumber = Number(prompt('Введите число от 0 до 9'));

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
}); // 2.3 Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

var thirdThree = document.getElementById('thirdThree').addEventListener('click', function () {
  var randomNumber = prompt('Введите трехзначное число на проверку', 123);
  randomNumber[0] == randomNumber[1] || randomNumber[1] == randomNumber[2] || randomNumber[2] == randomNumber[0] ? alert('Найдено совпадение') : alert('Совпадение не найдено');
}); // 2.4 Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

var fourthFore = document.getElementById('fourthFore').addEventListener('click', function () {
  var randomYear = prompt('Угадайте высокосный год', 1994);
  randomYear % 400 == 0 || randomYear % 4 == 0 && randomYear % 100 !== 0 ? alert('Верно, год высокосный!') : alert('Жаль, год не высокосный!');
}); // 2.5 Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

var fifthFive = document.getElementById('fifthFive').addEventListener('click', function () {
  var fiveDigitNumber = prompt('Введите пятизначное число', 12321);

  if (fiveDigitNumber < 10000 || fiveDigitNumber > 99999) {
    alert('Извините, вы ввели не пятизначное число');
  } else if (fiveDigitNumber[0] == fiveDigitNumber[4] && fiveDigitNumber[1] == fiveDigitNumber[3]) {
    alert('Число является палиндромом');
  } else {
    alert('Число НЕ является палиндромом');
  }
}); // 2.6 Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

var sixthSix = document.getElementById('sixthSix').addEventListener('click', function () {
  var amountUSD = prompt('Сколько USD вы хотите поменять ?', 300);
  currency = prompt('В какую валюту хочет перевести: EUR, UAN, AZN?', 'UAN');
  var sumEUR = 0.85 * amountUSD;
  var sumUAN = 28.34 * amountUSD;
  var sumAZN = 1.7 * amountUSD;

  switch (currency) {
    case "EUR":
    case "eur":
      alert("\u0412\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 ".concat(sumEUR, " \u0435\u0432\u0440\u043E"));
      break;

    case "UAN":
    case "uan":
      alert("\u0412\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 ".concat(sumUAN, " \u0433\u0440\u0438\u0432\u0435\u043D"));
      break;

    case "AZN":
    case "azn":
      alert("\u0412\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 ".concat(sumAZN, " \u0430\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043D\u0441\u043A\u0438\u0445 \u043C\u0430\u043D\u0430\u0442"));
      break;

    default:
      alert('Не коректная валюта !');
  }
}); // 2.7 Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

var seventhSeven = document.getElementById('seventhSeven').addEventListener('click', function () {
  var sumMoney = Number(prompt('Введите суму покупок!', 450));

  if (sumMoney >= 200 && sumMoney < 300) {
    alert("\u0421 \u0432\u0430\u0441 ".concat(sumMoney - sumMoney / 100 * 3, " \u0432\u0430\u043B\u044E\u0442\u044B."));
  } else if (sumMoney >= 300 && sumMoney < 500) {
    alert("\u0421 \u0432\u0430\u0441 ".concat(sumMoney - sumMoney / 100 * 5, " \u0432\u0430\u043B\u044E\u0442\u044B."));
  } else if (sumMoney >= 500) {
    alert("\u0421 \u0432\u0430\u0441 ".concat(sumMoney - sumMoney / 100 * 7, " \u0432\u0430\u043B\u044E\u0442\u044B."));
  } else {
    alert("\u0423 \u0432\u0430\u0441 \u043D\u0435\u0442 \u0441\u043A\u0438\u0434\u043A\u0438 \u26A0\uFE0F. \u0421 \u0432\u0430\u0441 ".concat(sumMoney, " \u0432\u0430\u043B\u044E\u0442\u044B."));
  }
}); // 2.8 Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

var eighthEight = document.getElementById('eighthEight').addEventListener('click', function () {
  var perimetrSquade = Number(prompt('Введите периметр квадрата!', 70));
  var lengthCircle = Number(prompt('Введите длину окружности!', 110));
  perimetrSquade >= lengthCircle ? alert("\u0423\u0440\u0430. \u041A\u0440\u0443\u0433 \u043F\u043E\u043C\u0435\u0441\u0442\u0438\u0442\u0441\u044F \u0432 \u043A\u0432\u0430\u0434\u0440\u0430\u0442!") : alert("\u042D\u0445\u0445... \u041A\u0440\u0443\u0433 \u043D\u0435 \u043F\u043E\u043C\u0435\u0441\u0442\u0438\u043B\u0441\u044F \u0432 \u043A\u0432\u0430\u0434\u0440\u0430\u0442!");
}); // 2.9 Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

var ninthNine = document.getElementById('ninthNine').addEventListener('click', function () {
  var questionOne = prompt('Назовите столицу Польши!', "Варшава, Вроцлав, Люблин");
  var questionTwo = prompt('Cколько было президентов США?', "44, 45, 46");
  var questionTree = prompt('2+2*2', "4, 6, 8");
  points = 0;

  if (questionOne == "Варшава") {
    points += 2;
  }

  if (questionTwo == 44) {
    points += 2;
  }

  if (questionTree == 6) {
    points += 2;
  }

  points >= 2 ? alert("\u041F\u043E\u0437\u0434\u0440\u0430\u0432\u043B\u044F\u044E, \u0432\u044B \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043B\u0438 ".concat(points, " \u0431\u0430\u043B\u043B\u043E\u0432.")) : alert("\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0443 \u0432\u0430\u0441 \u043D\u0435\u0442 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432");
}); // 2.10 Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.

var tenTenth = document.getElementById('tenTenth').addEventListener('click', function () {
  var someData = new Date(prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 (yyyy-mm-dd)", "2011-03-15"));
  someData.setDate(someData.getDate() + 1);
  alert(someData);
}); // 3.1.Подсчитать сумму всех чисел в заданном пользователем диапазоне.

var threeOne = document.getElementById('threeOne').addEventListener('click', function () {
  var a = Number(prompt("Введите начало диапазона!", "1"));
  var b = Number(prompt("Введите начало конец!", "99"));
  var sum = 0;

  while (a <= b) {
    sum += a;
    a++;
  }

  alert(sum);
}); // 3.2.Запросить 2 числа и найти только наибольший общий делитель.

var threeTwo = document.getElementById('threeTwo').addEventListener('click', function () {
  var firstNumber = Number(prompt("Введите первое число", 40));
  var secondNumber = Number(prompt("Введите второе число", 80));

  while (firstNumber !== 0 && secondNumber !== 0) {
    firstNumber > secondNumber ? firstNumber %= secondNumber : secondNumber %= firstNumber;
  }

  alert(firstNumber + secondNumber);
}); // 3.3.Запросить у пользователя число и вывести все делители этого числа.

var threeThree = document.getElementById('threeThree').addEventListener('click', function () {
  var number = Number(prompt('Введите число', 177));
  var i = 1;

  while (i <= number) {
    i++;
    number % i == 0 && i !== number ? alert(i) : false;
  }
}); // 3.4.Определить количество цифр в введенном числе.

var threeFore = document.getElementById('threeFore').addEventListener('click', function () {
  var number = prompt('Введите число', 2341);
  alert(number.length);
}); // 3.5.Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

var threeFive = document.getElementById('threeFive').addEventListener('click', function () {
  alert('В процессе!');
}); // 3.6.Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.

var threeSix = document.getElementById("threeSix").addEventListener("click", function () {
  do {
    var firstNumber = Number(prompt("Введи первое число", 124));
    var sign = prompt("Укажите задачу", "*");
    var secondNumber = Number(prompt("Введи первое число", 124));

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
        break;
    }
  } while (confirm('Желаешь ли ты решить еще один пример?'));
}); // 3.7.Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).

var threeSeven = document.getElementById('threeSeven').addEventListener('click', function () {
  alert('В процессе!');
}); // 3.8.Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.

var threeEight = document.getElementById('threeEight').addEventListener('click', function () {
  // alert('В процессе!')
  var i = 0;

  do {
    var days = [0, 1, 2, 3, 4, 5, 6, 7];
    var day = '';

    switch (days[i]) {
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
    }

    ;
    i++;
  } while (confirm("Хотите увидеть следующий день?"));
}); // 3.9.Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.

var threeNine = document.getElementById('threeNine').addEventListener('click', function () {
  var multiTable = alert;

  for (var i = 2; i < 10; i++) {
    for (var n = 1; n <= 10; n++) {
      console.log("".concat(i, " * ").concat(n, " = ").concat(i * n));
    }
  }

  alert('готово, загляните в консоль !');
}); // 3.10.Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.

var threeTenth = document.getElementById('threeTenth').addEventListener('click', function () {
  alert('В процессе!');
}); // 4.1.Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

var foreOne = document.getElementById('foreOne').addEventListener('click', function () {
  function backNumber() {
    var firstNum = Number(prompt('Введи первое число', 10));
    var secondNum = Number(prompt('Введи второе число', 20));

    if (firstNum > secondNum) {
      alert('1');
    } else if (firstNum === secondNum) {
      alert('0');
    } else if (firstNum < secondNum) {
      alert('-1');
    }
  }

  backNumber();
}); // 4.2.Написать функцию, которая вычисляет факториал переданного ей числа.

var foreTwo = document.getElementById('foreTwo').addEventListener('click', function () {
  var n = Number(prompt('Введи любо число', 3));

  function factorial(n) {
    return n != 1 ? n * factorial(n - 1) : 1;
  }

  alert(factorial(n));
}); // 4.3.Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

var foreThree = document.getElementById('foreThree').addEventListener('click', function () {
  var firstNum = Number(prompt('Введи первое число', 12));
  var secondNum = Number(prompt('Введи второе число', 34));
  var thirdNum = Number(prompt('Введи третье число', 56));

  function transnumber() {
    var arr = [firstNum, secondNum, thirdNum];
    alert(arr.join(''));
  }

  transnumber();
}); // 4.4.Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

var foreFore = document.getElementById('foreFore').addEventListener('click', function () {
  var width = Number(prompt('Введи ширину', 27));
  var height = Number(prompt('Введи длину', 32));

  function square(width, height) {
    return width > 0 ? width > 0 && height > 0 ? width * height : width * 4 : height * 4;
  }

  alert(square(width, height));
}); // 4.5.Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.
// 4.6.Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 
// 4.7.Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
// 4.8.Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
// 4.9.Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
// 4.10.Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62987" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/js-modules.e31bb0bc.js.map