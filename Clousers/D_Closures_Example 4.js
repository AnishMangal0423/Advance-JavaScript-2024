function f1(){

    var a = 2;

    setTimeout(function f2(){                 // --> f2 is a clsoure associated with the value of 2 and points to actual refernce. 
        console.log(a);
    } , 3000);                        
}

f1();