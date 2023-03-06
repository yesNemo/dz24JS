// dz1
    let min = 0;
    let max = 100;
    while (true) {
        middl = Math.floor((min + max) / 2);
        let result = prompt("Число >, < або = "+ middl);
        if (result === ">") {
            min = middl + 1;
        } else if (result === "<") {
            max = middl - 1;
        } else if (result === "=") {
            alert("Число " + middl);
            break;
        } else {
            alert("Error01");
        }
    }
// dz 2
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + " помножити на " + j + " = "+ (i * j))
    }
}
// dz3
let infoFromUser = prompt("Введіть свою дату, використовуючи крапку  , наприклад 18.01.1888");

let dateParts = infoFromUser.split(".");
let day = parseInt(dateParts[0]);
let month = parseInt(dateParts[1]) - 1;
let year = parseInt(dateParts[2]);
let nextDate = new Date(year, month, day + 1);

if (isNaN(day) || isNaN(month) || isNaN(year)) {
    alert("Некоректний формат введеної дати!");
} else if (month < 0 || month > 11) {
    alert("Номер місяця має бути від 1 до 12!");
} else if (day < 1 || day > new Date(year, month + 1, 0).getDate()) {
    alert("Кількість днів у місяці введено невірно!");
} else {
    let nextDate = new Date(year, month, day + 1);
}
// перевірка місяця
if (nextDate.getMonth() !== month) {
    nextDate = new Date(year, month + 1, 1);
}

// перевірка року та високосного року
while (true) {
    let isLeapYear = (nextDate.getFullYear() % 4 === 0 && nextDate.getFullYear() % 100 !== 0) || (nextDate.getFullYear() % 400 === 0);
    if (isLeapYear && nextDate.getMonth() === 1 && nextDate.getDate() === 29) {
        break;
    } else if (!isLeapYear && nextDate.getMonth() === 1 && nextDate.getDate() === 28) {
        break;
    } else if (nextDate.getMonth() !== 1) {
        break;
    }
    nextDate.setDate(nextDate.getDate() + 1);
}

let nextDay = nextDate.getDate();
let nextMonth = nextDate.getMonth() + 1;
let nextYear = nextDate.getFullYear();
alert(`Наступна дата: ${nextDay}-${nextMonth}-${nextYear}`);
console.log(`Наступна дата: ${nextDay}-${nextMonth}-${nextYear}`);
