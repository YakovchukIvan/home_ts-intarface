import './style.css'

// Задача 1: Реалізація інтерфейсу для геометричних фігур 
// Створіть інтерфейс Shape, який має дві властивості: name 
// типу string і calculateArea типу функції, яка повертає number. 
// Реалізуйте цей інтерфейс для двох геометричних фігур: коло і прямокутник.

// 1. 
interface Shape {
  name: string
  size: number
  calculateArea: () => number;
}

const circle: Shape = {
  name: 'circle',
  size: 20,

  calculateArea() {
    return Math.PI * this.size * this.size
  }
}

console.log(circle);
console.log(circle.calculateArea());

// 2. 
interface ShapeTwo extends Shape {
  sizeTwo: number
}

const rectangle: ShapeTwo = {
  name: 'circle',
  size: 20,
  sizeTwo: 10,

  calculateArea() {
    return this.size * this.sizeTwo;
  }
}

console.log(rectangle);
console.log(rectangle.calculateArea());



// =================

// Задача 2: 
// Оновлення налаштувань Створіть інтерфейс Settings, 
// який має наступні властивості: theme типу string, fontSize типу 
// number і isDarkMode типу boolean, але зробіть всі властивості 
// необов'язковими, використовуючи оператор ?. Далі створіть 
// функцію updateSettings, яка приймає об'єкт типу 
// Settings і оновлює налаштування програми.


interface Settings {
  theme?: string
  fontSize?: number
  isDarkMode?: boolean
}

const objSettings = {
  theme: 'White',
  fontSize: 24,
  isDarkMode: true
}
console.log("file: main.ts:150  objSettings:", objSettings)

function updateSettings(objSettings: Settings): void {
  if (objSettings.theme) {
    objSettings.theme = 'Black'
  }

  if (objSettings.fontSize) {
    objSettings.fontSize = 22
  }

  if (objSettings.isDarkMode) {
    objSettings.isDarkMode = false
  }
}

updateSettings(objSettings)
console.log("objSettings:", objSettings)



// =================

// Задача 3: 
// Об'єднання даних з двох джерел Створіть два інтерфейси: 
// User і Account. Інтерфейс User містить властивості name 
// типу string і age типу number, а інтерфейс Account містить 
// властивості username типу string і email типу string. Далі 
// створіть інтерфейс UserProfile, який є результатом інтерсекції 
// User і Account. Напишіть функцію getUserProfile, яка приймає 
// об'єкт типу User і Account і повертає об'єкт типу UserProfile.

interface User {
  name: string
  age: number
}

interface Account {
  username: string
  email: string
}

interface UserProfile extends User, Account {}

const vania: User = {
  name: 'Ivan',
  age: 27,
}
const vaniaSite: Account = {
  username: 'JS',
  email: 'front-end@gmail.com'
}

function getUserProfile(user: User, account: Account): UserProfile {
  const userProfile = {...user, ...account}
  return userProfile
}

console.log(getUserProfile(vania,vaniaSite));








// ||||||||||||||||||||||||||||||||||||||||




// ********** TASK 2 *************



// Задача 1: Перевірка типу об'єкту 
// Напишіть функцію, яка приймає параметр, 
// і перевіряє, чи є цей параметр об'єктом з властивістю name. 
// Якщо параметр є об'єктом з властивістю name, виведіть на екран 
// повідомлення зі значенням name. Інакше, виведіть повідомлення, 
// що параметр не має властивості name.


const userProfile: UserProfile = {
  name: 'Ivan',
  age: 27,
  username: 'JS',
  email: 'front-end@gmail.com'
}
console.log("userProfile:", userProfile)

function validName(user: UserProfile): void {
  if(typeof user === 'object' && 'name' in user) {
    console.log(user.name);
  } else {
    console.log('Параметр не має властивості name');
  }
}

validName(userProfile)


// =================

// Задача 2: Перевірка типу масиву чисел 
// Напишіть функцію, яка приймає параметр, і перевіряє, чи є цей параметр 
// масивом чисел. Якщо параметр є масивом чисел, виведіть на екран їх суму. 
// Інакше, виведіть повідомлення, що параметр не є масивом чисел.


const arrayNumber: number[] = [1, 2, 3, 4, 5]
console.log(typeof arrayNumber);


function validNumber(number: number[]): void {
  if(Array.isArray(number) && number.every((item) => typeof item === 'number')) {
    const sum = number.reduce((acc, curr) => acc + curr, 0);
    console.log('Параметр є масивом чисел', sum);
  } else {
    console.log('Параметр не є масивом чисел');
  }
}

validNumber(arrayNumber)








// ||||||||||||||||||||||||||||||||||||||||



// ********** TASK 3 *************

// Задача 1: Об'єднання ізольованих даних

// Створіть тип даних Tuple, який містить ім'я користувача (string) 
// і його вік (number). Потім створіть змінну, використовуючи цей тип, 
// і присвойте їй значення.


type Person  = {
  name: string;
  age: number;
}

const person: Person = {
  name: 'Ivan',
  age: 27
}
console.log("person:", person)



// Задача 2: Фільтрація масиву об'єктів 

// Напишіть функцію, яка приймає масив об'єктів і рядкову властивість, 
// і повертає новий масив, який містить тільки об'єкти, у яких 
// властивість має задане значення.


const arrayTask2: Person[] = [
  {name: 'Ivan', age: 24},
  {name: 'Volody', age: 25},
  {name: 'Ivan', age: 25},
   {name: 'Volody', age: 27},
]
console.log("arrayTask2:", arrayTask2)

function filterArrayTask2(arrayTask: Person[], attribute: keyof Person, value: string): Person[] {
  return arrayTask.filter((item) => item[attribute] === value);
}
console.log(filterArrayTask2(arrayTask2, 'name', 'Ivan'));




// Задача 3: Пошук об'єкта за властивістю

// Напишіть функцію, яка приймає масив об'єктів і рядкову властивість, і 
// повертає перший об'єкт з масиву, у якого властивість має задане значення.


function findArrayTask2(array: Person[], property: keyof Person, value: string | number): Person | undefined {
  return array.find((item) => item[property] === value);
}

console.log(findArrayTask2(arrayTask2, 'age', 25));



console.clear()
// Задача 4: Розрахунок середнього значення

// Напишіть функцію, яка приймає масив об'єктів з числовими 
// властивостями і повертає середнє значення цих властивостей.

type NumericObject = {
  [key: string]: number;
}

const arrayTask4Number: NumericObject[] = [
  { id: 1, value: 10 },
  { id: 2, value: 20 },
  { id: 3, value: 30 },
  { id: 4, value: 40 },
  { id: 5, value: 50 }
];

function arrayTask4(array: NumericObject[]): NumericObject[] {
  let idSum: number = 0; // змінні для створення середнього значення
  let valueSum: number = 0; 
  for (let i = 0; i < array.length; i++) {
    idSum += array[i].id;
    valueSum += array[i].value;
  }

  idSum = idSum / array.length // виводимо середнє значення
  valueSum = valueSum / array.length

  const newArray: NumericObject[] = [ // нова змінна що створює новий масив з середніми значеннями
    { id: idSum, value: valueSum }
  ];
  
  return newArray;
}


console.log(arrayTask4(arrayTask4Number));
