import { swap, addAnimation } from "./utility.js";
import { COLORS } from "../constants/constants.js";

export function getQuickSortAnimations(arr) {
  let animations = [];
  quickSortHelper(arr, animations, 0, arr.length - 1);
  return animations;
}

function quickSortHelper(arr, animations, low, high) {
  if (low >= high) {
    return;
  }
  if (high - low === 1) {
    if (arr[low].height > arr[high].height) {
      addAnimation(animations, arr, [low, high], COLORS.DANGER);
      swap(arr, low, high);
    } else {
      addAnimation(animations, arr, [low, high], COLORS.SUCCESS);
    }
    return;
  }
  let pivotIndex = high;
  pivotIndex = movePivotToCorrectIndex(arr, animations, pivotIndex, low, high);
  quickSortHelper(arr, animations, low, pivotIndex - 1);
  quickSortHelper(arr, animations, pivotIndex + 1, high);
}

function movePivotToCorrectIndex(arr, animations, pivotIndex, low, high) {
  while (low <= high) {
    if (
      arr[low].height > arr[pivotIndex].height &&
      arr[high].height < arr[pivotIndex].height
    ) {
      addAnimation(animations, arr, [low, high], COLORS.DANGER);
      swap(arr, low, high);
      low++;
      high--;
    } else {
      addAnimation(animations, arr, [low, high], COLORS.SUCCESS);
      if (arr[low].height <= arr[pivotIndex].height) {
        low++;
      }
      if (arr[high].height >= arr[pivotIndex].height) {
        high--;
      }
    }
  }
  swap(arr, low, pivotIndex);
  addAnimation(animations, arr, [low, pivotIndex], COLORS.DANGER);
  return low;
}
