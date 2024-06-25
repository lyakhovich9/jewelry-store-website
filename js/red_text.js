const textElement = document.querySelector("#new_nazvanie h2");
  let colorChanged = false;

  function changeColor() {
    if (!colorChanged) {
      textElement.style.color = "red";
    } else {
      textElement.style.color = "black";
    }

    colorChanged = !colorChanged;
  }

  setInterval(changeColor, 500);