function solution(num_list) {
    var answer = 0;
    let harr = [];
    let jarr = [];
    num_list.map((n)=> !(n % 2) ? harr.push(n):jarr.push(n))
    let reh = harr.join("")
    let rej= jarr.join("")
    answer = parseInt(reh)+parseInt(rej)
    return answer;
}