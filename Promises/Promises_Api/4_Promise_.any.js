/***
 * 
 * Promise.any sabse phle os promise ko dhundta h jo suceess hogi .. chayee wo 2s par ho ya 3s par
 * agar socho teeno hi fail ho jayee to Aggregate error aa jati h. that all are fail (koi bhi sucess nhi mila).
 *
 */


const p1 = new Promise(function(resolve , reject){
    setTimeout(function(){
        // resolve("P1 is success");
         reject("P1 is fail")
    } , 3000)
})

const p2 = new Promise(function(resolve , reject){
    setTimeout(function(){
        // resolve("P2 is success");
        reject("P2 is fail")
    } , 5000)
})

const p3 = new Promise(function(resolve , reject){
    setTimeout(function(){
        reject("P3 is fail");
    } , 2000)
})


Promise.any([p1,p2,p3])
.then((res)=>{
   console.log(res);
})
.catch((err)=>console.error(err));



