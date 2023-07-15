function solution(start, end) {
    // var answer = [];
    // for(let i = start; start>= i >= end; i--){
    //     // answer.push[i]
    //     console.log(i)
    // }
    // return answer;
    var answer = Array.from({length:start-end+1},((v,i)=>i+end)).sort((a,b)=>b-a)
    // let m =Array.from({length:start-end+1},((v,i)=>i+1))
    // var answer = m.filter((i)=> i%k ===0);

    return answer;
}
