function solution(myString) {
    // var reg = /a/gi
    var answer = [...myString].reduce((acc,c)=> c === 'a'||c==="A" ? acc + c.toUpperCase() : acc + c.toLowerCase(),'');
    return answer;
}