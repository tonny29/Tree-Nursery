import React from 'react';
import './Name.css';
const Name = (props) => {
    // console.log(props.name.flowersOf);
    const {name,saplingsOf}=props.name;
    return (
        <div className="add-name-style">
            <h2>Name Of Nursery: <span className="color-of-name">{name}</span></h2>
            <h3>Name Of Flower:  <span className="color-of-name">{saplingsOf}</span> </h3>
        </div>
    );
};

export default Name;