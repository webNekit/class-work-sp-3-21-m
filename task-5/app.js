// Task - 5
// const peoples = ["Tom", "Vova", "Sam", "Bob", "Nat", "Ivan", "Stas"];
// console.log(peoples);
// for(let i = 0; i < peoples.length; i++) {
//     let result = peoples[i];
//     console.log(result);
// }

// Двухмерный массив
const peoples = [["Tom", 39], ["Bob", 18], ["Stan", 17], ["Tom", 39], ["Bob", 18], ["Stan", 17]];
// Сначала перебираем глобальный массив
for (let a = 0; a < peoples.length; a++) {
    // перебираем вложенные массивы
    for(let b = 0; b < peoples[a].length; b++) {
        let result = peoples[a][b];
        console.log(result)
    }
    console.log("-------------");
}