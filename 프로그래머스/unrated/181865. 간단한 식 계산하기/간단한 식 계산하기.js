function solution(binomial) {
  
        let n1 = binomial.split(' ')[0];
    let n2 = binomial.split(' ')[1];
    let n3 = binomial.split(' ')[2];
      var answer = Number(n1)+ n2+ Number(n3)
    // console.log(n1,n2,n3)
    // var answer = [n1,n2,n3].reduce((a,b)=>a+b,0);
      if(n2 == '+'){
         answer = Number(n1) + Number(n3)
         } else if(n2 == '-'){
              answer = Number(n1) - Number(n3)
         } else{
              answer = Number(n1) * Number(n3)
         }
    return answer;
}