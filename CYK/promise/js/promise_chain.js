//then과 catch 메서드 체인
/*
Promise.then(function taskA(value){
    //task A
}).then(function taskB(value){
    //task B
}).catch(function onRejected(error){
    console.log(error);
});
*/

function taskA(){
    console.log("Task A");
    throw new Error("throw Error @ Task A");
}

function taskB(){
    console.log("Task B");
}

function onRejected(error){
    console.error(error.message);
}

function finalTask(){
    // console.log("Final Task");
    //finalTask 에러 처리
    throw new Error('Final Task 처리 중 에러');
}

var promise = Promise.resolve();
promise.then(taskA).then(taskB).catch(onRejected).then(finalTask);

//Task A
//Task B
//Funal Task

function doubleUp(value){
    return value * 2;
}

function increment(value){
    return value + 1;
}

function output(value){
    console.log(value);//(1 + 1) * 2
}

var promise = Promise.resolve(1);
promise.then(increment).then(doubleUp).then(output);//4