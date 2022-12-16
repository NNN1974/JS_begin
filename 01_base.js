    // 1 Переменные - 29:40

// - Комментарий
// Variable - переменная
// var name = 'Nikolay' - желательно не испoльзовать

// camelCase - желательное написание имени элемента в javaScript

// const firstName = "Nikolay"
// const firstName = "Nikola"
// const lastName = "Shabalin" // string 

// let age = 65   // number

// const isProgrammer = true   // boolean

// const _private = "private" // Допустимо просто: _
// const $ = "some value"
// В названии переменной не должны быть зарезервированные слова: if и др.

// const withNum5 = "5" // название переменной не должно начинаться с цифры
// console.log(_private) - valid
// console.log(isProgrammer) - valid

    // 2 Мутирование (работа с разными типами данных) - 43:30

// Возраст в программе не будем менять, поэтому строку 13 закомментируем и сделаем:

// const age = 65

// Конкатенация (сцепление) строк: "Имя человека: " (тип - string) + firstName (тип - string)
// age - number, но учитывая, что предыдущие элементы - string, то JS приводит age к строке:

// console.log("Имя человека: " + firstName + ", а возраст человека: " + age) // все переменные - string

// console.log(age) // age по-прежнему - number
// console.log(age.toString()) // age здесь - string

// alert  - эта функция не присутствует в JS, а присутствует в браузере, например, в Chrome.
// На мобильном устройстве или на сервере ее не будет 

// alert("Имя человека: " + firstName + ", а возраст человека: " + age) // Выводится на табличку, а не на вкладку JS

// const lastName = prompt( "Введите фамилию:")
// alert(firstName + " " + lastName)

    // 3 Операторы -  52:20

// const currentYear = 2022
// const birthYear = 1957

// const age = currentYear - birthYear
// console.log(age)
// const a = 10
// const b = 5

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)

// let currentYear = 2022
// console.log(currentYear++) // выведется вначале 2022, потом прибавится 1 и получится 2023 (остается в памяти)
// console.log(currentYear) // выведется на консоль уже 2023
// console.log(++currentYear) // увеличивается на 1 и выводится
// аналогично с минусом
// console.log(--currentYear) // уменьшается на 1 и выводится

// let c = 32
// c = c + a // идентично:
// c += a  

// // аналогично:
// c -= a
// c *= a
// c /= a

    // 4 Типы данных - 59:30

// Пять примитивов:
// const isProgrammer = true  
// const firstName = "Nikolay"
// const age = 65
// let x

// console.log(typeof isProgrammer)
// console.log(typeof firstName)
// console.log(typeof age)
// console.log(typeof x)
// console.log(typeof null) // баг - внутренняя ошибка JS, выводит object. Нужно:
// console.log(null)

// 5 Приоритет операторов - 1:03:15

// const fullAge = 65
// const birthYear = 1957
// const currentYear = 2022

// const isFullAge = currentYear - birthYear >= fullAge
// Операторы сравнения: > < >= <=
// Приоритет у вычитания, получится: 65 >= 65
// console.log(isFullAge)
// Таблица приоритетов операторов - см.: https://www.google.com/search?q=mdn+operator+precedence&oq=mdn&aqs=chrome.2.0i433i512j0i512l4j69i61l3.4273j0j7&sourceid=chrome&ie=UTF-8

// 6 Условные операторы - 1:09:00

// const courseStatus = "fail" // Возможный статус: ready, pending, fail

// if (courseStatus === "ready") {
//     console.log("Курс готов и его можно проходить")
// } else if (courseStatus === "pending") {
//     console.log("Курс пока находится в процессе разработки")
// } else {
//     console.log("Курс отменен")
// }
// Недостаток: 2-е условие выполняется в любом случае, даже в случае выполнения 1-го условия
// Поэтому перед if ставится else и в случае pending выполняется 2-е условие

// const isReady = true // или false
// if (isReady) {
//     console.log("Все готово!")
// } else {
//     console.log("Все не готово...")
// }
//  Здесь: if (isReady === true) {} можно заменить на: if (isReady) {}

// Строки 120-124 можно заменить на Тернарное выражение:
// isReady ? console.log("Все готово!") : console.log("Все не готово...")


    // 7 Булевая логика - 1:18:30

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators#%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B



    // 8 функции - 1:22:50

// function calculateAge(year) {
//     return 2022 - year
// }

                // const myAge = calculateAge(1957)
                // console.log(myAge)
                // или:

                // console.log(calculateAge(1957))
                // console.log(calculateAge(1987))
                // console.log(calculateAge(2013))

                // const firstName = "Nikolay"
                // const year = 1957

// function logInfoAbout(firstName, year) {
//     const age = calculateAge(year)   

//     if (age > 0) {
//         console.log("Человек по имени " + firstName + " сейчас имеет возраст " + age)
//     } else {
//         console.log("Вообще-то это уже будущее!  ")
//     }
// }

//     logInfoAbout("Nikolay", 1957)
//     logInfoAbout("Татьяна", 1962)
//     logInfoAbout("Еще внук/внучка", 2023)

// Мой пример (работает):

            // function calculateAge(year) {
            //     return 2022 - year
            //     }
            // function logInfoAbout(firstName, year) {
            //     const age = calculateAge(year) 
            //     console.log("Человек по имени " + firstName + " сейчас имеет возраст " + age)
            //     }
            // logInfoAbout("Nikolay", 1957)

                
        // 9 Массивы - 1:38:50
                
        // const cars = new Array("Мазда", "Мерседес", "Форд")  // Правильнее создавать массив через квадратные скобки:
// const cars = ["Мазда", "Мерседес", "Форд"]

// console.log(cars[2]) // Выводится элемент массива с индексом 2 // 1-й элемент массива имеет индкс 0


// cars[0] = "Porshe" // Заменяем элемент массива с индексом 0 (Мазда) на другой (Porshe)

                     // cars[3] = "Ауди" // Добавляется новый элемент массива (Ауди) или по-другому:
// cars[cars.length] = "Мазда" // Добавляется новый элемент массива

// console.log(cars.length) // Выводится длина массива

// console.log(cars)


        // 10 Циклы - 1:34:00

// const cars = ["Мазда", "Мерседес", "Форд", "Porshe"]

            // for (let i = 0; i < cars.length; i++) {
            // const car = cars[i]
            //     console.log(car)
            // }  Сейчас появился более удобный способ для итерации массива:

// for (let car of cars) {
//     console.log(car)
// }

//  11 Объекты - 1:37:00

const person = {
    firstName: "Nikolay",
    lastName: "Shabalin",
    year: 1957,
    languages: ["Ru", "En", "De", "Po"],
    hasWife: true,
    greet: function() {   // Здесь function является методом, а не функцией, т.к. определена в контексте объекта
        console.log("greet from person")
    }
}


console.log(person.firstName) // Выводится один элемент объекта
console.log(person["lastName"]) // Выводится один элемент объекта другим способом
const key = "year" // или можно:
// const key = "languages"
console.log(person[key])

                    // person.hasWife = false // Изменение ключей объекта
person.isProgrammer = true // Добавление ключей объекта 
// console тоже является объектом, а log - это функция
// Поэтому мы можем вызвать метод greet:
person.greet() // Выводится приветсвие: greet from person

console.log(person) // Выводится вся информация 

