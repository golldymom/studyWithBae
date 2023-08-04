function solution(arr, idx) {
    // var answer = 0;
//     for(let i = 0; i<arr.length; i++){
//         // console.log(i)
//        // console.log(arr[i]) 
        
//     }
 var answer = arr.findIndex((a,i)=> a ==1 && i>= idx )
    return answer;
}