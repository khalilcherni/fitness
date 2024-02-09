import React from 'react';
import { useCart } from './CartContext';

function CartList() {
    const { cart } = useCart();

    return (
        <div>
          <h2>Cart</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      );
    }

export default CartList;