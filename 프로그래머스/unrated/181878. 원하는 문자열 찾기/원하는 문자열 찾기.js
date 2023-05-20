function solution(myString, pat) {
    var answer = 0;
    let NMyString = myString.toUpperCase();
    let NPat = pat.toUpperCase();
    // console.log(NMyString)
    if (NMyString.includes(NPat) === true){
        answer = 1
        return answer
    }else{
        answer = 0;
        return answer;
    }
    // return answer;
}