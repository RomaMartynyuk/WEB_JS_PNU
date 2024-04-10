(function(window){
  let sortArray = {};

  //Бульбашка
  sortArray.bubbleSort = function(arr, order = "asc") {
    let comparisons = 0,
      swaps = 0,
      undefinedCount = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
      if(arr[i] === undefined){
        arr.splice(i, 1);
          undefinedCount++;
      }
    }

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
  sortArray.selectionSort = function(arr, order = "asc") {
    let comparisons = 0,
      swaps = 0,
      undefinedCount = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
      if(arr[i] === undefined){
          arr.splice(i, 1);
          undefinedCount++;
      }
    }
    
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
  sortArray.insertionSort = function(arr, order = "asc") {
    let comparisons = 0,
      insertions = 0,
      undefinedCount = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
      if(arr[i] === undefined){
          arr.splice(i, 1);
          undefinedCount++;
      }
    }

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
  sortArray.shellSort = function(arr, order = "asc") {
    let comparisons = 0,
      swaps = 0,
      undefinedCount = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
      if(arr[i] === undefined){
          arr.splice(i, 1);
          undefinedCount++;
      }
    }

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
  sortArray.quickSort = function(arr, order="asc") {
    let comparisons = 0;
    let swaps = 0;
    let undefinedCount = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
        if(arr[i] === undefined){
            arr.splice(i, 1);
            undefinedCount++;
        }
    }
    
    function QuickSort(arr, first, last) {
        let middle = arr[Math.floor((first + last) / 2)];
        let i = first;
        let j = last;

        do {
            while ((order==="asc" && arr[i] < middle) || (order==="desc" && arr[i] > middle)) {
                i++;
                comparisons++;
            }
            while ((order==="asc" && arr[j] > middle) || (order==="desc" && arr[j] < middle)) {
                j--;
                comparisons++;
            }

            if (i <= j) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                swaps++;
                i++;
                j--;
            }

        } while (i <= j);

        if (j > first) {
            QuickSort(arr, first, j);
        }
        if (i < last) {
            QuickSort(arr, i, last);
        }
    }

    QuickSort(arr, 0, arr.length - 1);

      console.log(`comparisons - ${comparisons}, swaps - ${swaps}.`);
      if (undefinedCount > 0) {
          console.log(`In the array, there were ${undefinedCount} undefined elements encountered.`);
      }
      return arr;
  }

  function compare(a, b, order = "asc") {
    if (order === "asc") {
      return a - b;
    } else {
      return b - a;
    }
  }

  window.sortArray = sortArray;
  
})(window)



