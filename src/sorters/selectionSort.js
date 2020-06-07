import { swap, addAnimation } from "./utility.js";
import { COLORS } from "../constants/constants.js";

export function getSelectionSortAnimations(array) {
  let arr = [...array];
  let animations = [];
  selectionSortHelper(animations, arr);
  return animations;
}

function selectionSortHelper(animations, arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      addAnimation(animations, arr, [minIndex, j], COLORS.SUCCESS);
      if (arr[minIndex].height > arr[j].height) {
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
    addAnimation(animations, arr, [minIndex, i], COLORS.DANGER);
  }
}
