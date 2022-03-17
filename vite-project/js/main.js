import "../styles/style.css";
import { MenuItems } from "./array";
import { DOMSelectors } from "./DOMSelectors";
console.log(MenuItems);
console.log(DOMSelectors);
const Entrees = MenuItems.filter((Entrees) => Entrees.type == "Entree");
const Sides = MenuItems.filter((Sides) => Sides.type == "Side");
const ADrinks = MenuItems.filter(
  (ADrinks) => ADrinks.type == "Alcoholic Drink"
);
const Drinks = MenuItems.filter((Drinks) => Drinks.type == "Drink");
console.log(Entrees);
console.log(Sides);
console.log(ADrinks);
console.log(Drinks);
Entrees.forEach((Entrees) => {
  DOMSelectors.MainBody.insertAdjacentHTML(
    "afterbegin",
    `<div class="flexbox-content">
    <h3 class="text">${Entrees.item}</h3>
    <img
    src=""
    alt="${Entrees.item}"/>
    <p class="subtext">${Entrees.description}</p>
  </div>`
  );
});
// Sides.forEach((Sides) => {
//   DOMSelectors.MainBody.insertAdjacentHTML(
//     "afterbegin",
//     `<p>${Sides.description}</p>`
//   );
// });
// ADrinks.forEach((ADrinks) => {
//   DOMSelectors.MainBody.insertAdjacentHTML(
//     "afterbegin",
//     `<p>${ADrinks.description}</p>`
//   );
// });
// Drinks.forEach((Drinks) => {
//   DOMSelectors.MainBody.insertAdjacentHTML(
//     "afterbegin",
//     `<p>${Drinks.description}</p>`
//   );
// });
// DOMSelectors.flexboxes.innerHTML = "";
// scary.forEach((scary) => {
//   DOMSelectors.flexboxes.insertAdjacentHTML(
//     "afterbegin",
//     `<img
//       src="${scary.url}"
//       class="flexbox-img"
//     />`
//   );
// });
