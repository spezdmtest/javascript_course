//  console.log("!")
/**
 * Задание #1
 * Необходимо создать 3 переменных: var a, let b, const c и присвоить 
 * им значения 5 , 10, 13 соответственно.
Выведите все три переменные с помощью console.log().
После вывода присвойте переменным a, b и с новые значения, 
затем выведите их в консоль и посмотрите, что получилось. 
В случае возникновения ошибок удалить “проблемное” выражение.
 */


// var a = 5;
// let b = 10;
// const c = 13;

// console.log(a);
// console.log(b);
// console.log(c);

// a = 11;
// b = 12;
// c = 13;

// console.log(a);
// console.log(b);
// console.log(c);


/**
 * Задание #2
 * Последовательно запустите следующие фрагменты кода и посмотрите, что получилось:
 */
 
// const a = 100;
// a = 20;
// console.log(a); // excercises.js:26 Uncaught TypeError: Assignment to constant variable.

// console.log(a)
// let a = 15;
// console.log(a); // excercises.js:29 Uncaught ReferenceError: Cannot access 'a' before initialization

// console.log(a);
// var a;
// a = 10;
// console.log(a); // undefined 10 

/**
 * Задание #3

Необходимо написать программу, в которой нужно определить переменные 
(указать для них свои значения):

productName — название товара.
productPrice — стоимость.
productQuantity — количество купленного товара.
resultCost — итоговая стоимость (высчитать динамически, 
    с учетом цены и количества товара).
Выведите в консоль строку, в которой на месте фигурных 
скобок будут соответствующие значения переменных:

“Вы купили {productName} ({productQuantity} шт.) по {productPrice} ₽. 
Всего было потрачено: {resultCost} ₽”
*/

// const productName = 'iPhone 13';
// const productPrice = 1000;
// const productQuantity = 55;
// const resultCost = productQuantity * productPrice;

// console.log(`Вы купили ${productName} (${productQuantity} шт.) по ${productPrice} ₽. Всего было потрачено: ${resultCost} ₽`);

/**
 * Задание #4

Выведите в консоль следующие выражения:

// console.log(typeof 'Hello')      // string
// console.log(typeof 10)           // number
// console.log(typeof {})           // object  
// console.log(typeof null)         // object
// console.log(typeof undefined)    // undefined
// console.log(typeof true)         // boolean
// console.log(typeof [])           // object 
// console.log(typeof (() => {}))   // function 
Проанализируйте результат выполнения программы и определите для себя, 
почему произошел тот или иной вывод. 
 */


/**
 * Задание #5

Выведите в консоль следующие выражения:

console.log(10 == 10)         // true
console.log(10 != 10)         // false
console.log(12 == 'Привет')   // false
console.log(10 < 11)          // true
console.log(12 > 20)          // false
console.log(true && true)     // true
console.log(true && false)    // false
console.log(false && true)    // false
console.log(false || true)    // true
console.log(true || false)    // true
console.log(true || false)    // true
console.log(true || true)     // true
console.log(10 <= 10)         // true       
console.log(18 <= 20)         // true
console.log(50 >= 50)         // true
console.log(51 >= 50)         // true  
conlose.log({} === {})        // always false
console.log({} == {})         // false

Сравнение по ссылке:

const a = {};
const b = a;
console.log(a === b); // true
Проанализируйте результат выполнения программы и определите для себя, 
почему произошел тот или иной вывод. 
 */

/** Задание #6
Создайте переменную a и b, присвойте им любые числа. Если a больше b, 
выведите в консоль true, иначе — false. 

Примечание. Нельзя использовать if...else и тернарный оператор.

const a = 10;
const b = 12;
conosle.log(a > b);
*/