function solution(my_string) {
    // var answer = my_string.split(" "); // ["","i","","","","love","","you"]
    // var answer = my_string.split(" ").filter(a=> (a===" "))
    var answer = my_string.split(" ").filter(a=> a !== "")
    // var answer = my_string.split(" ").filter(a => a)
    return answer;
}