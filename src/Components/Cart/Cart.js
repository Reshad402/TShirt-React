import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h2>Order details</h2>
            <h4>Total cart added:{cart.length}</h4>
        </div>
    );
};

export default Cart;