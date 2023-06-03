function solution(price) {
    var answer;
    // console.log(price)
    if(500000 <= price){
        answer = Math.floor(price*.8)
        // console.log(answer)
           return answer;
    }
       
    else if (100000 <= price && price < 300000){
        answer = Math.floor(price*.95)
           return answer;
    }
    
    else if(300000 <= price && price < 500000){
        answer = Math.floor(price*.9)
        return answer;
    }
 else{return price}
}