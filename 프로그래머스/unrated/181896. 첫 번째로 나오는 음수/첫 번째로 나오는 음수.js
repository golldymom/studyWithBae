function solution(num_list) {
    var answer = num_list.find((v)=> v <0) ? num_list.findIndex((v)=>v<0) : -1;
    // var answer = num_list.indexOf((v)=> v<0)
    // var answer = num_list.findIndex((v)=> v <0 )
    // console.log(num_list.find((v)=> v === parseInt(v)*-1))
    // for(let n=0; n<num_list.length; n++){
    //     if(num_list[n] < 0){
    //         // answer = num_list.indexOf(n)
    //         answer = n
    //         return n
    //         break;
    //     } else{
    //         answer = -1
    //         break;
    //     }
    //      // return answer;
    // }
     return answer;
}