const array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
const otherArray = [1, "2", "3", 2];

const groupElements = arr => {
    let organized = [];
    let subArray = [];
    let x;
    arr.sort((a, b) => a - b);
    console.log('array: ', arr);
    for (let i = 0; i < arr.length; i++) {
        x = arr[i];
        subArray.push(x);

        if (x !== arr[i + 1]) {
            organized.push(subArray);
            subArray = [];
        }

    }
    console.log('Grouping by elements: ');
    console.log(organized);
}

const groupByType = arr => {
    let numArr = [];
    let strArr = [];
    let organized = [];
    console.log('array', arr);
    arr.map(el => {
        if (typeof(el) === 'number') {
            numArr.push(el);
        } else if (typeof(el) === 'string') {
            strArr.push(el);
        }
    });
    organized.push(numArr, strArr);
    console.log('Grouping by types: ');
    console.log(organized);
}


groupElements(array);
groupByType(otherArray);