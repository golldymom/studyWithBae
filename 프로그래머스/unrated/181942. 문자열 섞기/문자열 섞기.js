function solution(str1, str2) {
    var answer = Array.from(str1,(c,i)=>  c + str2[i]).join('');
    return answer;
}