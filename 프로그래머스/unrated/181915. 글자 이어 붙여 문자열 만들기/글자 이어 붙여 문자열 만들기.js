function solution(my_string, index_list) {
    // let arr = my_string.split('')
    // console.log(arr)
    var answer = index_list.reduce((acc, cur) => acc+my_string[cur], "");
    return answer;
}