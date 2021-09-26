import React from 'react';
import './Trees.css'
const Trees = (props) => {
    const{image,name,saplingsOf,flowersOf,quantity,typeOfflower,totalCost}=props.tree;
    return (
        <div className="diplay-container">
            <div className='card-container'>
                <img className="image-style" src={image} alt="" />
                <h3>Name:{name}</h3>
                <h4>Sapling Of:{saplingsOf}</h4>
                <p>Flower Of:{flowersOf}</p>
                <p>Quantity:{quantity}</p>
                <p>Type Of Flower:{typeOfflower}</p>
                <p>Total Cost:{totalCost}</p>
                <button className="button-style" onClick={()=>props.addToDelivered(props.tree)}>Add To Delivered</button>
            </div>
        </div>
    );
};

export default Trees;