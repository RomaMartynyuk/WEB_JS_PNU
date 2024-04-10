function generateNumbers(count, min = 0, max = 100) {
    const numbers = [];
    for (let i = 0; i < count; i++) {
      numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return numbers;
}
  
const arr = generateNumbers(100, 1, 1000);
console.log("Started array: " + arr);

let newArr = sortArray.bubbleSort(arr.slice(), "desc");
console.log(newArr);

let newArrSort1 = sortArray.selectionSort(arr.slice(), "desc");
console.log(newArrSort1);

let newArrSort2 = sortArray.insertionSort(arr.slice(), "desc");
console.log(newArrSort2);

let newArrSort3 = sortArray.shellSort(arr.slice(), "desc");
console.log(newArrSort3);

console.log(sortArray.quickSort(arr.slice()));

arr[150] = 999;
console.log(arr);
console.log(sortArray.quickSort(arr.slice()));
console.log(sortArray.selectionSort(arr.slice()));
console.log(sortArray.insertionSort(arr.slice()));
console.log(sortArray.bubbleSort(arr.slice()));
console.log(sortArray.shellSort(arr.slice()));

console.log("По спаданню:");
console.log(sortArray.quickSort(arr.slice(), "desc"));
console.log(sortArray.selectionSort(arr.slice(),"desc"));
console.log(sortArray.insertionSort(arr.slice(),"desc"));
console.log(sortArray.bubbleSort(arr.slice(),"desc"));
console.log(sortArray.shellSort(arr.slice(),"desc"));