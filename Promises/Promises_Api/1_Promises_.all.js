/***
 * 
 * Overall Baat itni si samajni h ki we have an array of, Promises and aab agar ek bhi promise ne fail bol diya too osi time we will
 * return to the cath with faiure satatement aur agar saab passs h tab to thik h we will get ok ans .
 * 
 * Promise.all samaj aa hi gya hoga.
 * 
 * All succuess  --> Ok response.
 * Any failure  --> Returns first failure.
 * 
 * 
 *Go and try hit and trial variations here. 
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


Promise.all([p1,p2,p3])
.then((res)=>{
   console.log(res);
})
.catch((err)=>console.error(err));



