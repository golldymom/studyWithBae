function solution(rny_string) {
    // var answer = rny_string.split('').filter(a => a === m ? rm).map();
    var answer = rny_string.replace(/m/g, "rn");
    return answer;
}