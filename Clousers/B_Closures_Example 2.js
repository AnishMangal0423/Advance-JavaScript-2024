function f1(){

    var name = "Anish"

    function f2(){
        console.log(name)
    }

   return f2
}

var z = f1();

// After writing 1000's of Lines ...

z();


//----------------------------------------------------------------------  or ---------------------------------------------------------

function f1(){

    var name = "Anish"

    return function f2(){
        console.log(name)
    }

}

var z = f1();

// After writing 1000's of Lines ...

z();