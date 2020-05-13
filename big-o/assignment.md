# Big O Questions

## 1.

A. O(1)

B. O(n)

## 2.

```
function isEven(value) {
    if (value % 2 === 0) { // O(1)
        return true;
    }
    else
        return false;
    }
}
```

Total: O(1)

## 3.

```
function areYouHere(arr1, arr2) { // arr1 = m, arr2 = n
    for (let i = 0; i < arr1.length; i++) { // O(m)
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) { // O(n)
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
```

Total: O(m\*n)

## 4.

```
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) { // O(n)
        array[i] *= 2; // O(1)
    }
    return array;
}
```

Total: O(n)

## 5.

```
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) { // O(n)
        if (array[i] === item) { // O(1)
            return i;
        }
    }
}
```

Total: O(n)

## 6.

```
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) { // O(n)
        for(let j = i + 1; j < arr.length; j++) { // O(n)
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
```

Total: O(n<sup>2</sup>)

## 7.

```
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) { // O(n)

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
```

Total: O(n)

It computes the fibonacci sequence.

## 8.

```
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) { // O(log n)
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
```

Total: O(log n)

## 9.

```
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)]; // O(1)
}
```

Total: O(1)

## 10.

```
function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) { // O(n)
        if (n % i === 0) return false;
    }
    return true;
}
```

Total: O(n)

Checks if n is prime.

## 11.

```
    Rod 1     Rod 2     Rod 3
    ______________________________




    ----      -
    -----     --        ---
```

Moves to complete:

- 3 disks: 7
- 4 disks: 15
- 5 disks: 31

Time complexity: O(2^n)

## 12-14.

fibonacci recursive: O(2<sup>n</sup>)
fibonacci iterative O(n)
