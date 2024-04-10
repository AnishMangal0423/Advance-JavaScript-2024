var a = 2;
let b = 3;
const c = 4;
{
    var a = 3;
    let b = 30;
    const c = 40;

    console.log(a);    // 3
    console.log(b);    // 30 Block varibale
    console.log(c);    // 40 Block variable      
} 

console.log(a);   // 3
console.log(b);   // 3
console.log(c);   // 4    


/***
 * 
 * Shadowing :- Shadowing in Javascript refers to the case when inner block variable hides the value of same named outer variable value.
 * All let , var , const can shadow the Values.
 * Let , const are considerd as Block and var is not .. becuase var mai saara kaam global context mai hi hota h.
 * and Let and const have different memory spaces (script , block etc.. ) and whai scope chaining hoti h fer.
 * 
 * 
 */