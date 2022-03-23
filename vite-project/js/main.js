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
  DOMSelectors.flexboxes.insertAdjacentHTML(
    "afterbegin",
    `<div class="flexbox-content">
    <h3 class="text">${Entrees.item}</h3>
    <img
    src="${Entrees.img}"
    alt="${Entrees.item}"/>
    <p class="subtext">${Entrees.description}</p>
    <p class="subtext">${Entrees.extra1}
    ${Entrees.extra2}</p>
  </div>`
  );
});
DOMSelectors.entreesbtn.addEventListener("click", function () {
  DOMSelectors.flexboxes.innerHTML = "";
  Entrees.forEach((Entrees) => {
    DOMSelectors.flexboxes.insertAdjacentHTML(
      "afterbegin",
      `<div class="flexbox-content">
      <h3 class="text">${Entrees.item}</h3>
      <img
      src="${Entrees.img}"
      alt="${Entrees.item}"/>
      <p class="subtext">${Entrees.description}</p>
      <p class="subtext">${Entrees.extra1}
      ${Entrees.extra2}</p>
    </div>`
    );
  });
});
DOMSelectors.sidesbtn.addEventListener("click", function () {
  DOMSelectors.flexboxes.innerHTML = "";
  Sides.forEach((Sides) => {
    DOMSelectors.flexboxes.insertAdjacentHTML(
      "afterbegin",
      `<div class="flexbox-content">
      <h3 class="text">${Sides.item}</h3>
      <img
      src="${Sides.img}"
      alt="${Sides.item}"/>
      <p class="subtext">${Sides.description}</p>
      <p class="subtext">$${Sides.extracost1} add ketchup
      $${Sides.extracost2} add mustard</p>
    </div>`
    );
  });
});
DOMSelectors.adrinksbtn.addEventListener("click", function () {
  DOMSelectors.flexboxes.innerHTML = "";
  ADrinks.forEach((ADrinks) => {
    DOMSelectors.flexboxes.insertAdjacentHTML(
      "afterbegin",
      `<div class="flexbox-content">
      <h3 class="text">${ADrinks.item}</h3>
      <img
      src="${ADrinks.img}"
      alt="${ADrinks.item}"/>
      <p class="subtext">${ADrinks.description}</p>
      <p class="subtext">$${ADrinks.cost1} a shot
      $${ADrinks.cost2} a glass
      $${ADrinks.extracost} for our souvenir cup</p>
    </div>`
    );
  });
});
DOMSelectors.drinksbtn.addEventListener("click", function () {
  DOMSelectors.flexboxes.innerHTML = "";
  Drinks.forEach((Drinks) => {
    DOMSelectors.flexboxes.insertAdjacentHTML(
      "afterbegin",
      `<div class="flexbox-content">
      <h3 class="text">${Drinks.item}</h3>
      <img
      src="${Drinks.img}"
      alt="${Drinks.item}"/>
      <p class="subtext">${Drinks.description}</p>
      <p class="subtext">$${Drinks.cost}</p>
    </div>`
    );
  });
});
// DOMSelectors.entreesbtn.addEventListener("click", function () {
//   DOMSelectors.flexboxes.innerHTML = "";
//   Entrees.forEach((Entrees) => {
//     DOMSelectors.flexboxes.insertAdjacentHTML(
//       "afterbegin",
//       `<div class="flexbox-content">
//       <h3 class="text">${Entrees.item}</h3>
//       <img
//       src="${Entrees.img}"
//       alt="${Entrees.item}"/>
//       <p class="subtext">${Entrees.description}</p>
//     </div>`
//     );
//   });
// });
// ADrinks.forEach((ADrinks) => {
//   DOMSelectors.MainBody.insertAdjacentHTML(
//     "afterbegin",
//     `<div class="flexbox-content">
//     <h3 class="text">${Entrees.item}</h3>
//     <img
//     src="${Entrees.img}"
//     alt="${Entrees.item}"/>
//     <p class="subtext">${Entrees.description}</p>
//   </div>`
//   );
// });
// Drinks.forEach((Drinks) => {
//   DOMSelectors.MainBody.insertAdjacentHTML(
//     "afterbegin",
//     `<div class="flexbox-content">
//     <h3 class="text">${Entrees.item}</h3>
//     <img
//     src="${Entrees.img}"
//     alt="${Entrees.item}"/>
//     <p class="subtext">${Entrees.description}</p>
//   </div>`
//   );
// });
// DOMSelectors.flexboxes.innerHTML = "";
// scary.forEach((scary) => {
//   DOMSelectors.flexboxes.insertAdjacentHTML(
//     "afterbegin",
//     `<img
//        src="${scary.url}"
//        class="flexbox-img"
//      />`
//   );
// });
DOMSelectors.themebtn.addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});
