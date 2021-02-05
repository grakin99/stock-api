/**
 * @param {String} string A string that has been passed through a templating engine to apply the correct values 
 * @function createElement creates a dom element without touching the dom. needs to be passed a string
 * */

export function createElement(string) {
  return document.createRange().createContextualFragment(string).children[0];
}
