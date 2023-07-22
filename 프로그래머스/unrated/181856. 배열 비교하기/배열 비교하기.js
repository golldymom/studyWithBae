function solution(arr1, arr2) {
    var answer = 0 ;
    if(arr1.length > arr2.length){
        return answer = 1
    }else if(arr1.length< arr2.length){
        return answer = -1
    }else if(arr1.length === arr2.length){
        if(arr1.reduce((a,b)=>a+b,0) > arr2.reduce((a,b)=>a+b,0)){
           return answer = 1
           }else if(arr1.reduce((a,b)=>a+b,0)< arr2.reduce((a,b)=>a+b,0)){
               return answer = -1
           } else  {return answer = 0}
    }
    // if(arr1.length != arr2.length){
    //     arr1.length > arr2.length ? answer = 1 : answer = -1
    // } else {
    //     arr1.reduce((a,b)=>a+b,0) > arr2.reduce((a,b)=>a+b,0) ? answer = 1 : arr1.reduce((a,b)=>a+b,0) == arr2.reduce((a,b)=>a+b,0)? answer = 0 : answer = -1
    // }
    //    if(arr1.length > arr2.length && arr1.length != arr2.length ){
    //     return answer = 1
    // }else if(arr1.length < arr2.length && arr1.length != arr2.length){
    //     return answer = -1
    // }
    // if(arr1.length === arr2.length){
    //     if(arr1.reduce((a,b)=>a+b,0) > arr2.reduce((a,b)=>a+b,0) && arr1.reduce((a,b)=>a+b,0) !== arr2.reduce((a,b)=>a+b,0)){
    //        return answer = 1
    //        }else if(arr1.reduce((a,b)=>a+b,0)< arr2.reduce((a,b)=>a+b,0) && arr1.reduce((a,b)=>a+b,0) !== arr2.reduce((a,b)=>a+b,0)){
    //            return answer = -1
    //        } else  {return answer = 0}
    // }
    return answer;
}