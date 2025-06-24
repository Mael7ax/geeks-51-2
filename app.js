let fruits = ['яблоко', 'банан', 'апельсин', 'груша', 'киви']
fruits.push("манго")
console.log(fruits)
fruits.unshift('ананас')
console.log(fruits)
fruits.pop()
console.log(fruits)
fruits.shift()
console.log(fruits)
console.log(fruits.indexOf("апельсин"))
console.log(fruits.includes("виноград"))
console.log(fruits.length)

let numbers = [15, 8, 23, 42, 4, 16, 9, 31]
console.log(numbers)
numbers.sort((a,b) => a - b)
console.log(numbers)
let number1 =[...numbers.slice(0,4)]
console.log(number1)
let  number2 = [...numbers.slice(5)]
console.log(number2)
let concat = [...number1 , ...number2]
console.log(concat)
console.log(concat.join("|"))


let mixedArray = [12, 'hello', 25, true, 8, 'world', 33, false, 7]
console.log(mixedArray)
for(let i = 0 ;i < mixedArray.length;i++){
    if(typeof  mixedArray[i] === "number"){
        console.log(mixedArray[i],"number")
    }
}for(let i = 0 ;i < mixedArray.length;i++){
    if(typeof  mixedArray[i] === "string"){
        console.log(mixedArray[i],"string")
    }
}
let count = 0
for(let i = 0 ;i < mixedArray.length;i++) {
    if (typeof mixedArray[i] === "number") {
        count++
    }
}
console.log(count,"count")

let sum = 0
for(let i = 0 ;i < mixedArray.length;i++) {
    if (typeof mixedArray[i] === "number") {
        sum += mixedArray[i]
    }
}
console.log(sum,"sum")
for(let i = 0 ;i < mixedArray.length;i++){
    if (i % 2 === 0) {
        console.log(mixedArray[i],"четные")
    }
}


let grades = [85, 92, 78, 96, 87, 73, 89, 94, 82, 90]
console.log(grades)
let max = grades[0]
for(let grade of grades){
    if (grade > max){
        max = grade
    }
}
console.log(max,"max")
let min = grades[0]
for(let grade of grades){
    if (grade < min){
        min = grade
    }
}
console.log(min,"min")

let gradesSum = 0
for(let i = 0 ;i < grades.length;i++) {
    if (typeof grades[i] === "number") {
        gradesSum += grades[i]
    }
}
console.log(gradesSum / grades.length,"средний")

let i85 =0
for(let grade of grades){
    if (grade > 85){
        i85++
    }
}
console.log(i85,"i > 85")
let arr90 = []
for(let grade of grades){
    if (grade >= 90){
        arr90.push(grade)
    }
}
console.log(arr90,"arr90")

console.log(grades.sort((a,b) => b - a))