function solution(numbers) {
    // var answer = numbers.sort((a,b)=>a-b).reduce((a,b)=>(a*b),1)
    // numbers.sort((a,b)=>a-b)
//     var answer = numbers.reduce((a,b)=>(a*b),1);
    // var answer = numbers[numbers.length - 1] * numbers[numbers.length - 2];
    // var answer = Math.max(numbers[0]*numbers[1], numbers[numbers.length-1]*numbers[numbers.length-2]);

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
    // var answer = [...numbers].map((v,idx) =>  Math.max(...numbers.filter((dv, dIdx) => dIdx != idx).map(s => s * v) ) ) ;
    // var answer = Math.max(...numbers.map((num, idx) => Math.max(...numbers.slice(idx+1).map(num2 => num * num2))));
    var answer = Math.max(...numbers.map((a,i)=>numbers.map((b,j)=>i!=j?a*b:-1/0)).flat()) 
    return answer
}