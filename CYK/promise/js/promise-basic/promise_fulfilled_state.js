/*
function getURLCallback(URL, calback){
    var req = new XMLHttpRequest();

    req.open('GET', URL, callback);

    req.onload = function () {
        if (req,status == 200) {
            callback(null, req.responseText);
        } else {
            callback(new Error(req.statusText), req,response);
        }
    };

    req.onerror = function () {
        callback(new Error(req.statusText));
    };

    req.send();
}

//<1> JSON 파싱
function jsonParse(callback, error, value) {
    if (error) {
        callback(error, value);
    } else {
        try {
            var result = JSON.parse(value);
            callback(null, result);
        } catch (e) {
            callback(e, value);
        }
    }
}

//<2> XHR 요청
var request = {
    infomation: function getInfomation(callback) {
        return getURLCallback('http://httpbin.org/get', jsonParse.bind(null, callback));
    },
    cookie: function getCookie(callback) {
        return getURLCallback('http://httpbin.org/cookies', jsonParse.bind(null, callback));
    }
};

//<3> 복수의 XHR 리퀘스트를 실시하고 모두 완료되면 callback을 호출
function allRequest(requests, callback, results) {
    var req = null;

    if (requests.length === 0) {
        return callback(null, results);
    }

    req = requests.shift();

    req(function (error, value) {
        if (error) {
            callback(error, value);
        } else {
            results.push(value);
            allRequest(requests, callback, results);
        }
    });
}

function main(callback) {
    allRequest([request.infoamation, request.cookie], callback, []);
}

//실행
main(function(error, results){
    if (error) {
        return console.error(error);
    }
    console.log(results);
});
● 예외 처리를 위한 코드가 반복된다.
● 중첩이 깊어지는 문제를 피하고자 요청을 다루는 별도의 함수가 필요하다.
● 콜백을 자주 사용한다.
*/

//위 3가지 전통적인 콜백 스타일을 보완한 then을 사용한 간결한 코드 구현
/**
 *  JSON.parse를 바로 사용. 부가적 예외처리 하지 않음
 *  main()은 promise 객체를 반환
 *  예외 처리는 반환된promise객체에 작성
 */
function getURL (URL) {//URL대신 getPromise로 동작하도록 구현
    return new Promise(function (resolve, reject){
        var req = new XMLHttpRequest();

        req.open('GET', URL, true);

        req.onload = function() {
            if (req.status == 200) {
                resolve(req.responseText);
            } else {
                reject(new Error(req.statusText));
            }
        };

        req.onerror = function() {
            reject(new Error(req.statusText));
        };
    
        req.send();
    });
}

function getPromise(value){
    return new Promise(function (resolve, reject){
        setTimeout(function(){
            if(value != '' && value != null && value != undefined){
                resolve(value);
            } else {
                reject(new Error(value));
            }
        }, 2000);
    });
}

var request = {
    infomation: function getComment(){
        // return getURL().then(JSON.parse);
        return getPromise(['comment', 'promise.kr']).then(JSON.array);
    },
    cookie: function getPeople() {
        // return getURL().then(JSON.parse);
        return getPromise(['cookie', 'jane']).then(JSON.array);
    }
};


function main() {
    var pushValue = null;

    function recordValue(results, value) {//프라미스 인자로 넘어온 배열, 값을 배열에 추가
        results.push(value);
        return results;
    }

    pushValue = recordValue.bind(null, []);//각 요청 인자별로 구분하여 한번 더 배열에 담아준다

    return request.infomation().then(pushValue).then(request.cookie).then(pushValue);
}

main().then(function (value) {
    console.log(value)
}).catch(function(error){
    console.error(error);
});