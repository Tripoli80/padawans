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


function findSmallerNumber(numbers) {
    if (!Array.isArray(numbers)) return;
    
    let smallestNumber = numbers[0];
    for (let number of numbers) {
        if (number < smallestNumber) {
            smallestNumber = number;
        };

    }
    return smallestNumber;
}

console.log(findSmallerNumber([5, 35, 56, 12, 24, 7, 80, 3]));

