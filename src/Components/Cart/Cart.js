import React from 'react';

const Cart = ({ cart }) => {
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
                    <button>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;