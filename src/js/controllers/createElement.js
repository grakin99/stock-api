export function createElement(res) {
  return document.createRange().createContextualFragment(res).children[0];
}
