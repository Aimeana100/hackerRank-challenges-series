function divisibleSumPairs(n: number, k: number, ar: number[]): number {
  // Write your code here
  let count = 0;
  let i = 0;
  while (i < n) {
    for (let j = i + 1; j < n; j++) {
      let sumOfPair = ar[i] + ar[j];
      if (sumOfPair % k == 0) {
        count++;
      }
    }
    i++;
  }
  return count;
}

divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]); // 5
