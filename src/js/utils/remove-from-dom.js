/**
 * @function deleteLastStock deletes the last display stock information by removing the node
 */

export default function deleteLastStock() {
  document.querySelector(".ticker-input").nextElementSibling?.remove();
}
