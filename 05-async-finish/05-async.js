// Event Loop

// const timeout = setTimeout(() => {
//   console.log('after 2 seconds')
// }, 2000)

// clearTimeout(timeout)

// setTimeout(() => {
//   console.log('after 3 seconds')
// }, 3000)
// let count = 0
// setInterval(() => {
//   console.log('tick', ++count)
// }, 1000)

// function delay(callback, time = 1000) {
//   setTimeout(callback, time)
// }

// const delay = (time = 1000) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([1, 2, 3])
//       // reject('Error in delay')
//     }, time)
//   })
//   return promise
// }

// delay(2500)
//   .then((data) => {
//     console.log('Timeout', data)
//     return data.map((x) => x ** 2)
//   })
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
//   .finally(() => console.log('Finally'))

// const getData = () => new Promise((resolve) => resolve([1, 2, 3]))

// async function asyncExample() {
//   try {
//     await delay(3000)
//     const data = await getData()
//     console.log(data)
//   } catch (err) {
//     console.log(err)
//   } finally {
//     console.log('Finally')
//   }
// }

// asyncExample()


/**Задание #4

Напишите функцию, имитирующую запрос к серверу за получением пользователя. Она принимает id и с задержкой 2500 миллисекунд возвращает пользователя из массива USERS с соответствующим id. В случае отсутствия пользователя сгенерировать обработать исключение.

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

