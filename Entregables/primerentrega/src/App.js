
import './App.css';
import NavBar from './components/NavBar/NavBar';
import "bulma/css/bulma.css";
import ItemCount from './components/ItemCount/ItemCount';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<h1>PAGE NOT FOUND 404</h1>}/>
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
/*
<ItemListContainer greeting={'Bienvenidos'}/>
<ItemDetailContainer/>*/