function solution(numbers) {
//     numbers.sort((a,b)=>a-b)
//     var answer = numbers.reduce((a,b)=>(a*b),1);
    // var answer = numbers[numbers.length - 1] * numbers[numbers.length - 2];

    // return answer;
// var maxProduct = -Infinity;

//     // 배열에서 두 개의 원소를 선택하여 곱한 값 중 최댓값을 구합니다.
//     for (var i = 0; i < numbers.length - 1; i++) {
//         for (var j = i + 1; j < numbers.length; j++) {
//             var product = numbers[i] * numbers[j];
//             if (product > maxProduct) {
//                 maxProduct = product;
//             }
//         }
//     }

    // return maxProduct;
    var answer = Math.max(...numbers.map((v,idx) =>  Math.max(...numbers.filter((dv, dIdx) => dIdx != idx).map(s => s * v) ) )) ;
    return answer
}