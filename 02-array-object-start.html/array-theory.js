// console.log('!')
// const names = ['Дмитрий', 'Елена', 'Игорь', 'Ксения']

// names.push('Алена')
// names.unshift('Алена')
// const firstName = names.shift() 
// const name = names.pop()
// console.log("Names: ", names, name)

// console.log(names)
// console.log(names.reverse())
// console.log(names)

// console.log(names.toReversed())
// console.log(names)

// const letters = ['e','c','d','b','a']
// console.log(
//     letters.sort(function (a, b) {
//         return a.charCodeAt(0) - b.charCodeAt(0)
//     } )
// )
// console.log(letters)
// console.log(letters.sort())
// console.log(letters)

// console.log(letters)
// console.log(letters.toSorted());
// console.log(letters)

//  const names = ['Дмитрий', 'Елена', 'Игорь', 'Ксения']
// console.log(names.splice(2, 1))
// console.log(names)
// console.log(names.toSpliced(2, 1))
// console.log(names)

// const greateWoman = 'Елена'
// const index = names.indexOf(greateWoman)
// console.log(index)
// const newNames = names.with(index, 'Елена Великая')
// names[index] = 'Елена Великая'
// console.log(names[index])
// console.log(names)
// console.log(newNames)
// console.log(names)

// const capitalNames = names.map(function (name, index) {
//     if (index === 1) {
//         return 'Елена Великая'
//     }
//     return name;
//     // const newName = name + '!'
//     // return name + '!'
//     // return name.toUpperCase()
//     // return name.toLowerCase()
// })
// console.log(capitalNames)

// console.log(names.includes('Игорь'))
// console.log(names.indexOf('Игорь') !== -1) 

// const people = [ 
//     {name: 'Дмитрий', budget: 5200},
//     {name: 'Елена', budget: 1200},
//     {name: 'Игорь', budget: 2200},
//     {name: 'Ксения', budget: 3200}
// ]

// let findedPerson

// for (let person of people) {
//     if (person.budget === 5200) {
//         findedPerson = person
//     }
// }
// console.log(findedPerson)

// const findedPerson = people.find(function (person) {
//     // if (person.budget === 5200) {
//     //     return true;
//     // }
//     return person.budget === 5200
// }) 

// const finded = people.find((person) => person.budget===5200)
// console.log(findedPerson)

// const people = [ 
//     {name: 'Дмитрий', budget: 5200},
//     {name: 'Елена', budget: 1200},
//     {name: 'Игорь', budget: 2200},
//     {name: 'Ксения', budget: 3200}
// ]

// const finded = people.findIndex(function 
//     (person) {
//     // if (person.budget === 5200) {
//     //     return true;
//     // }
//     return person.budget === 5200
// }) 

// console.log(people[finded])
//   console.log(people.with(finded, 42))
//   console.log(people)  

// let sumBudget = 0;
// const filtered = people.filter(function (p) {
//     return p.budget > 2000
// })   
// console.log(filtered)
// filtered.forEach(function(p) {
//     sumBudget += p.budget
// })
// console.log(sumBudget)

// const people = [ 
//     {name: 'Дмитрий', budget: 5200},
//     {name: 'Елена', budget: 1200},
//     {name: 'Игорь', budget: 2200},
//     {name: 'Ксения', budget: 3200}
// ]

// const byBudget = (p) => p.budget > 2000
// const pickBudget = (p) => p.budget

// const sumBudget = people.filter(byBudget)
//                         .map(pickBudget)
//                         .reduce((acc, p) => acc + p, 0)
// console.log(sumBudget)

// const string = 'Привет, как дела ?'
// const reversed = string.split('').toReversed().join('!').split('').filter((c) => c !== '!')
// .join('')
                   
// console.log(reversed)