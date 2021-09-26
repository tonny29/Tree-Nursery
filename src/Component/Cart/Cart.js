import React from 'react';

const Cart = (props) => {
    console.log(props.cart);
    const{cart}=props;
    let total=0;
    for(const trees of cart){
        total=total+trees.totalCost;
    }
    const flowerName=props.cart.typeOfRose;
    console.log(flowerName);
    return (
        <div>
            <p>This is cart</p>
            <h3>Nursery Number:{props.cart.length}</h3>
                <h3>Name Of Nursery:</h3>
                <p>Name Of Flower:</p>
                <p>Total-Cost:{total}</p>
                <br /> <br />
                <button className="cart-button">Clicked To Delivered</button>
        </div>
    );
};

export default Cart;