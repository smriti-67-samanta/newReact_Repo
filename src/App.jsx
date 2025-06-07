import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from './features/Cart/CartSlice';

const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
];

function App() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Shopping Cart</h1>
      
      <h2>Products</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => dispatch(addItem(product))}>Add to Cart</button>
          </div>
        ))}
      </div>
      
      <h2>Cart Items: {cart.items.length}</h2>
      <ul>
        {cart.items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => dispatch(removeItem(item.id))} style={{ marginLeft: '10px' }}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      
      <h3>Total: ${cart.total.toFixed(2)}</h3>
    </div>
  );
}

export default App;