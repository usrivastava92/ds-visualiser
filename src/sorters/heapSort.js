import { swap } from "./utility.js";

export function getInsertionSortAnimations(array, colors) {
  let animations = [];
  insertionSortHelper(animations, array, colors);
  return animations;
}

function insertionSortHelper(animations, arr, colors) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let j = i;
    while (j > 0 && arr[j - 1].height > arr[j].height) {
      swap(arr, j, j - 1);
      let cloneArr = arr.map((a) => ({ ...a }));
      cloneArr[j].color = colors.DANGER;
      cloneArr[j - 1].color = colors.DANGER;
      animations.push(cloneArr);
      j--;
    }
    if (j > 0) {
      let cloneArr = arr.map((a) => ({ ...a }));
      cloneArr[j].color = colors.SUCCESS;
      cloneArr[j - 1].color = colors.SUCCESS;
      animations.push(cloneArr);
    }
  }
}
