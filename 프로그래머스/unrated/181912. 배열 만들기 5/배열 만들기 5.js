function solution(intStrs, k, s, l) {
    var answer = [];
    // var newIntStrs  = intStrs
    // var test1,test2,test3 = newIntStrs.slice(0,1)
    // var testt = newIntStrs.filter(a=>a.slice(s,1)>k)
// answer = intStrs.filter(str => {
//         const subStr = str.slice(s, s+l);
//         const num = parseInt(subStr);
//         return num > k;
//     }).map(str => parseInt(str));
    //  answer = intStrs.map(str => {
    //     const subStr = str.substring(s, s + l);
    //     const num = parseInt(subStr);
    //     return num;
    // }).filter(num => num > k);
     intStrs.forEach(el=>{
        const num  = +el.substr(s,l);
        if( num > k) answer.push(num);
    })
    // console.log(testt)
    // console.log(typeof(s))
    
    return answer;
}