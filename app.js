function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Чётное";
    }else {
        return "Нечётное";
    }
}
console.log(checkEvenOdd(5))

function factorial(n){
    if (n < 0) {
        throw new Error("Только положительные числа");
    }
    let f = 1
    for (let i = 1; i <= n; i++) {
        f *= i
    }
    return f;
}
console.log(factorial(0))

function  findMax(arr){
    max = arr[0];
    for(let element of arr) {
        if (element > max) {
            max = element
        }
    }
    return max;
}
console.log(findMax([1,2,3,4,5]));

function sumArray(arr2){
    let sum = 0;
    for(let i = 0 ; i <= arr2.length ; i++ ) {
        if (typeof arr2[i] === "number") {
            sum += arr2[i]
        }    }
    return sum;
}
console.log(sumArray([1,2,3,4,5]));

function countVowels(str) {
    let vowels = 0;
    for (let el of str) {
        if (el === "a" || el === "o" || el === "i" || el === "u" || el === "e") {
            vowels++;
        }
    }
    return vowels;
}

console.log(countVowels("hello")); // Вывод: 2
