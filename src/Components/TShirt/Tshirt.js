import React from 'react';
import './Tshirt.css'
const Tshirt = ({ tshirt, handleAddToCart }) => {
    const { name, picture, price } = tshirt;
    return (
        <div className='image'>
            <img src={picture} alt="" />
            <h3>Name : ={name}</h3>
            <h5>Price: ={price}</h5>
            <button onClick={() => handleAddToCart(tshirt)}>Buy this</button>
        </div>
    );
};

export default Tshirt;