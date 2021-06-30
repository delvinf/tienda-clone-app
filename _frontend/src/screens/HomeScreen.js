import React from 'react';
import Product from '../components/Product.js';
import data from '../data.js';

export default function HomeScreen() {
    return (
        <div>
            <div className="row center">
              {data.products.map((product) => (
                  <Product key={product._id} product={product} />
                ))}
            </div>
        </div>
    )
}