export const funcHW = () => {
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
}

