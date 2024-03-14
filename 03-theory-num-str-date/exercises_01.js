// console.log('!')
/**
 * Задание #1
Реализуйте функцию isPrimeNumber(), которая принимает число и возвращает true, 
если оно простое, иначе — false.
Примечание. Простые числа — это числа, которые больше 1 и не имеют делителей, 
кроме 1 и самого себя.
 */
// function isPrimeNumber(number) {
//   if (number <= 1) {
//     return false;
//   }

//   if (number === 2) {
//     return true;
//   }

//   if (number % 2 === 0) {
//     return false;
//   }

//   for (let i = 3; i <= Math.sqrt(number); i += 2) {
//     if (number % i === 0) {
//         return false;
//     }
//   }

//   return true;
// }

// console.log(isPrimeNumber(7)); // true
// console.log(isPrimeNumber(10)); // false
// console.log(isPrimeNumber(13)); // true

// вариант 2
// function isPrimeNumber(num) {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) return false;
//   }
//   return num > 1;
// }

// console.log(isPrimeNumber(7)); // true
// console.log(isPrimeNumber(10)); // false
// console.log(isPrimeNumber(13)); // true

/**
 * Задание #2
Напишите функцию func(), которая принимает num, min, max:
Если число num < min, то функция возвращает min ** 2.
Если число num > max, функция возвращает max ** 2.
Если число num < max - (max - min) / 2, то функция возвращает num ** 2
Иначе возвращает округленное вниз значение num.

function func(num, min, max) {
    // Ваш код здесь...
}

console.log(func(3, 1, 10)); // 9
console.log(func(15, 1, 10)); // 100
console.log(func(5, 1, 10)); // 25
console.log(func(8.5, 1, 10)); // 8
 */
// function func(num, min, max) {
//     if (num < min) {
//         return min ** 2;
//     } else if (num > max) {
//         return max ** 2;
//     } else if (num < max - (max - min) / 2) {
//         return num ** 2;
//     } else {
//         return Math.floor(num);
//     }
// }
// console.log(func(3, 1, 10)); // 9
// console.log(func(15, 1, 10)); // 100
// console.log(func(5, 1, 10)); // 25
// console.log(func(8.4, 1, 10)); // 8

// вариант 2
// const func = (num, min, max) => {
//   if (num < max - (max - min) / 2) return num ** 2;
//   if (num < min) return min ** 2;
//   if (num > max) return max ** 2;
//   return Math.floor(num);
// };

// console.log(func(3, 1, 10)); // 9
// console.log(func(15, 1, 10)); // 100
// console.log(func(5, 1, 10)); // 25
// console.log(func(8.5, 1, 10)); // 8

/** Задание #3

Создайте функцию isPerfectNumber(), которая принимает целое положительное число 
в параметры и возвращает true, если число является совершенным, 
и false в противном случае.

Примечание. Совершенное число — это число, равное сумме всех своих 
положительных делителей (за исключением самого числа). Например, 
число 6 является совершенным, потому что делители числа 6 (1, 2, 3) в сумме дают 6.
*/

// function isPerfectNumber(number) {
//   if (number <= 1) {
//     return false;
//   }

//   let devisorSum = 1;

//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       devisorSum += i;

//       if (i !== number / i) {
//         devisorSum += number / i;
//       }
//     }
//   }

//   return devisorSum === number;
// }

// вариант 2
// const isPerfectNumber = (num) => {
//   const a = [];
//   for (let i = 1; i < num; i++) {
//     if (num % i === 0) {
//       a.push(i);
//     }
//   }
//   return a.reduce((a, b) => a + b, 0) === num;
// };

// console.log(isPerfectNumber(6));   // true
// console.log(isPerfectNumber(28));  // true
// console.log(isPerfectNumber(12));  // false
// console.log(isPerfectNumber(16));  // false

// console.log(isPerfectNumber(6));   // true
// console.log(isPerfectNumber(28));  // true
// console.log(isPerfectNumber(12));  // false
// console.log(isPerfectNumber(16));  // false

/** Задание #4

Напишите функцию getNumberDigit(), которая принимает число (number) 
и индекс цифры в числе (digitPosition). Возвращает она цифру числа number, 
находящуюся на позиции digitPosition. 

Если происходит попытка чтения числа на позиции, которой не существует 
(например, кол-во цифр в числе меньше, чем передано в digitPosition), 
то верните undefined.

Примечание. Нельзя использовать приведение числа к строке.

function getNumberDigit(number, digitPosition) {
  // Ваш код здесь...
}

getNumberDigit(123, 0) // 1
getNumberDigit(123, 1) // 2
getNumberDigit(123, 2) // 3
getNumberDigit(1, 2) // undefined
*/

// function getNumberDigit(number, digitPosition) {
//     // Проверяем, что позиция цифры не отрицательна
//     if (digitPosition < 0) {
//         return undefined;
//     }

//     let divisor = 1;
//     let num = number;

//     // Находим количество цифр в числе
//     let numLength = 1;
//     while (num >= 10) {
//         numLength++;
//         num = Math.floor(num / 10);
//     }

//     // Если позиция цифры больше количества цифр в числе, возвращаем undefined
//     if (digitPosition >= numLength) {
//         return undefined;
//     }

//     // Находим цифру в числе на указанной позиции
//     for (let i = 0; i < numLength - digitPosition - 1; i++) {
//         divisor *= 10;
//     }

//     return Math.floor((number / divisor) % 10);
// }

// Примеры использования функции
// console.log(getNumberDigit(123, 0)); // 1
// console.log(getNumberDigit(123, 1)); // 2
// console.log(getNumberDigit(123, 2)); // 3
// console.log(getNumberDigit(1, 2));   // undefined

// варинат 2
// console.log("!");
// function getNumberDigit(number, digitPosition) {
//   if (digitPosition < 0) {
//     return undefined;
//   }

//   const count = countDigits(number);

//   if (digitPosition > count) {
//     return undefined;
//   }

//   const invertedIndex = count - 1 - digitPosition;
//   let tempNumber = Math.abs(number);

//   for (let i = 0; i < invertedIndex; i++) {
//     tempNumber = Math.floor(tempNumber / 10);
//   }

//   return tempNumber % 10;
// }

// function countDigits(number) {
//   if (number === 0) {
//     return 1;
//   }

//   let count = 0;
//   let num = Math.abs(number);

//   while (num >= 1) {
//     num = Math.floor(num / 10);
//     count++;
//   }

//   return count;
// }

// console.log(getNumberDigit(123, 0)); // 1
// console.log(getNumberDigit(123, 1)); // 2
// console.log(getNumberDigit(123, 2)); // 3
// console.log(getNumberDigit(1, 2)); // undefine
