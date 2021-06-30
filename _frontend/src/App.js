import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


function App() {
  return (
      <BrowserRouter>

    <div className="grid-container">
        <header className="row">

            <div>
                <a className="brand" href="index.html">amazona</a>
            </div>

            <div className="row">
                <a href="cart.html">Cart</a>
                <a href="singin.html">Sing In</a>
            </div>
        </header>
        <main>
            <Route path="/product/:id" component={ProductScreen}></Route>
            <Route path="/" component={HomeScreen} exact></Route>

        </main>

        <footer className="row center">
            All Right Reserved

        </footer>

    </div>
    </BrowserRouter>
  );
}

export default App;
