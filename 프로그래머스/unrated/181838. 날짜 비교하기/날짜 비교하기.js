function solution(date1, date2) {
    // var answer = new Date(date1)<new Date(date2)? 1: 0;
    var answer = date1.join('') - date2.join('') < 0 ? 1 : 0;
    return answer;
}