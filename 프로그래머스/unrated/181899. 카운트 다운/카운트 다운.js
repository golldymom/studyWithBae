function solution(start, end) {
    // var answer = [];
    // for(let i = start; start>= i >= end; i--){
    //     // answer.push[i]
    //     console.log(i)
    // }
    // return answer;
    // var answer = Array.from({length:start-end+1},((v,i)=>i+end)).sort((a,b)=>b-a)
    // var answer = Array.from({length:start-end+1},((v,i)=>i-1)) //[-1, 0, 1, 2, 3, 4, 5, 6]
    var answer = Array.from({length:start-end+1},((v,i)=>start - i)) //성공
    // var answer = Array.from(Array(start - end + 1), (_, i) => start - i);
 // for(let i = end; i <= start; i++){
 //        answer.unshift(i)
 //    }
    //  for(let i = start; i>=end; i--){
    //     answer.push(i)
    // }
// var answer = Array(start-end+1).fill(start).map((v,i)=>v-i);
    return answer;
}
