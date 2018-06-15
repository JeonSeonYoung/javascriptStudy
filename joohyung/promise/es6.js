function after2sec(){
    return new Promise(function(resolve, reject){
       //비동기 작업
       setTimeout(function(){
          console.log("첫번째 비동기 작업 완료");
             
          return resolve("첫번째 결과물");
       },2000);
    })
 }
 
 function after4sec(_text){
    return new Promise(function(resolve, reject){
       //비동기 작업
       setTimeout(function(){
          console.log(_text);
          console.log("두번째 비동기 작업 완료");
             
          return resolve("두번째 결과물")
       },4000)
    })
 }
 
 //비동기작업 after2sec 완료 후, after4sec 실행(return resolve 인자값을 파라미터로 받음)
 /*
 after2sec()
 .then(after4sec)
 .then(function(result){console.log(result)});
 */
 
 
 //두개의 작업을 같이 처리. 두개의 처리 결과 array를 then 내부의 callback의 파라미터로 넘겨준다.(아래의 results)
 
 Promise.all([after2sec(),after4sec('All')])
 .then(function(results){
     console.log(Array.isArray(results));
     console.log(results);
 });
 
 
 //resolve와 reject는 then에서 각각 첫번째, 두번째 function값으로 성공, 실패 function을 의미