function solution(my_string) {
    let ve = /[aeiou]/gi
    var answer = my_string.replace(ve,'');
    return answer;
    // console.log(my_string)
    
}