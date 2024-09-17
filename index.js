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

//create a function that moves a single number
function addNumberToBank(number) {
  numbers.bank.push(number);
}

function firstNumberToOddOrEven() {
  const number = numbers.bank.shift();
  if (number % 2 === 0) {
    numbers.evens.push(number);
  } else {
    numbers.odds.push(number);
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

function render() {
  renderNumbersToBank();
  renderOddNumbers();
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
