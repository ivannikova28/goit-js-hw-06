// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

const ulCategories = document.querySelector('#categories')


function f(element) {
    const childrenElement = [...element.children];
    console.log(`Number of categories: ${childrenElement.length}`);
    childrenElement.forEach(item => { 
        console.log(`Category: ${item.firstElementChild.textContent}`);
        console.log(`Elements: ${item.lastElementChild.children.length}`);
    })
}


f(ulCategories)

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

