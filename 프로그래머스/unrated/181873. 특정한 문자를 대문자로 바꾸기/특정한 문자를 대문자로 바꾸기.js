function solution(my_string, alp) {
    // var answer = [...my_string].reduce((a,c)=> !(c==alp)? a+c.upperCase():a);
    // var answer = [...my_string].reduce((a,c)=> (c==alp)? a+c.toUpperCase() : a+c);
    // var answer = [...my_string].reduce((a,c)=> (c === alp)? c.toUpperCase() : a+c,''); //실패?
       var answer = [...my_string].reduce((a,c)=> (c === alp) ? a+c.toUpperCase() : a+c,[]);
    
    // let my_string2 = [...my_string]
    // if(my_string2[0] === alp){
    //     console.log(my_string[0].toUpperCase())
    // }
    return answer;
}