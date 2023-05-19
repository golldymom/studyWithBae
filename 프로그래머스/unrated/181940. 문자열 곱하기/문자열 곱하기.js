function solution(my_string, k) {
    // var answer = Array(k+1).join(my_string);
    var answer = my_string.repeat(k);
    return answer;
}