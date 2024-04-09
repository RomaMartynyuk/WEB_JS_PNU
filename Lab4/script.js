function generateNumbers(count, min = 0, max = 100) {
    const numbers = [];
    for (let i = 0; i < count; i++) {
      numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return numbers;
}
  
const arr = generateNumbers(100, 1, 1000);
console.log("Started array: " + arr);

let newArr = bubbleSort(arr.slice(), "desc");
console.log(newArr);

let newArrSort1 = selectionSort(arr.slice(), "desc");
console.log(newArrSort1);

let newArrSort2 = insertionSort(arr.slice(), "desc");
console.log(newArrSort2);

let newArrSort3 = shellSort(arr.slice(), "desc");
console.log(newArrSort3);

let newArrSort4 = quickSort(arr.slice(), "desc");
console.log(newArrSort4);