function solution(n, control) {
    const match = {
        "w" : 1,
        "s" : -1,
        "d" : 10,
        "a" : -10
    }
    var answer = [... control].reduce((a,b)=>a+match[b],n);
    return answer;
}