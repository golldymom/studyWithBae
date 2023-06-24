function solution(cipher, code) {
    // var answer = [...cipher].map((char,i)=>{char.filter((i)=> i%code ===0)}).join('');
    // var answer = '' ;
        // for (let i = code - 1; i < cipher.length; i += code) {
        // answer += cipher[i];
    // }
    // var answer = [...cipher].filter((char, index) => (index +1) % code === 0).join('');
     // var answer = [...cipher].map((char, index) => (index + 1) % code === 0 ? char : '').join('');
    var answer = [...cipher].reduce((acc,char,index) => (index+1)%code ===0 ? acc+char : acc,'')
    return answer;
}