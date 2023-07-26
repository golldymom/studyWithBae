function solution(n_str) {
    // [] 바깥의 ^는 문자열의 처음을 의미한다.
//     처음 시작할때 0으로 시작하고 0이 아닌 숫자가 나올때 까지의 0은 모두 삭제
    let reg = /^0*/gi
    var answer = n_str.replace(reg,'');
    return answer;
}