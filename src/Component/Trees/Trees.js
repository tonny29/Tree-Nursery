import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faEnvelope,faPhoneSquare,faInfo} from '@fortawesome/free-solid-svg-icons'
import './Trees.css'
const Trees = (props) => {
    const{image,name,saplingsOf,flowersOf,quantity,typeOfflower,totalCost}=props.tree;
    const addedCartIcon = <FontAwesomeIcon icon={faShoppingCart}/>
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
                <button className="button-style" onClick={()=>props.addToDelivered(props.tree)}>{addedCartIcon} Add To Delivered</button>
                <div className="icon-style">
                    <p><FontAwesomeIcon icon={faEnvelope}/></p>
                    <p><FontAwesomeIcon icon={faPhoneSquare}/></p>
                    <p><FontAwesomeIcon icon={faInfo}/></p>
                </div>
            </div>
        </div>
    );
};

export default Trees;