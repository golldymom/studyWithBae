function solution(myString, pat) {
    var answer = 0;
    let match = {
        'A' :"B",
        'B' : "A"
    }
    let changeAB =[...myString].map((a)=>match[a]).join('')
    // console.log(changeAB)
    answer = changeAB.includes(pat) ? 1:0
    return answer;
}