let i = require('fs').readFileSync(0, 'utf8').split(' ')
let a = Number(i[0])
let b = Number(i[1])
if (a > b){
    console.log('>')
} else if(a<b){
    console.log('<')
}else{
    console.log('==')
}