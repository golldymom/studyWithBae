function solution(my_string) {
    var answer = [];
     const strLen = my_string.length
     
    answer= [...my_string].reduce((acc, cur, idx) => {
        const curStr = my_string.slice(idx, strLen)
        return [...acc, curStr]
    }, []).sort()
    return answer;
}