import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import CartedItems from '../CartedItems/CartedItems';
import "./order.css"

const Orders = () => {

    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const removeCartItem = (id) => {
        const rest = cart.filter(product => product.id !== id);
        setCart(rest);
        removeFromDb(id);
    }
    const navigate = useNavigate();
    return (
        <div className='cart-review-container'>
            <div className="cart-review-left-section">

                {cart.map(product => <CartedItems
                    key={product.id}
                    product={product}
                    removeItem={removeCartItem}
                >
                </CartedItems>)}

            </div>

            <div className="cart-container">
                <Cart key={cart.id} cart={cart}>
                    <button onClick={() => navigate('/shop')}>Proceed Order</button>
                </Cart>
            </div>

        </div>
    );
};

export default Orders;