// console.log("!");

/** Задание #1
Напишите функцию calculateAge(), которая принимает день рождения 
и возвращает количество лет.
const birthDate = new Date('1990-05-20');
const age = calculateAge(birthDate);
console.log(age);
 */

// function calculateAge(birthDate) {
//     const now = new Date();
//     const nowYear = now.getFullYear();
//     const birthYear = birthDate.getFullYear();
//     return nowYear - birthYear;
//   }
//   const birthDate = new Date("1990-05-20");
//   const age = calculateAge(birthDate);
//   console.log(age);

/**вариант 2 */
// function calculateAge(birthDate) {
//     const today = new Date();
//     let age = today.getFullYear() - birthDate.getFullYear();
//     const monthDiff = today.getMonth() - birthDate.getMonth();
//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//     }
//     return age

// }
//     const birthDate = new Date("1990-05-20");
//     const age = calculateAge(birthDate);
//     console.log(age);

/** Задание #2
Напишите функцию getDateDifference(), которая возвращает разницу 
в днях между двумя датами.

const date1 = new Date('2027-06-01');
const date2 = new Date('2027-06-10');
const difference = getDateDifference(date1, date2);
console.log(difference); // 9
*/
// function getDateDifference(date1, date2) {
//     day1 = date1.getDate();
//     day2 = date2.getDate();
//     return day2 - day1;
//   }

//   const date1 = new Date("2027-06-01");
//   const date2 = new Date("2027-06-10");
//   const difference = getDateDifference(date1, date2);
//   console.log(difference); // 9

/**вариант 2 */
// function getDateDifference(date1, date2) {
//     const oneDay = 24 * 60 * 60 * 1000;
//     const diffInMilliseconds = Math.abs(date2 - date1);
//     const diffInDays = Math.round(diffInMilliseconds / oneDay);
//     return diffInDays
// }

// const date1 = new Date('2027-06-01');
// const date2 = new Date('2027-06-10');
// const difference = getDateDifference(date1, date2);
// console.log(difference); // 9

/** Задание #3
Напишите функцию getTimeUntilDate(date), которая возвращает объект с 
информацией о том, сколько времени осталось от текущей даты до переданной. 
const targetDate = new Date('2027-12-31T23:59:59');
const timeUntilTargetDate = getTimeUntilDate(targetDate);
console.log(timeUntilTargetDate);
// { days: 100, hours: 20, minutes: 45, seconds: 31 }
 */
// function getTimeUntilDate(date) {
//   const now = new Date();
//   const timeDifference = date.getTime() - now.getTime();

//   if (timeDifference < 0) {
//     return { days: 0, hours: 0, minutes: 0, seconds: 0 };
//   }

//   const seconds = Math.floor(timeDifference / 1000);
//   seconds;
//   const minutes = Math.floor(seconds / 60);
//   minutes;
//   const hours = Math.floor(minutes / 60);
//   hours;
//   const days = Math.floor(hours / 24);
//   days;

//   return {
//     days: days,
//     hours: hours % 24,
//     minutes: minutes % 60,
//     seconds: seconds % 60,
//   };
// }

// const targetDate = new Date("2027-12-31T23:59:59");
// const timeUntilTargetDate = getTimeUntilDate(targetDate);
// console.log(timeUntilTargetDate);

/**Задание #4
Напишите функцию isWeekend(), которая проверяет, является ли указанная дата выходным днем. 

const isWeekend = (date) => [6, 7].indexOf(date.getDay()) !== -1;

const date1 = new Date("2027-07-10"); // Суббота
const date2 = new Date("2027-07-12"); // Понедельник

console.log(isWeekend(date1)); // true
console.log(isWeekend(date2)); // false
*/

// function isWeekend(data) {
//     return data.getDay() != 6 && data.getDay() != 0 ? false : true;
//   }

//   const date1 = new Date("2027-07-10"); // Суббота
//   const date2 = new Date("2027-07-12"); // Понедельник

//   console.log(isWeekend(date1)); // true
//   console.log(isWeekend(date2)); // false

/**вариант 2 */
// const isWeekend = (date) => [6, 7].indexOf(date.getDay()) !== -1;
// const date1 = new Date("2027-07-10"); // Суббота
// const date2 = new Date("2027-07-12"); // Понедельник
// console.log(isWeekend(date1)); // true
// console.log(isWeekend(date2)); // false

/**Задание #5

Напишите функцию, которая проверяет, является ли год високосным. 
Возвращает true, если да, иначе — false. 

console.log(isLeapYear(2023)); // false
console.log(isLeapYear(2024)); // true
*/

// function isLeapYear (year) {
//     return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
// }

// console.log(isLeapYear(2023)); // false
// console.log(isLeapYear(2024)); // true

/** вариант 2 */
// function isLeapYear (year) {
//     if (year % 4 !== 0 ) {
//         return false
//     } else if (year % 100 !== 0) {
//         return true;
//     } else if (year % 400 !== 0) {
//         return false;
//     } else {
//         return true;
//     }
// }
// console.log(isLeapYear(2023)); // false
// console.log(isLeapYear(2024)); // true

/** Задание #6
Напишите функцию, которая возвращает последнее число месяца.

// июнь 2027
console.log(getLastDayOfMonth(2027, 5)); // 30

// февраль 2027
console.log(getLastDayOfMonth(2027, 1)); // 28

// январь 2027
console.log(getLastDayOfMonth(2027, 0)); // 31
*/

function getLastDayOfMonth(year, month) {
  const lastDayOfMonth = new Date(year, month + 1, 0);
  return lastDayOfMonth.getDate();
}

// июнь 2027
console.log(getLastDayOfMonth(2027, 5)); // 30

// февраль 2027
console.log(getLastDayOfMonth(2027, 1)); // 28

// январь 2027
console.log(getLastDayOfMonth(2027, 0)); // 31
