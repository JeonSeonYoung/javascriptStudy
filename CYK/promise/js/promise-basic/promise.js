// var promise = new Promise(function(resolve, reject) {
    //비동기 처리 작성
    //처리가 끝나면 resolve 또는 reject를 호출
// });
//프라미스 성공/실패에 대한 리턴
// promise.then(onFulfilled, onRejected);
//프라미스 실패 오류처리만을 위한 리턴
//promise.then(undefined, onRejected)와 같은 의미로 사용
// promise.catch(onRejected);

function asyncFunction() {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            resolve('Async Hello world');
        }, 16);
    });
}

asyncFunction().then(function (value) {
    console.log(value);
}).catch(function (error) {
    console.log(error);
});

//resolve
new Promise(function resolve(resolve){
    resolve(42);
}).then(function(value){
    console.log(value);
});

//Promise.resolve()의 사용은 즉 Promise를 새로 생성하여
//사용하는 것과 같으므로 단축하여 표기한다
Promise.resolve(42).then(function(value){
    console.log(value);
});

//reject
new Promise(function(resolve, reject){
    reject(new Error('오류'));
}).catch(function(error){
    console.log(error.message); //오류
});

//Promise.reject()도 resolve처럼 단축 표기가 가능하다.
Promise.reject(new Error('오류')).catch(function(error){
    console.log(error.message);
});