import Navbar from "./components/Navbar"
import ReactDOM from 'react-dom';
import { CartProvider } from './components/CartContext';



function App() {
  return (
    <div>
      <CartProvider>
        <Navbar />
      </CartProvider>
    </div>
  );
}

export default App;
