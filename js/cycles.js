export const cyclesWH = () => {
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
}
