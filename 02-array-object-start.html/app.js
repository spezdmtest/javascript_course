/*// Theory

//  const array = [1, 2, 3, 5, 20, 42]
// const arrayStrings = ['a', 'b', 'c', null, 'd']
// const array = new Array(1, 2, 3, 5, 20, 42, 111)
// console.log(array.length)
// console.log(arrayStrings)
// console.log(array[1])
// console.log(array[10])
// console.log(array[array.length-1])
// array[0] = 'Privet!'
// console.log(array)
// array[array.length] = 'becon'
// console.log(array)
*/

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')


// const notes = ['записать блок про массивы', 'рассказать теорию объектов']

// function render() {

//     for (let note of notes) {
//         listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
//     }       
// }

// render()

// console.log(inputElement.value)
// createBtn.onclick = function () {
//     if (inputElement.value.length === 0) {
//         return
//     }
//     // listElement.innerHTML =  `
//     //     <li
//     //         class="list-group-item d-flex justify-content-between align-items-center"
//     //         >
//     //         <span>${inputElement.value}</span>
//     //         <span>
//     //             <span class="btn btn-small btn-success">&check;</span>
//     //             <span class="btn btn-small btn-danger">&times;</span>
//     //         </span>
//     //     </li>
//     // `

//     listElement.insertAdjacentHTML(
//         'beforeend',
//         getNoteTemplate(inputElement.value)
//      )
//         inputElement.value = '';
// }
    // function getNoteTemplate(title) {
    //     return `
    //     <li
    //         class="list-group-item d-flex justify-content-between align-items-center"
    //         >
    //         <span>${title}</span>
    //         <span>
    //             <span class="btn btn-small btn-success">&check;</span>
    //             <span class="btn btn-small btn-danger">&times;</span>
    //         </span>
    //     </li>
    //     `          
    // }

/**
 * Object Theory   
const person = {
    firstName: 'Dmytro',
    lastName: 'Ostapenko',
    year: 1983,
    hasGirlfriend: false,
    languages: ['ru','ua','en'],
    getFullName: function () {
        console.log(person.firstName + ' ' + person.lastName)
    }
}
console.log(typeof person) 
console.log(person.year)
console.log(person['languages'])
const key = 'hasGirlfriend'
console.log(person[key])
person.hasGirlfriend = true
console.log(person[key])
person.getFullName()
*/
const notes = [
    {
    title: 'записать блок про массивы',
    completed: false
    },
    {
    title: 'рассказать теорию объектов',
    completed: false
    },    
]

function render() {
    listElement.innerHTML = ''
    if (notes.length === 0) {
        listElement.innerHTML = '<p>Нет элементов</p>'
    }
    for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i));
    }
    // for (let note of notes) {
    //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
    // }       
}

render()

createBtn.onclick = function () {
    if (inputElement.value.length === 0) {
        return
    }

    const newNote = {
        title: inputElement.value,
        completed: false,
    }

    // listElement.insertAdjacentHTML(
    //     'beforeend',
    //     getNoteTemplate(newNote)
    //  )

    notes.push(newNote)
    render()
    inputElement.value = '';
}

listElement.onclick = function(event) {
// console.log(event.target.dataset.index)
if (event.target.dataset.index) {
//    const index = Number(event.target.dataset.index)      
    const index = parseInt(event.target.dataset.index)
    const type = event.target.dataset.type

    if (type === 'toggle') {
        // console.log('toogle', index)
        notes[index].completed = !notes[index].completed
    } else if (type === 'remove') {
        // console.log('remove', index)
        notes.splice(index, 1)
    }
    render()
    }
}

function getNoteTemplate(note, index) {
console.log(note.completed)
    return `
            <li
                class="list-group-item d-flex justify-content-between align-items-center"
                >
                <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
                <span>
                    <span class="btn btn-small btn-${
                        note.completed ? 'warning' : 'success'
                    }" data-index="${index}" data-type="toggle">&check;</span>
                    <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
                </span>
            </li>
        `          
    }
