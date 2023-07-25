function solution(num_list) {
    var answer = 0;
    var h1 = num_list.reduce((a,c,i)=> (i+1)%2!==0? a+c :a,0)
    var g1 = num_list.reduce((a,c,i)=> (i+1)%2==0? a+c :a,0)
    // console.log(h1,g1)
    answer = Math.max(h1,g1)
    return answer;
}