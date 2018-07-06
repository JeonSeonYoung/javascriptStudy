/* 동기적 비동기 콜백 사용의 예
function onReady(fn){
    var readyState = document.readyState;

    if (readyState == 'interactive' || readyState === 'complete') {
        //fn();//동기적 비동기 콜백
        setTimeout(fn, 0);//연산 흐름 변경
    } else {
        window.addEventListener('DOMContentLoaded', fn);
    }
}

onReady(function(){
  console.log('DOM fully loaded and parsed');
});
//DOM Load가 완료된 상황이기 때문에 Starting이 먼저 출력된다.
console.log('==Starting==');
*/
//● 데이터를 즉시 사용할 수 있더라도, 절대로 비동기 콜백을 동기적으로 호출하지 마라.
//● 비동기 콜백을 동기적으로 호출하면 기대한 연산의 순서를 방해하고, 예상치않은 코드의 간섭을 초래할 수 있다.
//● 비동기 콜백을 동기적으로 호출하면 스택 오버플로우나 처리되지 않는 예외를 초래할 수 있다.
//● 비동기 콜백을 다른 턴에 실행되도록 스케줄링하기 위해 setTimeout 같은 비동기 API를 사용하라.
function onReadyPromise() {
    return new Promise(function (resolve, reject){
        var readyState = document.readyState;

        if (readyState == 'interactive' || readyState === 'complete') {
            resolve();
        } else {
            window.addEventListener('DOMContentLoaded', resolve);
        }
    });
}

onReadyPromise().then(function() {
    console.log('DOM fully loaded and parsed');
});

console.log('==Starting==');