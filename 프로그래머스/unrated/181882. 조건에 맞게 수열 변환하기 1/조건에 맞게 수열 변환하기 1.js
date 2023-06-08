function solution(arr) {
//     var answer = arr.map((a)=> {
//         if(a >=50 && a%2 === 0) {return  a /2} 
//         else if(a < 50 && a %2 !== 0) {return a* 2}
//         else {return a}
//                                });
//     map 과 삼항연산자 사용하기
     var answer = arr.map((a)=> {
     return (a >= 50 && a % 2 === 0) ? a / 2 : (a < 50 && a % 2 !== 0) ? a * 2 : a
            });
    return answer;
}
