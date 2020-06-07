export function swap(arr, firstIndex, secondIndex) {
  let temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}

export function addAnimation(animations, arr, indexes, color) {
  let cloneArr = arr.map((a) => ({ ...a }));
  indexes.forEach((index) => {
    cloneArr[index].color = color;
  });
  animations.push(cloneArr);
}

export function getNumberArray(startInclusive, endInclusive) {
  let arr = [];
  for (let i = startInclusive; i <= endInclusive; i++) {
    arr.push(i);
  }
  return arr;
}
