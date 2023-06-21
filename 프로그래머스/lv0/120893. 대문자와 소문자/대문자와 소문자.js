function solution(my_string) {
    // let map = {
    //     toLowerCase() : toUpperCase()
    //     toUpperCase() : toLowerCase()
    // }
    // var answer = [...my_string].map(a => mapping[a]).join('');
    var answer = [...my_string].map(char => {
    if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  }).join('');
    return answer;
}