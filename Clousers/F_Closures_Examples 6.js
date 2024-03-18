function f1(){

    var a = 10;
    var b = 20;
    
    return function f2(b){

        console.log(a , b);

    }
}

f1()("Anish");