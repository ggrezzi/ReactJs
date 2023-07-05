
import './App.css';
import NavBar from './components/NavBar/NavBar';
import "bulma/css/bulma.css";
import ItemCount from './components/ItemCount/ItemCount';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<h1>PAGE NOT FOUND 404</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
/*
<ItemListContainer greeting={'Bienvenidos'}/>
<ItemDetailContainer/>*/