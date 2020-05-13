import React from "react";

const Product = ({ product, products, cart, addCart }) => {

  const { id, name, price } = product;

  const addProduct = id => {
    const product = products.filter(product => product.id === id)[0]
    addCart([
        ...cart,
        product
    ])
  }

  const deleteProduct = id => {
      const products = cart.filter(product => product.id !== id);

      addCart(products);
  }
  return (
    <div className="panel">
      <h4>{name}</h4>
      <span>${price}</span>

        {products 
        ? 
            (
                <button 
                type="button"
                className="btn btn-success btn-small"
                onClick={() => addProduct(id)}>
                Buy it
                </button>
            )
        :   
        (
            <button 
            type="button"
            className="btn btn-danger btn-small"
            onClick={() => deleteProduct(id)}>
            Remove it
            </button>
        )
        }

    </div>
  );
};

export default Product;
