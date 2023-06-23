function solution(n, numlist) {
    var answer = [];
   // numlist.reduce((acc, t) => {if(t % n === 0){answer.push(t)}}, 0 )
    numlist.reduce((acc, t) => {t % n === 0 ? answer.push(t): acc}, 0 )
    return answer;
}