function solution(num_list) {
    var answer = 0;
    if(num_list.length >= 11){
        answer = num_list.reduce((a,b) => (a+b))
        return answer
    } else{
        answer = num_list.reduce((a,b)=>(a*b))
        return answer
    }
    return answer;
    // console.log(num_list.length)
}