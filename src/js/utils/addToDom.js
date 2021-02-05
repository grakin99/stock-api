/**
 * @param {Element} element must be a dom element
 * @function addToDom Adds an element to the dom after the ticker input area
 */
export function addToDom(element) {
  document
    .querySelector(".ticker-input")
    .insertAdjacentElement("afterend", element);
}
