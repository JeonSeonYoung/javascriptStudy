var promise = Promise.reject(new Error("message"));

//일반적으로 사용 가능한 브라우저에서의 Promise의 catch
promise.catch(function(error){
    console.log(error.message);
});

//Promise polyfill 지원을 필요로하는 브라우저에서 구현체
//ECMAScript3에서 예약어 문제를 피하기 위한 코드
promise["catch"](function(error){
    console.log(error.message);
});