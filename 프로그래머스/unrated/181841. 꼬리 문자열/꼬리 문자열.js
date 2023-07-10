function solution(str_list, ex) {
    // var answer = str_list.filter((e)=> !e.includes(ex)).join("")
    var answer = [];
    // var reg = /ex/g
    // var answer = 
       let test= str_list.map((char)=> (!char.includes(ex)) ? answer.push(char) : "")
      let result= answer.join("")
    // let test1 = str_list.filter((e)=> !e.includes(ex)).join("")
    // console.log(test1)
//     for(let i =0; i<=str_list.length;i++){
//         console.log(str_list.filter((e)=> e)
        
// //     }
    // return answer;
      return result
}