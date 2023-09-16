/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr: number[]): number {
  // Write your code here

  let newObj: { [key: string]: number } = {}; // You can use the array directly instead
  let max = arr[0]; // initialize the most occurant number with the first element from the array

  for (let elem of arr) {
    if (newObj[elem.toString()]) {
      newObj[elem.toString()] = newObj[elem.toString()] + 1;
    } else {
      newObj[elem.toString()] = 1;
    }

    if (newObj[elem.toString()] > newObj[max.toString()]) {
      max = elem;
    }
  }

  const WiningArr = findHighest(newObj, newObj[max]);
  const smolest = Math.min(...WiningArr.map((ele) => Number(ele[0])));
  return smolest;
}

// find the element with most highest number of occurrences
const findHighest = (obj: { [key: string]: number }, key: number) => {
  return Object.entries(obj).filter((elem) => {
    return elem[1] == key;
  });
};

console.log(migratoryBirds([1, 4, 4, 4, 5, 3])) // 4