//then(), catch()가 새로운 프라미스 객체를 생성해 반환하는지 확인
var promise = new Promise(function(resolve){
    resolve(100);
});

var thenPromise = promise.then(function(value) {
    console.log(value);
});

var catchPromise = promise.catch(function(error){
    console.log(error);
});

console.log(promise === thenPromise);

console.log(promise === catchPromise);

var aPromise = new Promise(function(resolve) {
    resolve(100);
});
//then()이 동시 호출되기 때문에 각 value는 각 함수에서 끝날 뿐 값이 연계되지는 않는다.
aPromise.then(function(value){//200
    return value * 2;
});

aPromise.then(function(value){//200
    return value * 2;
});

aPromise.then(function(value){
    console.log("1: " + value);//1: 100
});

// 2: then()으로 등록한 함수가
// promise 체인의 순서대로 호출된다.
var bPromise = new Promise(function (resolve){
    resolve(100);
});
//then()은 새로운 Promise로 인식하지만, 체인에 의해 순서대로 진행되며 순서대로 연산하여 실행한다.
bPromise.then(function(value){//200
    return value * 2;
}).then(function(value){//400
  return value * 2;  
}).then(function(value){
    console.log("2: " + value);//2: 400
});

//then을 처리중 어떤 오류가 발생했을 때 감지할 방법이 없으며 특정 결과값을
//반환하더라도 전달 불가능.
function anAsyncCall(){
    var cPromise = Promise.resolve();

    cPromise.then(function(){
        //something do...return newVar;
    });

    return cPromise;
}

//then()의 사용 자체를 return해주어 새롭게 생성된 promise객체 또한 반환 가능하도록
//구현해야 한다.
function anAsyncCall_Success(){
    var dPromise = Promise.resolve();

    return dPromise.then(function(){
        //something do...return newVar;
    });
}