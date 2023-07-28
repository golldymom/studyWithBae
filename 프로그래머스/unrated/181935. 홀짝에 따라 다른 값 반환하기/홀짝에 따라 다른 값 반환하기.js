function solution(n) {
    var answer = 0;
    if(n%2!=0){
        // answer = Array.from({length:n},(v,i)=>i%2!=0)
            // .reduce((a,b)=>a+b)
        let map = Array.from({length:n},(v,i)=>i+1)
        console.log(map)
        answer = map.reduce((a,c,i)=>c%2!=0? a+c : a,0)
    }else{
        let map = Array.from({length:n},(v,i)=>i+1)
         // console.log(map)
        // answer = map.reduce((a,c,i)=>c%2 ?  a+(Math.sqrt([c])) : a,0)
        answer = map.reduce((a,c,i)=>c%2==0 ?  (a+Math.pow(c,2)) : a,0)
    }
    return answer;
    // console.log(map)
}