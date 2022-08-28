/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
 */

function capitalize(str) {
  let arrayFromString = str.split(" ");
  let result = [];

  arrayFromString.forEach(function (word) {
    let firstLetter = word.slice(0, 1);
    result.push(firstLetter.toUpperCase() + word.slice(1));
  });

  return result.join(" ");
}
// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize("молодость всё простит")); // "Молодость Всё Простит"
