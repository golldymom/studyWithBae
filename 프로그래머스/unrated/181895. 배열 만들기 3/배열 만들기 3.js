function solution(arr, intervals) {
    var answer = [];
    // var fi = intervals[0]
    // var se  = intervals[1]
    // var fi1 = fi[0]
    // var fi2 = fi[1]
    // var se1 = se[0]
    // var se2 = se[1]

    // console.log(fi,se)
    // console.log(fi1,fi2)
    // answer.push(arr.slice(fi1,fi2+1).concat(arr.slice(se1,se2+1)))
        // return answer[0];
        var  [[fi1,fi2],[se1,se2]] = intervals;
    answer = arr.slice(fi1,fi2+1).concat(arr.slice(se1,se2+1))
    return answer

}