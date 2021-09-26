import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Trees from '../Trees/Trees';
import './Tree.css';
const Tree = () => {
    const[tree,setTree]=useState([]);
    const[cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('./trees.json')
        .then(res=>res.json())
        .then(data=>setTree(data))
    },[])
    const addToDelivered=tree=>{
        const newCart=[...cart,tree];
        setCart(newCart);
    }
    return (
        <div className="container">
            <div className="display-cart" >
                <Cart cart={cart}></Cart>
             </div>   
            <div className="display-grid">
                {
                    tree.map(tree=><Trees key={tree.id} tree={tree}
                    addToDelivered={addToDelivered}
                    ></Trees>)
                }
            </div>
        </div>
    );
};

export default Tree;