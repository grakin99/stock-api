export function addToDom(element) {
  document
    .querySelector(".ticker-input")
    .insertAdjacentElement("afterend", element);
}
