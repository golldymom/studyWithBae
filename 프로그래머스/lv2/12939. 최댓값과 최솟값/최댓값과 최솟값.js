function solution(s) {
    n = s.split(' ')

    let answer = Math.min(...n)+' '+Math.max(...n);
    return answer;
    // console.log(n)
}