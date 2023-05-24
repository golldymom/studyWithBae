function solution(money) {
    var answer = [];
    let jan = parseInt(money / 5500);
    let exchange = money % 5500
    answer.push(jan,exchange);
    return answer;
}