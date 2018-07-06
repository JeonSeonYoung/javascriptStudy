/*
var request = {
    infomation: function getComment(){
        return getPromise(["infomation","comment"]).then(JSON.array);
    },
    cookie: function getPeople(){
        return getPromise(["cookie","people"]).then(JSON.array);
    }
};

function main(){
    return Promise.all([request.infomation(), request.cookie()]);
}

main().then(function(value){
    console.log(value);
}).catch(function(error){
    console.log(error);
});
*/

//딜레이 테스트 함수 구현
function timerPromisefy(delay){
    return new Promise(function (resolve){
        setTimeout(function() {
            resolve(delay);
        }, delay);
    });
}
//시작 시간
var startDate = Date.now();

//모두 resolve되면 종료, 각 타임스템프에서 마무리 되어 구현되지 않고
//각 시간마다 해당 시간의 값을 찍어내고 끝난다.
Promise.all([
    timerPromisefy(1),
    timerPromisefy(32),
    timerPromisefy(48),
    timerPromisefy(112),
    timerPromisefy(133)
]).then(function(value){
    //마무리시점에서 시작 시간을 뺀 밀리초
    console.log(Date.now() - startDate + 'ms');
    console.log(value);
});

//이것은 어떤 사용 용도?? 설명 부족
var promises = [
    timerPromisefy(1),
    timerPromisefy(32),
    timerPromisefy(48),
    timerPromisefy(112),
    timerPromisefy(133)
];
