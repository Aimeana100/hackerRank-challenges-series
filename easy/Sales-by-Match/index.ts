
/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n: number, ar: number[]): number {
    // Write your code here
    
    const obj : {[key: string]:  number} = {}
    let pairs: number = 0;
    
    for(let i=0; i< n; i++){
        
        let indexToString = ar[i].toString();
        
        if(obj[indexToString]){
            obj[indexToString] = obj[indexToString] + 1
        }
        else{
           obj[indexToString] = 1
        }
        
    }
    
    for(let element in obj){
        if(obj[element] % 2 ==0){
            pairs = pairs +  obj[element] / 2
        }
        else{
            pairs = pairs +  (obj[element] - 1) / 2
 
        }
    }

return pairs
}


console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))