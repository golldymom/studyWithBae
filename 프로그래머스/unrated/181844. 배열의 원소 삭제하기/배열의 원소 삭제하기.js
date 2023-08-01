function solution(arr, delete_list) {
    // var answer = arr.filter(a=> arr[a]==delete_list[a]); //실행한 결괏값 [293,1000,395,678,94]이 기댓값 [293,395,678]과 다릅니다.
     // var answer = arr.filter(a=> a==a.delete_list); //실행한 결괏값 []이 기댓값 [293,395,678]과 다릅니다.
    // var answer = arr.filter(a=> delete_list.includes(a));//실행한 결괏값 [1000,94]이 기댓값 [293,395,678]과 다릅니다.
    var answer = arr.filter(a=> !delete_list.includes(a));
    return answer;
}