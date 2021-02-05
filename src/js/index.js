import data from "./data/get-data.js";
import object from "./data/data-object.js";
import template from "./views/stock";
import input from "./utils/get-user-input.js";
import { createElement } from "./controllers/createElement";
import { addToDom } from "./utils/addToDom";
import deleteLastStock from "./utils/remove-from-dom.js";

document.querySelector("#ticker-submit").addEventListener("click", () => {
  const userInput = input();
  data(userInput)
    .then((res) => new object(res))
    .then((obj) => obj)
    .then((obj) => template(obj))
    .then((res) => createElement(res))
    .then((element) => {
      deleteLastStock();
      addToDom(element);
    });
});
