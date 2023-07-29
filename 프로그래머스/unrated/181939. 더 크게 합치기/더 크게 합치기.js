function solution(a, b) {
    var answer =0;
    let ab = String(a)+String(b)
    let ba = String(b)+String(a)
    if(ab==ba){
        answer = Number(ab)
    }else if(ab<ba){
        answer = Number(ba)
    }else{
        answer = Number(ab)
    }
    return answer;
}