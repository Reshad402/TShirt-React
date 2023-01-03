import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../TShirt/Tshirt';
import './Home.css'
const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {
        //                          ?If one item is max one time then use this if else
        //?                         Find is used as only one item is needed to check               
        const exists = cart.find(ts => ts._id === tshirt._id);
        if (exists) {
            alert('This is already in the cart')
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }

    }

    const handleRemoveItem = tshirt => {
        //?                             Important is filtering the "cart " part
        const remaining = cart.filter(ts => ts._id !== tshirt._id);
        // const [cart, setCart] = useState([]);
        setCart(remaining);
    }

    return (
        <div className='home-container'>
            <div className="t-shirt-container">
                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveItem={handleRemoveItem}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;