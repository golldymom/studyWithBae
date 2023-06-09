function solution(num_str) {
    var answer = num_str.split('').reduce((a,b)=>{return a*1+b*1}, 0);
    return answer;
}