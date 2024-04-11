/***
 * 
 * Promise.race mai jo timer phle khatam hoga ya jo promise sabse phle data layega whai ans hoga whai parr hi return ho jaata h ,, chaye
 * wo reject hua hoo ya fir resolve.
 * 
 * 
 */

const p1 = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve("P1 is success");
    } , 3000)
})

const p2 = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve("P2 is success");
        // reject("P2 is fail")
    } , 5000)
})

const p3 = new Promise(function(resolve , reject){
    setTimeout(function(){
        reject("P3 is fail");
    } , 2000)
})


Promise.race([p1,p2,p3])
.then((res)=>{
   console.log(res);
})
.catch((err)=>console.error(err));



