function solution(str_list, ex) {
    var answer = str_list.filter((e)=> !e.includes(ex)).join("")
    // var reg = /ex/g
    // var answer = str_list.map((char,i)=> (char[i].includes(ex) != -1) ? answer.push(char) : "")
    // let test1 = str_list.filter((e)=> !e.includes(ex)).join("")
    // console.log(test1)
//     for(let i =0; i<=str_list.length;i++){
//         console.log(str_list.filter((e)=> e)
        
// //     }
    return answer;
}