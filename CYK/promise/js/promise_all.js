/*
var request = {
    infomation: function getComment(){
        return getPromise().then(JSON.array);
    },
    cookie: function getPeople(){
        return getPromise().then(JSON.array);
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
function timerPromisefy(delay){
    return new Promise(function (resolve){
        setTimeout(function() {
            resolve(delay);
        }, delay);
    });
}

var startDate = Date.now();

//모두 resolve되면 종료
Promise.all([
    timerPromisefy(1),
    timerPromisefy(32),
    timerPromisefy(48),
    timerPromisefy(112),
    timerPromisefy(133),
]).then(function(value){
    console.log(Date.now() - startDate + 'ms');
    console.log(value);
});