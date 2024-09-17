// === State ===
// TODO: this file! :)
// create an object with three arrays
// one to store the number bank numbers
// one for odd numbers
// one for even numbers
const numbers = {
  bank: [],
  odds: [],
  evens: [],
};

// Create a function that moves a single number to the bank
function addNumberToBank(number) {
  numbers.bank.push(number);
}

// Create a function that moves the first number of the bank
// and pushes it to evens if even, odds if odd
function firstNumberToOddOrEven() {
  const number = numbers.bank.shift();
  if (number % 2 === 0) {
    numbers.evens.push(number);
  } else {
    numbers.odds.push(number);
  }
}

// Create function that loops through all numbers in the bank
function allNumbersToOddOrEven(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers.bank[i];
    if (number % 2 === 0) {
      numbers.evens.push(number);
    } else {
      numbers.odds.push(number);
    }
  }
}

// === Render ===
//create a function that renders the numbers to the number bank
function renderNumbersToBank() {
  const $numbers = numbers.bank.map((number) => {
    const $number = document.createElement("span");
    $number.textContent = number;

    return $number;
  });
  const $output = document.querySelector("#numberBank output");
  $output.replaceChildren(...$numbers);
}

// render the odd numbers to the odds output
function renderOddNumbers() {
  const $numbers = numbers.odds.map((number) => {
    const $number = document.createElement("span");
    $number.textContent = number;

    return $number;
  });
  const $output = document.querySelector("#odds output");
  $output.replaceChildren(...$numbers);
}

// render the even numbers to the evens output
function renderEvenNumbers() {
  const $numbers = numbers.evens.map((number) => {
    const $number = document.createElement("span");
    $number.textContent = number;

    return $number;
  });
  const $output = document.querySelector("#evens output");
  $output.replaceChildren(...$numbers);
}

function render() {
  renderNumbersToBank();
  renderOddNumbers();
  renderEvenNumbers();
}

//  === Script ===
render();
// Add event listener for form submition
const $form = document.querySelector("form");
$form.addEventListener("submit", (event) => {
  event.preventDefault();

  const $number = document.querySelector("#number");

  addNumberToBank($number.value);
  $number.value = null;

  render();
});

// add event listener for sort 1 button
const $section = document.querySelector("#sortOne");
$section.addEventListener("click", (event) => {
  event.preventDefault();

  firstNumberToOddOrEven();

  render();
});

// add event listener for sort all button
