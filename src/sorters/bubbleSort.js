import { swap, addAnimation } from "./utility.js";
import { COLORS } from "../constants/constants.js";

export function getBubbleSortAnimations(array) {
  let animations = [];
  bubbleSortHelper(animations, array);
  return animations;
}

function bubbleSortHelper(animations, arr) {
  let len = arr.length - 1;
  while (true) {
    let noOfSwaps = 0;
    for (let i = 0; i < len; i++) {
      if (arr[i].height > arr[i + 1].height) {
        swap(arr, i, i + 1);
        noOfSwaps++;
        addAnimation(animations, arr, [i, i + 1], COLORS.DANGER);
      } else {
        addAnimation(animations, arr, [i, i + 1], COLORS.SUCCESS);
      }
    }
    if (noOfSwaps === 0) {
      break;
    }
  }
}
