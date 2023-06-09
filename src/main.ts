import './style.css'

let status: number = 0;
console.log("status:", status)

interface Rect {
  readonly id: string
  color?: string
  size: {
    width: number
    height: number
  }
}

const rect1: Rect = {
  id: '1234',
  size: {
    width: 50,
    height: 20
  },
  color: '#ccc'
}

const rect2: Rect = {
  id: '12345',
  size: {
    width: 10,
    height: 5
  }
}

rect2.color = 'black'
// rect2.id = '3232'

const rect3 = {} as Rect
const rect4 = <Rect>{}

// ===================

interface RectWithArea extends Rect {
  getArea: () => number
}

const rect5: RectWithArea = {
  id: '123',
  size: {
    width: 20,
    height: 20
  },
  getArea(): number {
    return this.size.width * this.size.height
  }
}

console.log(  rect5.getArea());

// =================

interface IClock {
  time: Date
  setTime(date: Date): void
}

class Clock implements IClock {
  time: Date = new Date()

  setTime(date: Date): void {
    this.time = date
  }
}

// ====================

interface Styles {
  [key: string]: string
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px'
}



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



console.clear()
// |||||||||| home ts 2 |||||||||||||||


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