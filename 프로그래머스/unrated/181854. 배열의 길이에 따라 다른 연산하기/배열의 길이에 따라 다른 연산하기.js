function solution(arr, n) {
    var answer = [];
   // var answer = arr.reduce((a,c,i)=> (n%2===0)? a+c[i%2===0]+n : a+c[n%2!==0]+n)
     // var answer = arr.reduce((a,c,i)=> (n%2===0)? a+c[i%2==0]+"here hole" : "here jac" )
    // for(let i = 0; i<arr.length; i++){
    // if(arr.length%2===0){
    //     answer.push(arr[i%2!==0]+n)
    // }
    // }
    if(arr.length % 2 === 0) {
        return arr.map((a, i) => i%2 !== 0 ? a+n : a)
    } else {
        return arr.map((a, i) => i%2 === 0 ? a+n : a)
    }
    return answer;
}