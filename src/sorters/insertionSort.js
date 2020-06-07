import { swap, addAnimation } from "./utility.js";
import { COLORS } from "../constants/constants.js";

export function getInsertionSortAnimations(array) {
  let animations = [];
  insertionSortHelper(animations, array);
  return animations;
}

function insertionSortHelper(animations, arr) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let j = i;
    while (j > 0 && arr[j - 1].height > arr[j].height) {
      swap(arr, j, j - 1);
      addAnimation(animations, arr, [j, j - 1], COLORS.DANGER);
      j--;
    }
    if (j > 0) {
      addAnimation(animations, arr, [j, j - 1], COLORS.SUCCESS);
    }
  }
}
