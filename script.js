// Select the display input element
const display = document.getElementById("display");

// Function to clear the display
function clearDisplay() {
  display.value = "";
}

// Function to delete the last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Function to append a value to the display
function appendValue(value) {
  display.value += value;
}

// Function to calculate the result
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
