//딜레이 테스트 함수 구현
function timerPromisefy(delay){
    return new Promise(function (resolve){
        setTimeout(function() {
            resolve(delay);
        }, delay);
    });
}

//한개라도 resolve 또는 reject 되면 실행
Promise.race([
    timerPromisefy(1),
    timerPromisefy(32),
    timerPromisefy(48),
    timerPromisefy(112),
    timerPromisefy(133)
]).then(function (value) {
    console.log(value);
});

var winnerPromise = new Promise(function(resolve){
    setTimeout(function(){
        console.log('this is winner');
        resolve('this is winner');
    }, 4);
});

var loserPromise = new Promise(function(resolve){
    setTimeout(function(){
        console.log('this is loser');
        resolve('this is loser');
    }, 1000);
});

//맨 처음의 promise 객체가 resolve 되면 종료
Promise.race([winnerPromise, loserPromise]).then(function(value){
    console.log(value);
});

//this is winner
//this is winner
//this is loser
//ES6 Promise 사양에는 취소 개념이 없고, resolve(), reject()를 사용한
//상태 변경만 고려한다. 즉, 상태 변경에 대한 정보가 없을 경우 Promise를
//사용해선 안된다. 일부 라이브러리에서는 취소 기능을 제공하기도 한다.