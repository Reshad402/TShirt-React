import React from 'react';

const Cart = ({ cart, handleRemoveItem }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please buy one item from the cart</p>
    }
    return (
        <div>
            <h2>Order details</h2>
            <h4>Total cart added:{cart.length}</h4>
            {
                //?                             Adding the name of the added products
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }
        </div>
    );
};

export default Cart;