function solution(arr) {
    // var answer =1;
    // for(let i,j  = 1; i,j<=arr.length;i,j++){
    //     if(arr[i][j]==arr[j][i]){
    //         answer = 1
    //     }else{
    //         answer =0
    //     }
    // }
    // for(let i=0; i<arr.length; i++){
    //     for(let j = 0; j<arr.length; j++){
    //         if(arr[i][j]!=arr[j][i]){
    //             answer = 0
    //         }
    //     }
    // }
    var answer = arr.every((r, i) => r.every((_, j) => arr[i][j] === arr[j][i])) ? 1 : 0;
    return answer;
}