    // const name = "Николай"
    // const age = 65
// console.log(typeof name)

// const output = "Привет, меня зовут " + name + " мой возраст " + age + " лет."

    // function getAge() {
    //    return age 
    // }

// const output = `Привет, меня зовут ${name} и мой возраст ${age} лет.` // или заменим переменную age на функцию
// const output = `Привет, меня зовут ${name} и мой возраст ${getAge()} лет.`

// const output = `Привет, меня зовут ${name} и мой возраст ${age < 20 ? "A" : "B"} лет.` // Использовано тернарное выражение
// const output = `Привет, меня зовут ${name} и мой возраст ${age > 20 ? age : "B"} лет.` 

// Обратные кавычки позволяют создавать многострочный код 
    // const output = `
    // <div>This is div</div>
    // <p>this is o</p> 
    // `
    // console.log(output)

// Встроенные методы - 2:28:40

// const name = "Николай"
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(4)) // л - на позиции с индексом 4
// console.log(name.indexOf("кол")) // 2 - начиная с позиции с индексом 2
// console.log(name.startsWith("Никол"))
// console.log(name.endsWith("лай"))
// console.log(name.repeat(3))

// const string = "   password    "
// console.log(string)
// console.log(string.trim())
// console.log(string.trimLeft()) // устар.?
// console.log(string.trimRight()) // устар.?


// 2:35:00 - Новый синтаксис с использованием обратных кавычек (альтернативный)

function logPerson(s, name, age) {
    // console.log(s, name, age)
    if (age < 0) {
        age = "Еще не родился"
    }
    // return "Info about person"
    // return `${s[0]}` // Имя:
    // return `${s[]}` // Выводится весь массив s
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}
// const personName = "Николай"
const personName2 = "Максим"

// const personAge = 65
const personAge2 = -1

// const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`

// console.log(output)
console.log(output2)




