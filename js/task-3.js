const input = document.querySelector("#name-input");

const span = document.querySelector("#name-output");

const inputListener = input.addEventListener("input", () => {
  const value = input.value;
  if (value === "" || value === " ") {
    span.textContent = "Anonymous";
  } else {
    span.textContent = value.trim();
  }
});
