// <<<<<<< Updated upstream
//Создайте массив styles с элементами «Джаз» и «Блюз».
//Добавьте «Рок-н-ролл» в конец.
//Замените значение «Блюз» на «Классика».
//Удалите первый элемент массива и выведите его в консоль.
//Вставьте «Рэп» и «Регги» в начало массива

// const styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');

// const indexBluz = styles.indexOf('Блюз');

// styles.splice(indexBluz, 1, 'Классика');

// console.log(styles.shift());

// styles.unshift('Рэп', 'Регги');

// console.log(styles);

//Напишите функцию min(a, b), которая возвращает
//меньшее из чисел a, b
//нужно добавить проверку, что функция получает числа

// function min(a, b) {
//     return a < b ? a : b;
//     // if (a < b) {
//     //     console.log(a)
//     // } else {
//     //     console.log(b)
//     // }
//     // console.log(a, b)
// }
// console.log(min(5, 8))

//Напишите функцию logItems(array) которая принимает
//массив и использует цикл for, который для каждого
//элемента массива будет выводить сообщение в формате
//<номер элемента> - <значение элемента>
//Нумерация элементов должна начинаться с 1.
//['Джаз', 'Блюз', 'Рок-н-ролл', 'Регги', 'Рэп']

// function logItems(array) {
//     for (let i = 0; i < array.length - 1; i += 1) {
//         // console.log(array[i]);
//         // console.log(i + 1);
//         console.log(`${i+1} - ${array[i]}`);
//     }
// }
// logItems(['Джаз', 'Блюз', 'Рок-н-ролл', 'Регги', 'Рэп']);

//Напиши функцию findSmallerNumber(numbers)
//которая ищет самое маленькое число в массиве
//Добавь проверку что функция получает массив
//const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallerNumber(numbers) {
//     if (!Array.isArray(numbers)) return;

//     let smallestNumber = numbers[0];
//     for (let number of numbers) {
//         if (number < smallestNumber) {
//             smallestNumber = number;
//         };

//     }
//     return smallestNumber;
// }

// console.log(findSmallerNumber([5, 35, 56, 12, 24, 7, 80, 3]));

//Напишите функцию caculculateAverage()
//которая принимает произвольное количество
//аргументов и возвращает их среднее значение.
//Добавить проверку, что аргументы это числа.

// function caculculateAverage(...numbers) {
// console.log(numbers);
// // console.log(arguments);

//     let total = 0;
//     let culc = 0;

//     for (let number of numbers) {
//         if (typeof number !== 'number') {
//             continue;
//         }
//         total += number;
//         culc += 1;
//     }
//     console.log(total / culc);
// };

// caculculateAverage(2, 10, 45, 31, 55, 7, 'abc', 'b');

// const people = [
//   {
//     name: "Alex",
//     know: ["Alex", "Jhon"],
//   },
//   {
//     name: "Jhon",
//     know: [],
//   },
//   {
//     name: "Eva",
//     know: ["Alex", "Jhon"],
//   },
//   {
//     name: "Ivan",
//     know: ["Jhon", "Eva"],
//   },
// ];
// const no = "ne znaydeno";

// function searchNarc(items) {
//   let narcName = "";
  
//   for (const { name, know } of items) {
//     if (know.length === 0) {
//       narcName = name;
//     }
//   }
//   if (narcName === "") {
//     return no;
//   }

//   for (const { name, know } of items) {
//     if (name === narcName) {
//       continue;
//     }
//     if (!know.includes(narcName)) {
//       return no;
//     }
    

//     return narcName;
//   }
// }

//нарцис  'Jhon'
const people1 = [
  {
    name: "Alex",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Jhon",
    know: [],
  },
  {
    name: "Eva",
    know: [],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Eva"],
  },
];
//немає нарциса'

const people3 = [
  {
    name: "Alex",
    know: ["Alex", "Eva"],
  },
  {
    name: "Jhon",
    know: [],
  },
  {
    name: "Eva",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Eva"],
  },
];
//немає нарциса
const people4 = [
  {
    name: "Alex",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Jhon",
    know: ["Eva"],
  },
  {
    name: "Eva",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Eva"],
  },
];
//немає нарциса'
// Нарциса знають всі, нарцис незнає нікого

// console.log("object :>> ", searchNarc(people));

// const no = "ne znaydeno";

// const  searchNarc = (items) => {
//   let narcName = "";
  
//   items.find(({ name, know }) => {
//     if (know.length === 0) {
//       narcName = name;
//     }
// });

//   if (narcName === "") {
//     return no;
//   }

//   let result = items.filter(({ name, know }) => {
//     return know.includes(narcName);
//   });

//   if (result.length === items.length - 1) {
//     return narcName;
//   }

//   return no;

// }

// console.log("object :>> ", searchNarc(people4));

//Напишите функцию findTheColor()
//которая принимает название цвета
//определяет его наличие в массиве
//если цвет есть, усталавливет его как фон документа
//если цвета нет выводит console.error('Такой цвет не найден');
//и устанавливает цвет документа красный
// document.body.style.background = 'red';
const colors = ['blue', 'yellow', 'olive', 'fuchsia', 'lime', 'aqua', 'maroon']
const findTheColor = (colors, findColor) => {
  const inArray = colors.includes(findColor)
  document.body.style.background = inArray ? findColor : 'red'
  if (!inArray) {
    console.error(`Такой цвет не найден`)
  }
  // if (colors.includes(findColor)) {
  //   document.body.style.background = findColor
  // } else {
  //   document.body.style.background = 'red'
  //   console.error(`Такой цвет не найден`)
  // }
}
findTheColor(colors, 'lime')