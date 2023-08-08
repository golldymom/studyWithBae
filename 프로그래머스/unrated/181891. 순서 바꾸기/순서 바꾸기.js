function solution(num_list, n) {
    var answer = [];
    // var na=[]
    var item = num_list.splice(n)
    // na.push(item)
    var ba = num_list.splice(0,n)
    // na.push(ba)
    // var answer = na.join('')
    answer= item.concat(ba)
   // var answer = num_list.splice(0,0,item[0])
    // var answer = num_list.unshift(item)
    // answer.splice(num_list,-1,item[0])
   // console.log(na)
    return answer;
}