/*
 * Complete the 'extraLongFactorials' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function extraLongFactorials(n: number): void {
    let result: bigint = 1n; // Initialize the result as a bigint
  
    for (let i = 2; i <= n; i++) {
      result *= BigInt(i); // Multiply by the current number as a bigint
    }
    
    console.log(result.toString())
  
  }