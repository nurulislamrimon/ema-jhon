import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CartedItems = (props) => {
    const { img, name, price, quantity, shipping, id } = props.product;
    return (
        <div className='carted-product'>
            <img src={img} height="100px" alt="" />
            <div className="product-info">
                <h3 title={name}>{name.length > 20 ? name.slice(0, 20) + '...' : name}</h3>
                <p>Price: {price}</p>
                <p>Shipping: {shipping}</p>
                <p>item:{quantity}</p>
            </div>
            <button onClick={() => props.removeItem(id)}>
                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default CartedItems;