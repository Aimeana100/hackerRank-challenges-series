
function breakingRecords(scores: number[]): number[] {
    // Write your code here
    let highest = scores[0] ;
    let lowest = scores[0];
    
    const arr = [0,0];
    
    for(let score of scores) {
        if(score > highest){
            arr[0] = arr[0] + 1;
            highest = score;
        }
        if(score < lowest){
            arr[1] = arr[1] + 1;
            lowest = score;
        }
        
    }
return arr
}

const tesArr = [10, 5, 20, 20, 4, 5, 2, 25, 1]
breakingRecords(tesArr) // [2,4]
