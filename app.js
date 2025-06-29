let employees = [
    {
        name: "Иван",
        age: 30,
        gender: "мужской",
        phone: {
            home: "123-45-67",
            mobile: "89012345678"
        }
    },
    {
        name: "Мария",
        age: 25,
        gender: "женский",
        phone: {
            home: "234-56-78",
            mobile: "89123456789"
        }
    },
    {
        name: "Алексей",
        age: 28,
        gender: "мужской",
        phone: {
            home: "345-67-89",
            mobile: "89234567890"
        }
    }
];

employees.push({
    name: "Кутман",
    age: 20,
    gender: "мужской",
    phone: { home: "555-55-55", mobile: "+996704942150" }
});


for (let i = 0; i < employees.length; i++) {
    if (employees[i].age > 25) {
        console.log(employees[i]);
    }
}

for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].name);
}
for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];
    console.log(`Имя: ${employee.name}, Возраст: ${employee.age}, Пол: ${employee.gender}, Домашний: ${employee.phone.home}, Сотовый: ${employee.phone.mobile}`);
}

for (let i = 0; i < employees.length; i++) {
    if (employees[i].gender === "женский") {
        console.log(employees[i]);
        break;
    }
}

let maleCount = 0;
let femaleCount = 0;
for (let i = 0; i < employees.length; i++) {
    employees[i].gender === "мужской" ? maleCount++ : femaleCount++;
}
console.log(`Мужчин: ${maleCount}, Женщин: ${femaleCount}`);

for (let i = 0; i < employees.length; i++) {
    let status = employees[i].age >= 18 ? "взрослый" : "не взрослый";
    console.log(`${employees[i].name} — ${status}`);
}

for (let i = 0; i < employees.length - 1; i++) {
    for (let j = 0; j < employees.length - 1 - i; j++) {
        if (employees[j].age > employees[j + 1].age) {
            [employees[j], employees[j + 1]] = [employees[j + 1], employees[j]];
        }
    }
}
console.log(employees);


const searchPhone = prompt("Введите номер телефона:");
let found = false;
for (let i = 0; i < employees.length; i++) {
    if (employees[i].phone.mobile === searchPhone) {
        console.log(employees[i]);
        found = true;
        break;
    }
}
if (!found) console.log("Сотрудник не найден");