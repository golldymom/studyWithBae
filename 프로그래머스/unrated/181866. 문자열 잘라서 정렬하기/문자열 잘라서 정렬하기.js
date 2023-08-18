function solution(myString) {
    var answer = [];
   answer= myString.split('x').filter(a=>a.length>0).sort()

    return answer;
}