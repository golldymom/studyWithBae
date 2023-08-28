function solution(numLog) {
    const char={
         '1' : "w",
        '-1':"s",
        '10':"d",
        '-10': "a" 
    }
//     var answer = numLog.map((cur, curIdx, originArr) => {
//         if (curIdx === 0) return ""; // 첫 번째 요소는 빈 문자열로 시작
//         const prev = originArr[curIdx - 1];
        
//         switch (prev - cur) {
//             case -1:
//                 return 'w';
//             case 1:
//                 return 's';
//             case -10:
//                 return 'd';
//             case 10:
//                 return 'a';
//             default:
//                 return '';
//         }
//     }).join("");
    var answer = numLog.slice(1).map((v, i) => 
         char[v - numLog[i]]
    ).join('')
    return answer;
}