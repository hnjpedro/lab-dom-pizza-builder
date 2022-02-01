// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  let sauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauce.className = 'sauce sauce-white';
  } else {
    sauce.className = 'sauce';
  }
}

function renderGlutenFreeCrust() {
  let crust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crust.className = 'crust crust-gluten-free';
  } else {
    crust.className = 'crust';
  }
}

function renderButtons() {
  const pepButton = document.querySelector('.btn.btn-pepperoni');
  const mushButton = document.querySelector('.btn.btn-mushrooms');
  const peppersButton = document.querySelector('.btn.btn-green-peppers');
  const sauceButton = document.querySelector('.btn.btn-sauce');
  const crustButton = document.querySelector('.btn.btn-crust');

  if (state.pepperoni) {
    pepButton.className = 'btn btn-pepperoni active';
  } else {
    pepButton.classList.remove('active');
  }
  if (state.mushrooms) {
    mushButton.className = 'btn btn-mushrooms active';
  } else {
    mushButton.classList.remove('active');
  }
  if (state.greenPeppers) {
    peppersButton.className = 'btn btn-green-peppers active';
  } else {
    peppersButton.classList.remove('active');
  }
  if (state.whiteSauce) {
    sauceButton.className = 'btn btn-sauce active';
  } else {
    sauceButton.classList.remove('active');
  }
  if (state.glutenFreeCrust) {
    crustButton.className = 'btn btn-crust active';
  } else {
    crustButton.classList.remove('active');
  }
}

function renderPrice() {
  let totalPrice = basePrice;
  let list = document.querySelector('.panel.price ul');
  list.innerHTML = '';
  let displayTotal = document.querySelector('.panel.price strong');
  for (let key in ingredients) {
    if (state[key]) {
      list.innerHTML += `<li>$${ingredients[key].price} ${ingredients[key].name}</li>`;
      totalPrice += ingredients[key].price
    } else {
      list.innerHTML = list.innerHTML
    }
  }
  displayTotal.innerHTML = `$${totalPrice}`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
