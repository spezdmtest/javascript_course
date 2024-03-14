// console.log("test");
// const person = {
//   name: "Dmytro",
//   age: 40,
//   isProgrammer: true,
//   languages: ["ua", "ru", "e n"],
//   address: {
//     city: "Zaporizhzhya",
//     street: "Jubilay Avenue",
//   },
//   "complex key": "complex value",
//   [1 + 2]: "computed value",
//   [new Date().getTime()]: "computed value",
//   ["key_" + 21 * 2]: "computed value",

//   greet() {
//     console.log("Greet from person", this);
//   },

//   arrow: () => {
//     console.log("Person Arrow", this);
//   },
//   info() {
//     console.log(this);
//     console.log("Personn name: ", this.name);
//   },
// };

// person;
// console.log(person);

// // console.log(typeof person);
// // console.log(typeof null);
// person.greet();
// person.arrow();
// person.info();

// console.log(person.address);
// console.log(person["address"]);
// console.log(person["complex key"]);

// const addressKey = "address";
// console.log(person[addressKey]);

// person.age++;
// console.log(person.age);

// person.languages.push("de");
// console.log(person.languages);

// person.address = undefined;
// console.log(person);

// delete person.address;
// console.log(person);

// // Destructoring
// // const age = person.age;
// // const name = person.name;
// // const languages = person.languages;
// const { age, name: firstName = "TEST", languages } = person;
// console.log(firstName, age, languages);

// for (let key in person) {
//   if (person.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(person[key]);
//   }
// }

// console.dir(Object);

// const keys = Object.keys(person);
// console.log(keys);

// keys.forEach((key) => {
//   console.log(person[key]);
// });

// Object.keys(person).forEach((key) => {
//   console.log(person[key]);
// });

// const logger = {
//   keys() {
//     console.log("Object keys", Object.keys(this));
//   },
//   keysAndValues() {
//     Object.keys(this).forEach((key) => {
//       console.log("Key: ", key);
//       console.log("Value: ", this[key]);
//     });
//   },
// };

// logger.keys();
// logger.keysAndValues();

// const logger = {
//     keys(obj) {
//       console.log("Object keys", Object.keys(obj));
//     },
//     keysAndValues() {
//       Object.keys(this).forEach((key) => {
//         console.log("Key: ", key);
//         console.log("Value: ", this[key]);
//       });
//     },
//   };

//   logger.keys(person);
//   logger.keysAndValues();

// const logger = {
//   keys(withText = true) {
//     if (withText) {
//       console.log("Object keys", Object.keys(this));
//     } else {
//       console.log(Object.keys(this));
//     }
//   },
//   keysAndValues() {
//     Object.keys(this).forEach((key) => {
//       console.log("Key: ", key);
//       console.log("Value: ", this[key]);
//     });
//   },
// };

// logger.keys(person);
// logger.keysAndValues();

// const bound = logger.keys.bind({a: 1});
// console.log(bound());

// const bound = logger.keys.bind(person);
// console.log(bound());

// logger.keys.bind(person)();
// logger.keys.call(person, false);
// logger.keys.apply(person, [false]);

// const bound = logger.keys.bind(person);
// bound(false);

// class Human {
//   isHuman = true;
//   static isHumanStatic = true;
//   humanGreet() {
//     console.log("Greet from human");
//   }

//   toString() {
//     console.log("new to String");
//   }
// }

// class Person extends Human {
//   constructor(name, age) {
//     super();
//     this.name = name ?? "Undefined name";
//     this.age = age ?? "Undefined name";
//   }

//   sayHello() {
//     console.log("Hello from ", this.name);
//   }
// }

// const newPersonWithNull = new Person();
// console.log(newPersonWithNull);

// const newPerson1 = new Person("Dmytro", 40);
// console.log(newPerson1.toString());
// newPerson1.sayHello();

// const newPerson2 = new Person("Elena", 21);
// console.log(newPerson2);
// newPerson2.sayHello();

// console.log(newPerson1.isHuman);
// newPerson1.humanGreet();

// console.log(Human.isHumanStatic);
// console.log(Person.isHumanStatic);
