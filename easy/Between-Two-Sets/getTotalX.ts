function getTotalX(a: number[], b: number[]): number {
  const factorsOfSecondArr = findFacctorsOf(b);
  const elementsConsidered = factorsOfSecondArr.filter((element) =>
    a.every((sinleFelement) =>
      findFacctorsOf([element]).includes(sinleFelement)
    )
  );

  return elementsConsidered.length;
}

const findFacctorsOf = (arr: number[]): number[] => {
  const smallest = Math.min(...arr);

  const arrOfBelowNum = [...iterate(1, smallest)];

  const result = arrOfBelowNum.filter((smallNumber) =>
    arr.every((valueInB) => valueInB % smallNumber == 0)
  );

  return result;
};
// program to generate range of numbers
function* iterate(a: number, b: number) {
  for (let i = a; i <= b; i += 1) {
    yield i;
  }
}

getTotalX([2,4], [16,32,20])
