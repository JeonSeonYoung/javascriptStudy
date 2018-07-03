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
}

function taskB(){
    console.log("Task B");
}

function onRejected(error){
    console.log("Catch Error: A or B", error);
}

function finalTask(){
    console.log("Final Task");
}

var promise = Promise.resolve();
promise.then(taskA).then(taskB).catch(onRejected).then(finalTask);

//Task A
//Task B
//Funal Task