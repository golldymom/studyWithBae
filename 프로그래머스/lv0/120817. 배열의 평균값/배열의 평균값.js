function solution(numbers) {
    l = numbers.length
    var answer = numbers.reduce((a,b)=>a+b)/l
    
    return answer;
}