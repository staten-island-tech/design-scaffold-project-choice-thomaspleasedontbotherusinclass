import "../styles/style.css";
import { gsap } from "gsap";


gsap.from(".header", { duration: 2, y: "-100%" , ease: "bounce" })
gsap.from(".header", { duration: 2, opacity: 0, delay: .2})
gsap.from(".flexboxes", { duration: .75, y: "-100%" , ease: "bounce" })
gsap.from(".wrapper-btn", { duration: 2, x: "-100%" , ease: "bounce" })




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
    <h2 class="text">${Entrees.item}</h2>
    <img class="img"
    src="${Entrees.img}"
    alt="${Entrees.item}"/>
    <p class="subtext">${Entrees.cost}</p>
    <p class="subtext">${Entrees.description}</p>
    <p class="subtext">${Entrees.extra1}
    ${Entrees.extra2}</p>
    <button class="cart-btn">Add To Cart</button>
  </div>`
  );
});
DOMSelectors.entreesbtn.addEventListener("click", function () {
  DOMSelectors.flexboxes.innerHTML = "";
  Entrees.forEach((Entrees) => {
    DOMSelectors.flexboxes.insertAdjacentHTML(
      "afterbegin",
      `<div class="flexbox-content">
      <h2 class="text">${Entrees.item}</h2>
      <img class="img"
      src="${Entrees.img}"
      alt="${Entrees.item}"/>
      <p class="subtext">${Entrees.cost}</p>
      <p class="subtext">${Entrees.description}</p>
      <p class="subtext">${Entrees.extra1}
      ${Entrees.extra2}</p>
      <button class="cart-btn">Add To Cart</button>
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
      <h2 class="text">${Sides.item}</h2>
      <img class="img"
      src="${Sides.img}"
      alt="${Sides.item}"/>
      <p class="subtext">${Sides.cost}</p>
      <p class="subtext">${Sides.description}</p>
      <p class="subtext">${Sides.extracost1} add ketchup
      ${Sides.extracost2} add mustard</p>
      <button class="cart-btn">Add To Cart</button>
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
      <h2 class="text">${ADrinks.item}</h2>
      <img class="img"
      src="${ADrinks.img}"
      alt="${ADrinks.item}"/>
      <p class="subtext">${ADrinks.description}</p>
      <p class="subtext">${ADrinks.cost} a shot
      ${ADrinks.cost1} a glass
      ${ADrinks.extracost} for our souvenir cup</p>
      <button class="cart-btn">Add To Cart</button>
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
      <h2 class="text">${Drinks.item}</h2>
      <img class="img"
      src="${Drinks.img}"
      alt="${Drinks.item}"/>
      <p class="subtext">${Drinks.cost}</p>
      <p class="subtext">${Drinks.description}</p>
      <button class="cart-btn">Add To Cart</button>
    </div>`
    );
  });
});
DOMSelectors.themebtn.addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});

let cart = [];
let total = null;
function addToCart(event) {
  const item = parseInt(event.target.id, 10);
  console.log(item);
  cart.push(MenuItems[item]);
  total +=
    Entrees[item].cost ||
    Sides[item].cost ||
    ADrinks[item].cost ||
    Drinks[item].cost;
  DOMSelectors.cart.innerHTML = "";
  cart.forEach((item) => {
    DOMSelectors.total.innerHTML = `Total: $${total}`;
    DOMSelectors.cart.insertAdjacentHTML("afterbegin", `<h4>${item.name}</h4>`);
  });
}

const buttons = Array.from(document.querySelectorAll(".cart-btn"));
buttons.forEach((button) => {
  button.addEventListener("click", addToCart);
});
