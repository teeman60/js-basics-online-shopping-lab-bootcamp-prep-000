var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item){
var price = Math.floor(Math.random()*99)
cart.push({itemName:item, itemPrice: price})
return `${item} has been added to your cart.`

}

function viewCart() {
  console.log(cart)
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
else{

      var l = cart.length;
      var myString = " In your cart, you have "
      var price = Math.floor(Math.random()*99)
         for(var i = 0; i < l; i++){
            for(var list in cart[i]){
              console.group()
              console.log(cart[i]);
              console.log(list);
              console.groupEnd();
            myString+=`${list} at ${cart[i]}`
                if(i!==cart.length-1){
                  myString+=", "
                }
                else{
                  myString+="."
                }
              }

             }

       return myString
  }

 }
//
// function total() {
//   let t = 0
//   for (var i = 0; i < cart.length; i++) {
//     for(var item in cart[i]) {
//     t += cart[i][item]
//   }
//   }
// }
//
// function removeFromCart(item){
//
//    for (var i = 0; i < cart.length; i++) {
//
//    for(var list in cart[i]){
//       if(item === list){
//         cart.splice(i,1)
//         return cart
//        }
//     }
//   }
//
//    console.log("That item is not in your cart.")
//   return cart
// }
//
//
// function placeOrder(cardNumber) {
//
//  if (cardNumber === undefined){
//   console.log("We don't have a credit card on file for you to place your order.")
// }
// else{
//
//    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
//   cart = []
//   return cart
// }
//
//  }
