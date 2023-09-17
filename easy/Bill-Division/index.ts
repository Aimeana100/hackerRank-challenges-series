
/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

function bonAppetit(bill: number[], k: number, b: number): void {
    // Write your code here
    
    const AnnasDecline = bill[k]

    const sumOfBill = bill.reduce((acc, curr) => {
        return acc + curr
    }, 0)
    const share = (sumOfBill - bill[k]) / 2;
    
    if(share == b){
        console.log("Bon Appetit")
    }
    else{
        console.log(b- share);
    }
}

console.log(bonAppetit([3, 10, 2, 9], 1, 12)) // 5