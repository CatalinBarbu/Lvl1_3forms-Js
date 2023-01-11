const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const submit = document.getElementById("submit");
const outPutTag = document.getElementById("outPutTag");

submit.addEventListener("click", () => {
  const numberFirst = number1.value;
  const numberSecond = number2.value;
  outPutTag.innerHTML += numberFirst - numberSecond;
});

/* outPutTag.innerHTML +=
    numberFirst - numberSecond < 0
      ? numberSecond - numberFirst
      : numberFirst - numberSecond; */
