function solution(arr) {
    // var answer = arr.map((a,b) =>  b.repeat(a),'');
    // var answer = arr.flatMap((element) => String(element).repeat(element).split("").map(Number));
    
  //   var answer = arr.reduce((acc, cur) => {
  //   var repeated = Array(cur).fill(cur);
  //   return acc.concat(repeated);
  // }, []);
    
    var answer = arr.flatMap(num => Array(num).fill(num));
    return answer;
}