// console.log("!");

/** Задание #1

Определите порядок вывода в следующем фрагменте кода без его запуска. 

console.log('a');
new Promise((resolve, reject) => {
	console.log('b');
	setTimeout(() => {
		console.log('c');
		resolve();
	}, 0);
})
  .then(() => console.log('d'));

console.log('e');
setTimeout(() => console.log('f'), 0);
console.log('g');
Определите для себя, почему вывод произошел именно в таком порядке.
 */

// console.log('a');
// new Promise((resolve, reject) => {
// 	console.log('b');
// 	setTimeout(() => {
// 		console.log('c');
// 		resolve();
// 	}, 0);
// })
//   .then(() => console.log('d'));

// console.log('e');
// setTimeout(() => console.log('f'), 0);
// console.log('g');

/**Задание #2

Напишите код, который получает список задач по URL 
https://jsonplaceholder.typicode.com/todos и выводит 
их в виде списка (<ul>) на страницу. 
Примечание. Сетевые запросы можно выполнять с помощью функции 
fetch(), работающей на основе Promise API.  */

// try {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.error("There was a problem with the fetch operation:", error);
//       });
//   } catch (error) {
//     console.error("Error during fetch:", error);
//   } finally {
//     console.log("Fetch operation completed.");
//   }

// async function getDataByUrl(url) {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = response.json();
//     return data;
//   } catch (error) {
//     console.error(console.error("Error during fetch:", error));
//     return null;
//   } finally {
//     console.log("Fetch operation completed.");
//   }
// }

// (async () => {
//   const url = "https://jsonplaceholder.typicode.com/todos";
//   const data = await getDataByUrl(url);
//   if (data !== null) {
//     //console.log(data);
//     const listElement = document.getElementById("list");
//     for (const key in data) {
//       if (Object.hasOwnProperty.call(data, key)) {
//         const listItem = document.createElement("li");
//         listItem.textContent = `${key}: ${JSON.stringify(data[key])}`;
//         listElement.appendChild(listItem);
//       }
//     }
//   } else {
//     console.log("Failed to fetch data from URL:", url);
//   }
// })();

/**вариант 2*/
// const url = "https://jsonplaceholder.typicode.com/todos";

// fetch(url)
// .then(response => response.json())
// .then(tasks => {
//   const ul = document.createElement("ul");
//   tasks.forEach(task => {
//     const li = document.createElement("li");
//     li.textContent = task.title;
//     ul.appendChild(li);
//   });
//   document.body.appendChild(ul);
// })
// .catch(error => console.error(error));

/** Задание #3
Напишите функцию sumWithDelay(), которая принимает delay, a, b 
и возвращает a + b через delay миллисекунд. Функция должна работать
 на основе Promise API. 

function sumWithDelay() {
  // Ваш код здесь...
}
async function start() {
  const result = await sumWithDelay(1000, 5, 5);
  console.log(result);
}
start();
*/

// async function sumWithDelay(delay, a, b) {
//   // Ваш код здесь...
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(a + b);
//     }, delay);
//   });
// }

// async function start() {
//   const result = await sumWithDelay(1000, 5, 5);
//   console.log(result);
// }

// start();

// (async () => {
//   const result = await sumWithDelay(1000, 5, 5);
//   console.log(result);
// })();

/**Задание #4

Напишите функцию, имитирующую запрос к серверу за получением пользователя. 
Она принимает id и с задержкой 2500 миллисекунд возвращает пользователя из 
массива USERS с соответствующим id. В случае отсутствия пользователя 
сгенерировать обработать исключение.

const USERS = [
  { id: '001', name: "Алексей", age: 25 },
  { id: '002', name: "Иван", age: 28 },
  { id: '003', name: "Егор", age: 30 },
];

function fetchUser(id) {
  // Ваш код здесь...
}

async function start() {
  // ...
  const result = await fetchUser('001');
  console.log(result); // { id: '001', name: "Алексей", age: 25 }
  // ...
}

start();
*/

// const USERS = [
//   { id: "001", name: "Алексей", age: 25 },
//   { id: "002", name: "Иван", age: 28 },
//   { id: "003", name: "Егор", age: 30 },
// ];

// async function fetchUser(id) {
//   // Ваш код здесь...
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const user = USERS.find((user) => user.id === id);
//         if (user) {
//           resolve(user);
//         } else {
//           reject(new Error("User not find"));
//         }
//       }, 2500);
//     });
//   }
// async function start() {
//   // ...
//   const result = await fetchUser("001");
//   console.log(result); // { id: '001', name: "Алексей", age: 25 }
//   // ...
// }

// start();
