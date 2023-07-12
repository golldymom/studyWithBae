function solution(num_list) {
    var answer = num_list.sort((a,b)=>a-b).slice(5);
// let test = num_list.sort((a,b)=>a-b).slice(5)
// console.log(test)
    return answer;
}