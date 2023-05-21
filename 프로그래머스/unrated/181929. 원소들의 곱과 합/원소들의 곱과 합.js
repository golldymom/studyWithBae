function solution(num_list) {
    var answer = 0;
    if(Math.pow(num_list.reduce((a,b)=>(a+b)),2) > num_list.reduce((a,b)=>(a*b))){
        answer = 1
        return answer;
    }else{
        answer = 0
        return answer;
    }
    
}