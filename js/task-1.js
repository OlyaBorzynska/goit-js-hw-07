const itemsCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsCategories.length}`);

itemsCategories.forEach((item) => {
  const titleCategories = item.querySelector("h2").textContent;
  const elementsOfCategory = item.querySelectorAll("li");

  console.log(`Category: ${titleCategories}`);
  console.log(`Elements: ${elementsOfCategory.length}`);
});
