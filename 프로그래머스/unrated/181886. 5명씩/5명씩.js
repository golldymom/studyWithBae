function solution(names) {
    var answer = [];
    names.map((a,i)=>i==0||i%5==0 ? answer.push(names[i]):a)
    return answer;
}