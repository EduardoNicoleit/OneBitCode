const main = document.querySelector("main");
const root = document.querySelector(":root");
const input = document.getElementById("input");
const resultInput = document.getElementById("result");
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  });
});

document.getElementById("clear").addEventListener("click", function () {
  clearInput();
});

input.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  handleKeyboardInput(ev.key);
});

document.getElementById("equal").addEventListener("click", calculate);

document.getElementById("copyToClipboard").addEventListener("click", function () {
  copyResultToClipboard();
});

document.getElementById("themeSwitcher").addEventListener("click", function () {
  switchTheme();
});

function clearInput() {
  input.value = "";
  input.focus();
}

function handleKeyboardInput(key) {
  if (allowedKeys.includes(key)) {
    input.value += key;
    return;
  }
  if (key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  if (key === "Enter") {
    calculate();
  }
}

function calculate() {
    try {
      let expression = input.value;
  
      // Additional operations
      expression = expression.replace(/sqrt/g, "Math.sqrt");
      expression = expression.replace(/\^/g, "**"); // Power
      expression = expression.replace(/!/g, "factorial");
  
      const result = eval(expression);
      
      if (isNaN(result) || !isFinite(result)) {
        throw new Error("Invalid operation");
      }
      
      resultInput.value = result;
      resultInput.classList.remove("error");
    } catch (error) {
      resultInput.value = "ERROR";
      resultInput.classList.add("error");
    }
  }
  

function copyResultToClipboard() {
  const button = document.getElementById("copyToClipboard");
  if (button.innerText === "Copy") {
    button.innerText = "Copied!";
    button.classList.add("success");
    navigator.clipboard.writeText(resultInput.value);
  } else {
    button.innerText = "Copy";
    button.classList.remove("success");
  }
}

function switchTheme() {
  if (main.dataset.theme === "dark") {
    setLightTheme();
  } else {
    setDarkTheme();
  }
}

function setDarkTheme() {
  root.style.setProperty("--bg-color", "#212529");
  root.style.setProperty("--border-color", "#666");
  root.style.setProperty("--font-color", "#f1f5f9");
  root.style.setProperty("--primary-color", "#4dff91");
  main.dataset.theme = "dark";
}

function setLightTheme() {
  root.style.setProperty("--bg-color", "#f1f5f9");
  root.style.setProperty("--border-color", "#aaa");
  root.style.setProperty("--font-color", "#212529");
  root.style.setProperty("--primary-color", "#26834a");
  main.dataset.theme = "light";
}

// Custom factorial function
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
