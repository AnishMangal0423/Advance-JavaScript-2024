/****
 * 
 * Implemented all Functions in Detail.
 * 
 * Learnings :-
 * 1. How to Make Promise :- Hamko pta h ki hmm baar baar .then likhar api's ko call kar rhe h taaki promise object recieve kr sake.
 *                           so the point is ki hmm prmise object bnate kese h .. (see fn Makeorder) promise object ose bnaya jata h
 *                           fir oper bhej dete h simply. 
 *                           object bnayega ya reject hoga ye oske implemenntation par depend krta h.
 *                           resolve() ka matlab h ki promise bn gya h , ander jo fn h wo constructor bagera mai jaat h , aur resolve condn
 *                           mai pr object generate kr deta h with data
 *                           aur reject mai bhi object bntaa h par with data of error message. 
 * 
 * 
 * 
 * 2.  .Catch() :-   Ye isliye use kiya jata h ki jha par bhi error milti h , bhi par catch chal jata h ,, ya yha par bhi pr reject se aaaya ho.
 * 
 */

const cartItems = ["Guitar" , "Sneakers" , "Laptop Stand" , "Yoga Mat"];  

MakeOrder(cartItems)
.then(function(orderid){
    console.log("order is Made with order id of : "+ orderid);
    return MakePayment(orderid);
})
.then(function(paymentid){
    console.log("Payment is successfful on PaymentId " + paymentid);
    return GenerateEmail(paymentid);
})

.then(function(Emailid){
    console.log("I have generated an Email " + Emailid);
    return Emailid;
})
.catch(function(err){
    console.log(err.message);
})



function MakeOrder(cartItems){

    // Making the promise object.
    const pr = new Promise(function(resolve , reject){

         // some validations on cart-
         // Making the order id and all.

         if(!isCartValidate(cartItems)){
          const err = new Error("Cart is Not valid");
            reject(err); // promise object mai error wala data insert karna h.
         }

         const orderid = "12345";

         if(orderid){
            resolve(orderid); // promise object mai sahi wala data insert karna h.
         }

    })

    return pr; // at last jo bhi obj bna h kisi bhi data ke saath ose retuurn krna.
}

function MakePayment(orderId){

    const pr = new Promise(function(resolve , reject){

        // if order is successful-

        resolve(12112195);

    })

    return pr;
}

function GenerateEmail(paymentId){

    console.log(paymentId);
    const pr = new Promise(function(resolve, reject){

        resolve("Email is sended of Payment id " + paymentId);
    })

    return pr;
}

function isCartValidate(cartItems){
    return true;
}