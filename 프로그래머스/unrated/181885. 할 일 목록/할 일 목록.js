function solution(todo_list, finished) {
    var answer = [];
    todo_list.map((a,b)=>finished[b]==false? answer.push(todo_list[b]):a)
    return answer;
}