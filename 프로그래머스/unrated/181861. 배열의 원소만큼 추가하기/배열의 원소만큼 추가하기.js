function solution(arr) {
     var answer = [];
  for (var i = 0; i < arr.length; i++) {
    var element = arr[i];
    for (var j = 0; j < element; j++) {
      answer.push(element);
    }
  }
  return answer;
    // var answer = arr.map((a,b) =>  b.repeat(a),''); //
    // var answer = arr.flatMap((element) => String(element).repeat(element).split("").map(Number));
    
  //   var answer = arr.reduce((acc, cur) => {
  //   var repeated = Array(cur).fill(cur);
  //   return acc.concat(repeated);
  // }, []);
    
    // var answer = arr.flatMap(num => Array(num).fill(num));
    // return answer;
}
