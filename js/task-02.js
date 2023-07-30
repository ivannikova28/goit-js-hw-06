const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulIngredients = document.querySelector('#ingredients')


function f(element) {

  const arrayLi = ingredients.map(item => { 
    const li = document.createElement("li");
    li.textContent = item;
    li.classList.add("item");
    return li
  })

  ulIngredients.append(...arrayLi)
}

f(ulIngredients)