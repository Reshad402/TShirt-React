import React from 'react';
import './Cart.css'
const Cart = ({ cart, handleRemoveItem }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please buy one item from the cart</p>
    }
    else {
        message = <p>Thanks for buying</p>
    }
    return (
        <div>
            <h2 className={cart.length === 2 ? `orang` : 'purp'}>Order details</h2>
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
            {
                cart.length === 3 ? <p>Tin jon ke gift diba?</p> : <p>Kino 3barn</p>
            }
            {

            }
        </div>
    );
};

export default Cart;