function f1(){
    var count = 0;

    return function f2(){
        count++;
        console.log(count);
    }
}

var obj1 = f1();
obj1();
obj1();
obj1();


var obj2 = f1();
obj2();
obj2();


// to return like multiple functions , make code scalable-

function f11(){
    var count = 0;

    this.Increment  = function (){
        count++;
        console.log(count);
    }

    
    this.Decrement  = function (){
        count--;
        console.log(count);
    }
    
}
var obj3 = new f11();
obj3.Increment();
obj3.Decrement();
