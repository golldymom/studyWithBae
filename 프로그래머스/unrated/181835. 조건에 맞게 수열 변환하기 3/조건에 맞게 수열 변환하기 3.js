function solution(arr, k) {
    var answer = [];
    if(k % 2 ===0){
        answer = arr.map(e => e+k)
        return answer
    }else{
       answer = arr.map(e => e*k)
         return answer;
    }
   
}