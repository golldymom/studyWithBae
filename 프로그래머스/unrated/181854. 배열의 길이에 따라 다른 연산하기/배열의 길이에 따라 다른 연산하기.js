function solution(arr, n) {
    // var answer = [];
   // var answer = arr.reduce((a,c,i)=> (n%2===0)? a+c[i%2===0]+n : a+c[n%2!==0]+n)
     // var answer = arr.reduce((a,c,i)=> (arr.length %2===0)? (a,i)=> i%2 ? a+n : a : (a,i)=> !i%2 ? a+n:a )
      var answer = arr.reduce((result, num, index) => {
    return arr.length % 2 === 0
      ? [...result, index % 2 === 1 ? num + n : num]
      : [...result, index % 2 === 0 ? num + n : num];
  }, []);
    // for(let i = 0; i<arr.length; i++){
    // if(arr.length%2===0){
    //     answer.push(arr[i%2!==0]+n)
    // }else{answer.push(arr[i])}
    // }
    // if(arr.length % 2 === 0) {
    //     return arr.map((a, i) => i%2 !== 0 ? a+n : a)
    // } else {
    //     return arr.map((a, i) => i%2 === 0 ? a+n : a)
    // }
    return answer;
}