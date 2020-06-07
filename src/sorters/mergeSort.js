import { swap, addAnimation, getNumberArray } from "./utility.js";
import { COLORS } from "../constants/constants.js";

export function getMergeSortAnimations(arr) {
  let animations = [];
  mergeSortHelper(animations, arr, 0, arr.length - 1);
  addAnimation(
    animations,
    arr,
    getNumberArray(0, arr.length - 1),
    COLORS.PRIMARY
  );
  return animations;
}

function mergeSortHelper(animations, arr, low, high) {
  if (low >= high) {
    return;
  }
  if (high - low === 1) {
    if (arr[low].height > arr[high].height) {
      swap(arr, low, high);
      addAnimation(animations, arr, [low, high], COLORS.DANGER);
    } else {
      addAnimation(animations, arr, [low, high], COLORS.SUCCESS);
    }
    return;
  }
  let mid = low + parseInt((high - low) / 2);
  mergeSortHelper(animations, arr, low, mid);
  mergeSortHelper(animations, arr, mid + 1, high);
  merge(arr, low, mid, mid + 1, high);
  addAnimation(animations, arr, getNumberArray(low, high), COLORS.SUCCESS);
}

function merge(arr, start1, end1, start2, end2) {
  let aux = [];
  let index1 = start1;
  let index2 = start2;

  while (index1 <= end1 && index2 <= end2) {
    if (arr[index1].height < arr[index2].height) {
      aux.push(arr[index1++]);
    } else {
      aux.push(arr[index2++]);
    }
  }

  while (index1 <= end1) {
    aux.push(arr[index1++]);
  }

  while (index2 <= end2) {
    aux.push(arr[index2++]);
  }

  let i = start1;
  let j = 0;
  while (i <= end2) {
    arr[i++] = aux[j++];
  }
}
