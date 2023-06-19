function solution(rsp) {
    const mapping = {
    '2': '0',
    '0': '5',
    '5': '2',
  };
    var answer = '';
    // var answer = rsp.split('').map(num => mapping[num]).join('');
     for (let i = 0; i < rsp.length; i++) {
    answer += mapping[rsp[i]];
  }
    return answer;
//     replace(0->5, 5->2, 2->0)
}