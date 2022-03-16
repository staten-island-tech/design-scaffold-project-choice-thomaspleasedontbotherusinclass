import "../styles/style.css";
import { MenuItems } from "./array";
import { DOMSelectors } from "./DOMSelectors";
console.log(MenuItems);
console.log(DOMSelectors);
const Entrees = MenuItems.filter((Entrees) => Entrees.type == "Entree");
Entrees.forEach((Entrees) => {
  DOMSelectors.MainBody.insertAdjacentHTML(
    "afterbegin",
    `<p>${Entrees.description}</p>`
  );
});
