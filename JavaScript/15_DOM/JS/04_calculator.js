let display = document.getElementById('display');

function appendCharacter(char) {
  display.value+=char;
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.shift(0);
}

function calculate() {
    display.value = eval(display.value)  
}
