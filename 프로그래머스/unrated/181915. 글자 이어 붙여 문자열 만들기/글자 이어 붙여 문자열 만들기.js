function solution(my_string, index_list) {
    // let arr = my_string.split('')
    // console.log(arr)
    // var answer = index_list.reduce((acc, cur) => console.log(my_string[cur]),acc+my_string[cur], "");
     var answer = index_list.map((index) => my_string[index]).join("");
  
    return answer;
}