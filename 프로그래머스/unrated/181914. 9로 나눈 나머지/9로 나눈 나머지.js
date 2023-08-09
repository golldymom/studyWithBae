function solution(number) {
    var mp = [...number].reduce((a,b)=>+a+ +b,'');
    var answer = mp%9
    return answer;
}