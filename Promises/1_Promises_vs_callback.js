/***
 * 
 * Sab thik h do tarike h implemnetation ke , callback and Promises , jab hmm callback use krte h tab jese yha par Makeorder(cart , ..) makeorder
 * bnkar aa jayega to hmm callback ko call kr denge, fir jab payment jo jayegi to generate email ka callback kr denge.
 * 
 * In callback-
 * 1. Pyramid str , hard to decode, handle and risky in nature.
 * 2. Hmm apna callback kisi or ko de rhe h , kya pta osne kese implememnt kese kiya hoga ... (phle chle payment 2 baar ho gyi , ya code fat gya)
 * 
 * In Promises -
 * 1. Chaining happens , not pyramid.
 * 2. Ha ye to h , hmm apna callback ksii ko nhi de rhe. khud handle kr rhe h.
 * 
 * 
 */


// By simple Callback function.

const cartItems = ["Guitar" , "Sneakers" , "Laptop Stand" , "Yoga Mat"];    

MakeOrder(cartItems , function(orderId){                 // these are like async operations or api's

    MakePayment(orderId , function(paymentId){            // Making the Pyramid type of Structure. (Horizontally)

        GenerateEmail(paymentId);
    });
});



// By promises -

const promise = MakeOrder(cartItems);

promise.then(function(orderId){
    return MakePayment(orderId);                     // Moreover vertical in nature still Chaining is happening .
})
.then(function(paymentId){
   return  GenerateEmail(paymentId);
})




// By Promises arrow fn- ( dikhne mai easy lagta h oor to kya hi h )

const promise2 = MakeOrder(cartItems);

promise2.then((orderId)=> MakePayment(orderId))
.then((paymentId) => GenerateEmail(paymentId));



