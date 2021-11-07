'use strict'

/**
 * Функция складывает переданные параметры (a + b)
 * @param {number} a 
 * @param {number} b
 * @returns {namber} 
 */
function addition(a, b) {
   return a + b;
}

/**
 * Функция вычитает переданные параметры (a - b)
 * @param {number} a 
 * @param {number} b
 * @returns {namber} 
 */
function deduction (a, b) {
   return a - b;
}

/**
 * Функция делит переданные параметры (a / b)
 * @param {number} a 
 * @param {number} b
 * @returns {namber} 
 */
function division (a, b) {
   return a / b;
}

/**
 * Функция умножает переданные параметры (a * b)
 * @param {number} a 
 * @param {number} b
 * @returns {namber} 
 */
function generation (a, b) {
   return a * b;
}

/**
 *  Функция получает два числа и производит с ними действие
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation +, -, /, *.
 * @returns {number}
 * @throws {Error} Ошибка в случае не предусмотренной опреации
 */

function mathOperation (arg1, arg2, operation) {
   switch (operation) {
      case "+":
         return addition (arg1, arg2);
      case "-":
         return deduction (arg1, arg2);
      case "/":
         return division (arg1, arg2);
      case "*":
         return generation (arg1, arg2);
      default:
         throw new Error("Операция " + operation + " не предусмотрена")
   }
}

console.log (mathOperation(5, 9, "+"));
console.log (mathOperation(5, 9, "-"));
console.log (mathOperation(5, 9, "/"));
console.log (mathOperation(5, 9, "*"));
console.log (mathOperation(5, 9, "qwerty"));