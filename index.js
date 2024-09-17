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

function render() {
  renderNumbersToBank();
}

//  === Script ===
render();

const $form = document.querySelector("form");
$form.addEventListener("submit", (event) => {
  event.preventDefault();

  const $number = document.querySelector("#number");

  addNumberToBank($number.value);
  $number.value = null;

  render();
});
