//Бульбашка
function bubbleSort(arr, order = "asc") {
    let comparisons = 0,
      swaps = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        comparisons++;
        if (compare(arr[j], arr[j + 1], order) > 0) {
          swaps++;
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    console.log(`Bubble sort: comparisons - ${comparisons}, swaps - ${swaps}`);
    return arr;
}

//Мінімальних елементів
function selectionSort(arr, order = "asc") {
  let comparisons = 0,
    swaps = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      comparisons++;
      if (compare(arr[j], arr[minIndex], order) < 0) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      swaps++;
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  console.log(`Selection sort: comparisons - ${comparisons}, swaps - ${swaps}`);
  return arr;
}

//Вставки
function insertionSort(arr, order = "asc") {
  let comparisons = 0,
    insertions = 0;
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && compare(current, arr[j], order) < 0) {
      comparisons++;
      insertions++;
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  console.log(`Insertion sort: comparisons - ${comparisons}, insertions - ${insertions}`);
  return arr;
}

//Шелла
function shellSort(arr, order = "asc") {
  let comparisons = 0,
    swaps = 0;
  let gap = Math.floor(arr.length / 2);
  while (gap > 0) {
    for (let i = gap; i < arr.length; i++) {
      let current = arr[i];
      let j = i;
      while (j >= gap && compare(current, arr[j - gap], order) < 0) {
        comparisons++;
        swaps++;
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = current;
    }
    gap = Math.floor(gap / 2);
  }
  console.log(`Shell sort: comparisons - ${comparisons}, swaps - ${swaps}`);
  return arr;
}

//Хоара
function quickSort(arr, low = 0, high = arr.length - 1, order = "asc") {
  let comparisons = 0,
    swaps = 0;
  if (low < high) {
    let pivotIndex = partition(arr, low, high, order);
    quickSort(arr, low, pivotIndex - 1, order);
    quickSort(arr, pivotIndex + 1, high, order);
  }
  console.log(`Quick Sort: comparisons - ${comparisons}, swaps - ${swaps}`);
  return arr;
}

function partition(arr, low, high, order) {
  let pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (compare(arr[j], pivot, order) <= 0) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    comparisons++;
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

function compare(a, b, order = "asc") {
    if (order === "asc") {
      return a - b;
    } else {
      return b - a;
    }
  }