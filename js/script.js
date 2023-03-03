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
let infoFromUser = prompt("Введіть свою дату, використовуючи крапку, наприклад 18.01.1888");

let dateParts = infoFromUser.split(".");
let day = parseInt(dateParts[0]);
let month = parseInt(dateParts[1]) - 1;
let year = parseInt(dateParts[2]);
let nextDate = new Date(year, month, day + 1);

// перевірка місяця
if (nextDate.getMonth() !== month) {
    nextDate = new Date(year, month + 1, 1);
}

// перевірка року та високосного року
while (nextDate.getFullYear() !== year || (nextDate.getFullYear() % 4 !== 0 || (nextDate.getFullYear() % 100 === 0 && nextDate.getFullYear() % 400 !== 0))) {
    nextDate = new Date(nextDate.getFullYear() + 1, 0, 1);
}

let nextDay = nextDate.getDate();
let nextMonth = nextDate.getMonth() + 1;
let nextYear = nextDate.getFullYear();
alert(`Наступна дата: ${nextDay}-${nextMonth}-${nextYear}`);
console.log(`Наступна дата: ${nextDay}-${nextMonth}-${nextYear}`);

