function placeAnOrder (orderNumber ) {

    console.log('Customer order:', orderNumber);


    cookAndDeliverFood( function () {

        console.log('food delivered order:', orderNumber);

    });
    
}



//simulate 5 second operation
function cookAndDeliverFood (callback ) {

    setTimeout(callback, 5000);
    
}

// simulate customer order
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);