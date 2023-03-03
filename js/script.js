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
            alert("Число" + middl);
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
//
// перевірка дня
let data = prompt("Введіть дату, через оператор (-) ");
let [day, month, year] = data.split('-');
day = +(day);
month = +(month);
year = +(year);
let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
if (month > 12 || month < 1) {
    alert("Невірний місяць");

let Day1 = "Понеділок";
let Day2 = "Вівторок";
let Day3 = "Середа";
let Day4 = "Четвер";
let Day5 = "П'ятниця";
let Day6 = "Субота";
let Day7 = "Неділя";
let Day = 0;
let consoleInfo = prompt("");
// while (consoleInfo) {
//     Day++;
//     consoleInfo = prompt(ConsoleInfo);
// }
