function solution(n) {
    let answer= String(n).split('').reduce((a,b)=>a+b*1,0)

    return answer;
// reduce함수는 배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);으로 사용한다 초깃값 잊지말자
}