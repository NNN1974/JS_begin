// Урок 6 - 2:41:21
    
    // 1. Функции

    // Function Declaration:

// function greet(name) {
//     console.log("Привет -", name)
//     }
// greet("Таня")

// Function Expression:

// const greet2 = function greet2(name) {
//     console.log("Привет 2 -", name)
//     }
// greet2("Лена")

// console.log(typeof greet) // function

// console.dir(greet)

    // 2. Анонимные функции - 2:48:35
// Функции: setInterval , clearInterval и setTimeout

// Счетчик (counter): с интервалом 1000 миллисекунд выдает значения 1, 2, 3, 4, 5 
        // let counter = 0
        // const interval = setInterval(function(){ // или: const interval = setInterval(function(){
        // if (counter === 5) {
        //     clearInterval(interval) // clearTimeout(interval)
        // } else {
        //     console.log(++counter)
        // }
        // }, 1000)

    // 3. Стрелочные функции - 2:51:45

        // function greet(name) {
        //     console.log("Привет -", name)
        // }
        // greet("Таня")

    // const arrow = (name) => {
    //     console.log("Привет - ", name)
    // }

    // const arrow2 = name => console.log("Привет - ", name)

    // arrow("Nikolay")
    // arrow2("Николай")

    // const pow2 = num => {
    //     return num ** 2
    // }
    // Заменим на:

// const pow2 = num => num ** 2
// console.log(pow2(5))

    // 4. Параметры по умолчанию - 2:55:40

        // const sum = (a, b) => a + b
            // const sum = (a = 40, b = a * 2) => a + b
        // console.log(sum(41, 1))
            // console.log(sum()) 

    // function sumAll(...all) {
    //     console.log(all)
    // }
    // sumAll(1, 2, 3, 4, 5)

// function sumAll(...all) {
//     let result = 0
//     for (let num of all) {
//         result += num
//     }
//     return result
// }

// const res = sumAll(1, 2, 3, 4, 5, 6, 7)
// console.log(res)

// 5. Замыкания - 2:59:40

function createMember(name) {
    return function(lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember("Nikolay")
console.log(logWithLastName) // выводит функцию function
console.log(logWithLastName("Shabalin")) // NikolayShabalin + undefined
console.log(logWithLastName("Minin")) // NikolayMinin + undefined

