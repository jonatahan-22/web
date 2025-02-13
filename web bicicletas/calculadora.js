document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("calc-display");
    const buttons = document.querySelectorAll(".buttons button");
    const fabricSelectBtn = document.getElementById("fabric-select-btn");
    const fabricOptions = document.getElementById("fabric-options");
    const selectedFabric = document.getElementById("selected-fabric");
  
    let currentInput = "";
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        if (button.dataset.value) {
          currentInput += button.dataset.value;
          display.value = currentInput;
        } else if (button.dataset.clear) {
          currentInput = "";
          display.value = "";
        } else if (button.dataset.calculate) {
          try {
            currentInput = eval(currentInput).toString();
            display.value = currentInput;
          } catch {
            display.value = "Error";
            currentInput = "";
          }
        }
      });
    });
  
    fabricSelectBtn.addEventListener("click", () => {
      const selected = fabricOptions.value;
      selectedFabric.textContent = `Tela seleccionada: ${selected}`;
    });
  });
  