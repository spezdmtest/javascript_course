// console.log('!')

/**
 * Задание #1

Создайте 2 объекта john и ann с полями name, age, pet и заполните их именем,
 возрастом и именем питомца соответственно.
Создайте функцию, которая в параметры принимает объект человека (john или ann), 
и в качестве результата выводит информацию о нем в консоль:

“Меня зовут {name}, мне {age}, у меня есть питомец {pet}”

Создайте функцию incrementAge(), которая в параметры принимает объект человека и 
увеличивает ему возраст на 1.

Выведите циклом все названия свойств и их значения, которые есть у объекта john.
 */

// const john = { name: "Bonia", age: 4, pet: "cat" };
// const ann = { name: "Bobyk", age: 8, pet: "dog" };

// function getPetByPerson(person) {
//   return `Меня зовут ${person.name}, мне ${person.age}, у меня есть питомец ${person.pet}`;
// }
// console.log(getPetByPerson(john));
// console.log(getPetByPerson(ann));

// function incrementAge(person) {
//   person.age++;
// }
// incrementAge(john);
// incrementAge(ann);

// for (let key in john) {
//     console.log(`${key}: ${john[key]}`);
// }

// вариант 2
// const john = {
//   name: "John",
//   age: 22,
//   pet: "cat",
// };

// const ann = {
//   name: "Ann",
//   age: 24,
//   pet: "fish",
// };

// const info = ({ name, age, pet }) =>
//   console.log(`Меня зовут ${name}, мне ${age},
//              у меня есть питомец ${pet}`);

// const incrementAge = (people) => people.age++;

// const display = (people) => {
//   for (const [key, value] of Object.entries(people))
//     console.log(`${key}: ${value}`);
// };

// info(john);
// incrementAge(john);
// display(john);

// info(ann);
// incrementAge(ann);
// display(ann);

/**
 * Задание #2

Создайте функцию, которая на вход принимает массив, а на выходе возвращает сумму 
его элементов:
function sum(array) {
  // Ваш код здесь...
}

const arr = [1, 50, 20, 75, 90];

sum(arr); // 236
 */

// const arr = [1, 50, 20, 75, 90];

// function sum(array) {
//   let sumArray = 0;
//   array.forEach((element) => {
//     sumArray += element;
//   });
//   return sumArray;
// }
// console.log(sum(arr));

/**
 * Задание #3

Создайте пустой массив names.
Добавьте в него 5 любых имен.
Выведите массив в консоль.
Уберите из начала и конца массива по 1 элементу.
Снова выведите массив в консоль.
 * 
 */

// const names = [];
// names.push("Dima", "Oleg", "Alexey", "Daria", "Alexandr");
// console.log(names);
// names.pop();
// names.shift();
// console.log(names);

/**
 * Задание #4

Дан массив names. Необходимо сделать функцию, которая на основе этого массива 
генерирует строку c HTML. Она представляет из себя список элементов (<ul>), 
где каждый элемент списка (<li>) содержит элемент массива.

const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya'];
 */

// const names = ["Bob", "Klar", "Petya", "Ilya", "Viktoriya"];

// function generateList(array) {
//   let htmlString = "<ul>";
//   array.forEach((element) => {
//     htmlString += `<li>${element}</li>`;
//   });
//   htmlString += "</ul>";
//   return htmlString;
// }
// console.log(generateList(names));

// вариант 2
// const names = ["Bob", "Klar", "Petya", "Ilya", "Viktoriya"];
// const renderHtml = (arr) =>
//   `<ul>${arr.map((i) => `<li>${i}</li>`).join("")}</ul>`;
// console.log(renderHtml(names));

/**Задание #5

Дан объект:
const obj = {
	age: 22,
	favColor: 'red',
	height: 188,
	pet: 'dog',
	money: 12300
};
Необходимо выполнить деструктуризацию объекта (для всех полей). 
Выведите полученные переменные в консоль. 
*/

// const obj = {
//   age: 22,
//   favColor: "red",
//   height: 188,
//   pet: "dog",
//   money: 12300,
// };

// // Деструктуризация объекта
// const { age, favColor, height, pet, money } = obj;

// console.log(age);
// console.log(favColor);
// console.log(height);
// console.log(pet);
// console.log(money);
// console.log(age, favColor, height, pet, money);

/**
 * Задание #6

Даны объекты:

const obj = {
	age: 22,
	favColor: 'red',
	height: 188,
	pet: 'dog',
	money: 12300
};

const updateObj = {
	age: 23,
	favColor: 'blue',
	money: 11450
};


//const obj2 =? /* ... */
//console.log(obj2);
/**
 * {
 *	age: 23,
 *	favColor: 'blue',
 *	height: 188,
 *	pet: 'dog',
 *	money: 11450
 * }
 */
/** Необходимо создать новый объект obj2, в котором будут все поля объекта obj, 
но с обновленными значениями полей как у объекта updateObj. 
*/

// const obj = {
//   age: 22,
//   favColor: "red",
//   height: 188,
//   pet: "dog",
//   money: 12300,
// };

// const updateObj = {
//   age: 23,
//   favColor: "blue",
//   money: 11450,
// };

// obj2 = obj;
// const { age, favColor, money } = updateObj;
// obj2.age = age;
// obj2.favColor = favColor;
// obj2.money = money;
// console.log(obj2);

// вариант 2
// const obj2 = { ...obj, ...updateObj };
// console.log(obj2);