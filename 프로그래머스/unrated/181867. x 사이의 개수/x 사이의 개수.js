function solution(myString) {
    var answer = [];
    var tt = myString.split("x")
    var tt1 = tt.reduce((a,b)=> b.includes('o') ? answer.push(b.length) : answer.push(b.length),'')
    console.log(tt1)
    return answer;
}