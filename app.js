// function placeAnOrder (orderNumber ) {
//
//     console.log('Customer order:', orderNumber);
//
//
//     cookAndDeliverFood( function () {
//
//         console.log('food delivered order:', orderNumber);
//
//     });
//
// }
//
//
//
// //simulate 5 second operation
// function cookAndDeliverFood (callback ) {
//
//     setTimeout(callback, 5000);
//
// }
//
// // simulate customer order
// placeAnOrder(1);
// placeAnOrder(2);
// placeAnOrder(3);
// placeAnOrder(4);
// placeAnOrder(5);


function User() {
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer) {
        targetPlayer.life += 1;
        console.log(this.name + " gave 1 life to " + targetPlayer.name);
        
    }
    
}


var Dismas = new User();
var Kiilu = new User();
Dismas.name = "Dismas"
Kiilu.name = "kiilu"


Dismas.giveLife(Kiilu);
console.log("Dismas: " + Dismas.life);
console.log("Kiilu: " + Kiilu.life);



User.prototype.uppercut = function uppercut(targetPlayer) {
    targetPlayer.life -= 3;
    console.log(this.name + " just uppercutted " + targetPlayer.name);
    
};


Kiilu.uppercut(Dismas);
console.log("Dismas: " + Dismas.life);
console.log("Kiilu: " + Kiilu.life);