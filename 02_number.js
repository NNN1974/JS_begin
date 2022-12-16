// 1 Number - 1:45:00

// const num = 42
// const float = 42.42
// const pow = 10e3
// console.log(pow)

// console.log("Number.MAX_SAFE_INTEGER=",Number.MAX_SAFE_INTEGER)
// console.log("Math.pow 53 - 1 =", Math.pow(2, 53)-1)
// console.log("Number.MIN_SAFE_INTEGER=",Number.MIN_SAFE_INTEGER)

// console.log("MAX_VALUE=", Number.MAX_VALUE)
// console.log("MIN_VALUE=", Number.MIN_VALUE)

// console.log("POSITIVE_INFINITY=", Number.POSITIVE_INFINITY)
// console.log("NEGATIVE_INFINITY=", Number.NEGATIVE_INFINITY)
// console.log("1 / 0 =", 1 / 0)

// console.log(Number.NaN)
// console.log(typeof NaN)

// const weird = 2 / undefined
// console.log(Number.isNaN(weird))
// console.log(Number.isNaN(42))

// console.log(Number.isFinite(Infinity))
// console.log(Number.isFinite(42))

// const stringInt = "40"
// const stringFloat = "40.42"
// console.log(stringInt + 2) // 402
// console.log(Number.parseInt(stringInt) + 2) // 42
    // Но более короткий и чаще всего применяемый способ:
// console.log(parseInt(stringInt) + 2) // 42
    // Еще два способа:
// console.log(Number(stringInt) + 2) // 42
// console.log(+stringInt + 2) // 42

// console.log(parseInt(stringFloat) + 2) // 42
// console.log(parseFloat(stringFloat) + 2) // 42.42


//  2:02:50   Особенности Number JS 

// console.log(0.4 + 0.2) // 0.6000000000000001
// console.log((0.4 + 0.2).toFixed(1)) // 0.6 - но это не число, а строка
// console.log(+(0.4 + 0.2).toFixed(1)) // 0.6 - это уже число
// console.log(parseFloat((0.4 + 0.2).toFixed(1))) // 0.6 - второй способ получения числа


// 2 BigInt - 2:07:00

// console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
// console.log(90071992547409919999999) // 9.007199254740992e+22 - но этим числом нельзя оперировать
// console.log(typeof 90071992547409919999999) // number
// console.log(typeof 90071992547409919999999n) // bigint

// console.log(90071992547409919999999n - 900719925474099199999n) // вычитание двух bigint
// console.log(-90071992547409919999999n) // отрицательный bigint
// console.log(90071992547409919999999.23231n) // error

//  Возможности BigInt - 2:09:30
// console.log(10n - 4) // error. Разные типы данныз у 10n и 4. 
// Хотя и использование малых значений bigint нецелесообразно, но иногда возникает задача преобразования типа данных
// console.log(parseInt(10n) - 4) // 6 - приведение BigInt к целому
// console.log(10n - BigInt(4)) // 6n - приведение целого к BigInt
// Другие операции:
// console.log(5n / 2n) // 2n - получается 2.5n, но BigInt - целое число, поэтому полученное значение приводится к 2n


//  3 Math - 2:12:00 

// console.log(Math.E) // Число Е
// console.log(Math.PI) // Число Пи

// console.log(Math.sqrt(25)) // 5 - извлечение квадратного корня
// console.log(Math.pow(5, 3)) // 125 - возведение в третью степень
// console.log(Math.abs(-42)) // 42 - модуль числа
// console.log(Math.max(42, 12, 23, 11, 422)) // 422
// console.log(Math.min(42, 12, 23, 11, 422)) // 11
// console.log(Math.floor(4.9)) // 4 - округляет в меньшую сторону
// console.log(Math.ceil(4.9)) // 5 - округляет в большую сторону
// console.log(Math.round(4.9)) // 5 - округляет к ближайшему целому
// console.log(Math.trunc(4.9)) // 4 - возвращает целую часть числа путем удаления всех дробных знаков

// console.log(Math.random()) // выдает рандомное (случайное) значение числа. При () - значение меньше единицы
// Есть тригонометрические и другие функции

//  4 Example - 2:18:10

function getRandomBetween(min, max) {
    // return Math.random() * (max - min) + min // получаются числа от 10 до 42, но с дробной частью
    return Math.floor(Math.random() * (max - min +1) + min) // получаются целые числа от 10 до 42
} 
console.log(getRandomBetween(10, 42)) // выводятся числа от 10 до 42










