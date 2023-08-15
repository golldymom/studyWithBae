function solution(a, b) {
    // var answer = Math.max(String(a)+String(b), 2*a*b);
    var answer = Math.max(a+""+b+"", 2*a*b);
    // console.log(String(a)+String(b), 2*a*b)
    return answer;
}