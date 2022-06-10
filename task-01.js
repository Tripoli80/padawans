//Создайте массив styles с элементами «Джаз» и «Блюз».
//Добавьте «Рок-н-ролл» в конец.
//Замените значение «Блюз» на «Классика».
//Удалите первый элемент массива и выведите его в консоль.
//Вставьте «Рэп» и «Регги» в начало массива

const styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');

const indexBluz = styles.indexOf('Блюз');

styles.splice(indexBluz, 1, 'Классика');

console.log(styles.shift());

styles.unshift('Рэп', 'Регги');

console.log(styles);