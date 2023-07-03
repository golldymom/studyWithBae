const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let gob = /[a-z]/;
    let gos = /[A-z]/;
    // let answer = [...str].filter((a,i) => gob[i])
     let answer = [...str].map((char) => {
    if (char >= 'a' && char <= 'z') {
      return char.toUpperCase();
    } else if (char >= 'A' && char <= 'Z') {
      return char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
    console.log(answer)    
});