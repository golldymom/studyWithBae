function solution(my_string) {
    // var reg = /[^\s]+/
    // var answer = my_string.split(" "); // ["","i","","","","love","","you"]
    // var answer = my_string.split(" ").filter(a=> (a===" "))
    var answer = my_string.split(" ").filter(a=> a !== "")
    // var answer = my_string.split(" ").filter(a=> a == reg )
    // var answer = my_string.split(" ").filter(a => a)
    var asnwer = my_string.trim()
    // .split(/ +/)
    return answer;
}