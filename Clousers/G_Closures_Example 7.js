function f1(){

    var a = 10;
    var b = 20;
    
    return function f2(b){

        console.log(a , b);

    }
}

var b = 100;
f1()("Anish");

// or

function f11(){

    var a = 10;
    // var b = 20;
    
    return function f2(){

        console.log(a , b);

    }
}

var b = 100;
f11()("Anish");