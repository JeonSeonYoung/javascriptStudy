var after2secResolve = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("success");
        },2000)
});


var after3secReject = new Promise(function(resolve,reject){
    setTimeout(function(){
        reject("fail");
    },3000);
});


function onlyResolve(){
    Promise.race([after2secResolve,after3secReject])
    .then(function(msg){
        console.log(msg);   //success
    });
}

onlyResolve();