import React from 'react';
import Product from './Product';

const Cart = ({cart, addCart}) => {
    return (
        <div className="panel">
            <h4>** Cart **</h4>
            {cart.length === 0 
            ? 
                <p>Cart is Empty</p>
            :
                cart.map(product => (
                    <Product 
                        key={product.id}
                        product={product} 
                        cart={cart}
                        addCart={addCart}
                    />
                ))
            }
        </div>
    );
}

export default Cart;