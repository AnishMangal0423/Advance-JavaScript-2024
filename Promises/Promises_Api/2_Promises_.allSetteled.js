/***
 * 
 * Promise.allSettled ye purra chalta h jo fail hoga so fail hoga , jo pass h wo pass h .. at last matlab at maximumm time it will give
 * status of all Promises.
 * 
 * Ise hi sabse jada sahi aur shantipurn mante  h (settled h) 
 * 
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
    } , 1000)
})

const p3 = new Promise(function(resolve , reject){
    setTimeout(function(){
        reject("P3 is fail");
    } , 2000)
})


Promise.allSettled([p1,p2,p3])
.then((res)=>{
   console.log(res);
})
.catch((err)=>console.error(err));



