import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Cart, Products, NavBar } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    const [products, setProducts]= useState([]);
    const [cart, setCart]=useState([]);

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    const fetchCart = async() => {
        setCart(await commerce.cart.retrieve());
    }

    const handleAddToCart = async (productId, quantity) => {
        await commerce.cart.add(productId, quantity);
        setCart(await commerce.cart.retrieve());
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    console.log(Cart);

    return (
      <Router> 
        <div>
            <NavBar totalItems= {cart.total_items} />
            <Routes>
                    <Route exact path="/">
                        <Products products={ products } onAddToCart={handleAddToCart} />
                    </Route>
                    <Route exact path="/cart">
                        <Cart cart={cart} />
                    </Route>
            </Routes>
        </div>
      </Router>
    )
}

export default App;
