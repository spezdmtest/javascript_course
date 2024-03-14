// console.log("!");
/**
 *Задание 1 #
Дан объект машины. 

const car = {
  name: 'Hendai Solaris',
	type: 'sedan',
	maxSpeed: '320',
	color: 'red',
}
Необходимо написать написать функцию, 
которая принимает объект машины и возвращает строку с HTML, 
заполненную значениями переданного объекта. 

<article>
    <div>
        <h2>Hendai Solaris</h2>
        <span>sedan</span>
    </div>
    <div>
        <span>Maximum speed:</span>
        <span>320</span>
    </div>
    <div>
        <span>Color:</span>
        <span>red</span>
    </div>
</article>
 */

// const car = {
//   name: "Hendai Solaris",
//   type: "sedan",
//   maxSpeed: "320",
//   color: "red",
// };

// function getCar(car) {
//   return;
//   `
//     <article>
//         <div>
//             <h2>${car.name}</h2>
//             <span>${car.type}</span>
//         </div>
//         <div>
//             <span>Maximum speed:</span>
//             <span>${car.maxSpeed}</span>
//         </div>
//         <div>
//             <span>Color:</span>
//             <span>${car.color}</span>
//         </div>
//     </article>
// `;
// }

// console.log(getCar(car));

/**
 * Задание #2

Необходимо написать функцию countWords(),
которая принимает предложение и подсчитывает количество слов в нем.

const sentence = "Hello, how are you?";
console.log(countWords(sentence)); // 4
 */

// const sentence = "Hello, how are you?";
// console.log(countWords(sentence)); // 4

// function countWords (sentence) {
//     let words = sentence.split(' ');
//     return words.length;
// }

/** вариант 2 */
//   const sentence = "Hello, how are you?";
// const countWords = str => str.split(" ").length;
// console.log(countWords(sentence));

/*Задание #3

Необходимо написать функцию getInitials(), 
которая принимает полное имя в виде строки (например, “John Doe”) 
и возвращает инициалы в формате “J. D.”.

const fullName = "John Doe";
const initials = getInitials(fullName);
console.log(initials); // "J. D."
*/
// const fullName = "John Doe";
// const initials = getInitials(fullName);
// console.log(initials); // "J. D."

// function getInitials(fullName) {
//     const words = fullName.split(' ');
//     const initials = [];

//     words.forEach(word => {
//         initials.push(word[0].toUpperCase() + ".");
//     });

//     return initials.join(' ');
// }

/*** вариант 2*/
// const fullName = "john doe";
// const getInitials = name => name.split(" ").map((el) => `${el[0].toUpperCase()}.`).join(" ")
// const initials = getInitials(fullName);
// console.log(initials); // "J. D."

/**
 * Задание #4

Необходимо написать функцию generateGoogleString(), 
которая принимает число и возвращает сроку ”Google” 
с указанным количеством букв “o”. При этом минимальное 
количество букв “о” равно 2.

console.log(generateGoogleString(4));
// Goooogle

console.log(generateGoogleString(0));
// Google

console.log(generateGoogleString(-2));
// Google
 */
// function generateGoogleString(number) {
//     if (number < 2) {
//       return "Google";
//     }
//     let result = "G";
//     for (let i = 0; i < number; i++) {
//       result += "o";
//     }
//     result += "gle";

//     return result;
//   }

/**  вариант 2 */
// const generateGoogleString = (times = 0) =>
//   `G${"o".repeat(Math.max(2, times))}gle`;
// console.log(generateGoogleString(4)); // Goooogle
// console.log(generateGoogleString(0)); // Google
// console.log(generateGoogleString(-2)); // Google

/**
 * Задание #5

Реализуйте функцию countVowels(), которая подсчитывает количество 
гласных букв (латинских и кириллических) в переданной строке. 
const str = "Hello, Привет!";
console.log(countVowels(str)); // 4
*/

// function countVowels(str) {
//     const vowelPattern = /[aeiouаеёиоуыэюя]/gi; 
// /**
//  * gi: Это флаги регулярного выражения:
// g (global) - ищет все совпадения в тексте, а не только первое совпадение.
// i (case-insensitive) - делает поиск независимым от регистра, так что "А" 
// будет соответствовать как "А", так и "а".
// */ 
//     const matches = str.match(vowelPattern);
//     return matches ? matches.length : 0;
// }

// const str = "Hello, Привет!";
// console.log(countVowels(str)); // 4

/**вариант 2 */
// const countVowels = (str) => {
//     const vowels = ['a', 'e', 'i', 'o', 'u', 'а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i].toLowerCase())) {
//             count++;
//         }
//     }
//     return count;
// }

// const str = "Hello, Привет!";
// console.log(countVowels(str)); // 4
