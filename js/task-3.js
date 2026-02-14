const input = document.querySelector("#name-input");

const span = document.querySelector("#name-output");

input.addEventListener("input", () => {
  const value = input.value.trim();
  if (value === "") {
    span.textContent = "Anonymous";
  } else {
    span.textContent = value;
  }
});
