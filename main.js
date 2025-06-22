let color=prompt('');
let red = "Красный"
let yellow = "Жёлтый"
let green = "Зелёный"

if( color === red){
    console.log("Остановитесь!")
}else if( color === yellow){
    console.log("Приготовьтесь!")
}else if( color === green){
    console.log("Можно ехать!")
}
else{
    console.log("Ошибка: некорректный цвет светофора.")
}