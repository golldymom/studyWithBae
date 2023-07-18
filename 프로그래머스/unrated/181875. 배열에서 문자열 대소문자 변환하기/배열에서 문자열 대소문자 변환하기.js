function solution(strArr) {
    var answer = [];
    // var answer = strArr.reduce((a,c,i)=>(!i%2)? [...a, c.toLowerCase()]:[a+c.toUpperCase()],[])
    // var answer = strArr.reduce((a,c,i)=> i%2===0 ? a+[ c.toLowerCase()] : a,'')  //reduce는 한개의 문자열로 합치는 성질이 있음.
    // var answer = 
        strArr.map((a,i) => i%2 ? answer.push(a.toUpperCase()) : answer.push(a.toLowerCase()))
    
    return answer;
}
 // [...result, index % 2 === 1 ? num + n : num]