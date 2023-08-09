function solution(number) {
    // var mp = [...number].reduce((a,b)=>+a+ +b,'');
    // var answer = mp%9
var answer = [...number].reduce((a,b)=>+a+ +b,'')%9
    return answer;
}