function solution(my_string) {
    // let map = {
    //    'a': 'A',
    // 'A': 'a',
    //     _,
    //     'z': 'Z',
    //     'Z': 'z',
    // }
    // var answer = [...my_string].map(a => mapping[a]).join('');
  //   var answer = [...my_string].map(char => {
  //   if (char === char.toUpperCase()) {
  //     return char.toLowerCase();
  //   } else {
  //     return char.toUpperCase();
  //   }
  // }).join('');
   var answer = my_string.replace(/(\w)/g,c=>/[a-z]/.test(c)?c.toUpperCase():c.toLowerCase())
    return answer;
}