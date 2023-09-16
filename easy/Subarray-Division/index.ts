function birthday(s: number[], d: number, m: number): number {
    // Write your code here
    const arrLen = s.length;
    let count = 0; 
    let i = 0; 
    while(i <= arrLen - m){

        let petitArr = s.slice(i, i+m);
        let petitSum = petitArr.reduce((acc, curr) => {
             return acc + curr  },0);
        if(petitSum == d){
            count ++;
        }
        i++; 
    }
    return count; 

}

birthday([1, 2, 1, 3, 2], 3, 2)