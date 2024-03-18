function f1(){

    var a ="Anish"

    function f2(){
        console.log(a);
    }

     a = "Vinod"

    return f2;
}

f1()();