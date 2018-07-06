const entries = [1, 2, 3, 4, 5, 6];
const target = 21;

const findSum = (arr, n) => {
    let array = [];
    for (let i = 0; i < arr.length; i++) { //Pin number for comparison
        for (let j = 0; j < arr.length; j++) { //Iterates through the rest of the array 
            if (arr[i] + arr[j] === n) { //Checks if sum is equal the number we want to find 
                array.push(arr[i], arr[j]);
                return array;
            }
        }
    }
    return ('No match found');
}

let numbers = findSum(entries, target);
console.log(`Searching for numbers whose sum is equal to ${target}:`)
console.log(numbers); //outputs [5, 6]