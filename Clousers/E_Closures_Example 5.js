function f1(){

    var a = 2;

    for(var i=0; i<5; i++){
        setTimeout(function f2(){
            console.log(a , i)
        }, 3000)
    }
}

f1();


// output -->

// 2 5
// 2 5
// 2 5
// 2 5
// 2 5



function f11(){

    var a = 2;

    for(let i=0; i<5; i++){
        setTimeout(function f2(){
            console.log(a , i)
        }, 3000)
    }
}

f11();

// output-
// 2 0
// 2 1
// 2 2
// 2 3
// 2 4


function f111(){

    var a = 2;

    for(var i=0; i<5; i++){
       
        function f2(i){
            setTimeout(function f3(){
                console.log(a , i)
            }, 3000)
        }

        f2(i);
    }
}

f111();

// output-
// 2 0
// 2 1
// 2 2
// 2 3
// 2 4