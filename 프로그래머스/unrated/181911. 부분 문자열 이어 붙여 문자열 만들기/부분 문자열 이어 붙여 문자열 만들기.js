function solution(my_strings, parts) {
    var answer = [];
 
    for(let i= 0; i<my_strings.length; i++){
   let [a,b]=parts[i]
      // console.log(my_strings[i].slice(a,b+1))
   answer.push(my_strings[i].slice(a,b+1))
    }
    return answer.join('');
}