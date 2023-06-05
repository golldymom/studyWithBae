function solution(my_string) {
    let a = my_string.replace(/[^0-9]/g,'').split('');
    let newarr = a.map(Number)
    var answer = newarr.reduce((a,b)=>(a+b));
    
    return answer;
    // console.log(answer)
}