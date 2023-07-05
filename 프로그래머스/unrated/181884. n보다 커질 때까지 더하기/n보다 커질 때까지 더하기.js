function solution(numbers, n) {
    // var answer = numbers.reduce((a,c)=> {a+c>0 ? a+c : a+c},0);
    var answer = 0;
    for (let i = 0; i<numbers.length; i++){
        answer += numbers[i]
       if( answer > n){
           break; 
       }
       
        // return answer
    }
    return answer;
}