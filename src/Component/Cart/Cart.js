import React from 'react';
import Name from '../Names/Name';
import './Cart.css';
const Cart = (props) => {
    console.log(props.cart);
    const{cart}=props;
    let total=0;
    let quantity=0;
    for(const trees of cart){
        total=total+trees.totalCost;
        quantity=quantity+trees.quantity;
    }
    const flowerName=props.cart.typeOfRose;
    console.log(flowerName);
    return (
        <div>
                <div className="cart-container">
                    <p>Flowers Item: {props.cart.length}</p>
                    <p>Total Quantity: {quantity}</p>
                    <p>Total-Cost: ${total}</p>
                    <br /> <br />
                    <button className="cart-button">Clicked To Delivered</button>
                </div>
                <div>
                    {
                      cart.map(name=><Name  
                        key={name.saplingOf} 
                        name={name}></Name>)  
                    }
                </div>
        </div>
    );
};

export default Cart;