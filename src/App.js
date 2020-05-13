import React, {useState} from 'react';
import Product from './components/Product';
import Cart from './components/Cart';

function App() {

  const products = [
    { id: 1, name: "Angular Course", price: 40},
    { id: 2, name: "Golang Course", price: 60},
    { id: 3, name: "Docker Course", price: 29},
    { id: 4, name: "Flask Course", price: 30},
    { id: 5, name: "Scrapy Course", price: 45},

  ]

  const [product, setProducts] = useState([])

  const [cart, addCart] = useState([])

  const date = new Date().getFullYear();


  return (
    <div className="container">
      <h1>Virtual Shop</h1>

      <div className="row">
        <div className="col-md-6">
          <h2> -- Catalogue --</h2>
          {products.map(product => (
            <Product 
              key={product.id} 
              product={product}
              products={products}
              cart={cart}
              addCart={addCart} />
          ))}
        </div>

        <div className="col-md-5">
          <Cart 
            cart={cart}
            addCart={addCart}
          />
        </div>
      </div>

      <footer>{date}</footer>
    </div>
  );
}

export default App;
