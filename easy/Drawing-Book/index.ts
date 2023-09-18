/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n: number, p: number): number {
  // Write your code here

  let fromInfront = 0;
  let fromBack = 0;
  let countFromLeft = n - p;

  if (n == p || n < 3 || (n % 2 != 0 && n - 1 == p)) {
    return 0;
  } else if (countFromLeft == 1 || (n % 2 == 0 && p - 1 == 1)) {
    return 1;
  }

  // front page turns
  if (p % 2 != 0) {
    fromInfront = (p - 1) / 2;
  } else {
    fromInfront = p / 2;
  }

  // backward pages counts
  if (countFromLeft % 2 == 0) {
    fromBack = countFromLeft / 2;
  } else {
    fromBack = (countFromLeft - 1) / 2;
  }

  return fromInfront < fromBack ? fromInfront : fromBack;
}


console.log(pageCount(6,2)) // 1

// NOTE THAT THIS IS NOT REALY BEST PRACTICE AND WILL NEED TO BE IMPROVED IN THE future.