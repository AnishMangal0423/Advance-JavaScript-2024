// Mdn Arcticle Link --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

function f1(){

   let a = 2;

   function f2(){

    console.log(a);

   }
   f2()
}

f1();