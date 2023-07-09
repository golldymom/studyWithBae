function solution(a, b) {
    var answer = 0;
    // if(a && b % 2 !== 0){
     if(a % 2 !== 0 && b % 2 !== 0){
        answer = Math.pow(a,2)+Math.pow(b,2)
    }
    // else if(a && b % 2 === 0){
    else if (a %2==0 && b%2==0){
        answer = Math.abs(a-b)
    }else{
        answer = parseInt(a+b)*2
    }
    return answer;
}