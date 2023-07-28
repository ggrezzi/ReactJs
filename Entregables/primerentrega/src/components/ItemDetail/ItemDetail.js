import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import {useState, useContext} from 'react'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({id, nombre, foto, categoria, descripcion, precio, stock}) => {
  const [quantityAdded, setQuantityAdded]=useState(0)
  const {addItem} = useContext(CartContext)
  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)
    const item ={
      id, nombre, precio
    }
    addItem(item,quantity)
  }
    return(
        <div className='contenedor'>
          <div class='column is-one-quarter'>
            <div class="card equal-height">
              <div class="card-image has-text-centered">
                <figure class="image is-64x64 is-inline-block">
                    <img src={foto} alt={nombre} />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">{nombre}</p>
                    <p class="subtitle is-6">{descripcion}</p>
                    <p class="subtitle is-6">Precio: ${precio}</p>
                    <p class="subtitle is-6">Stock Disponible: {stock}</p>
                  </div>
                </div>
              <div class="content">
                {quantityAdded >0 ? (<Link to='/cart' className='Option'>Terminar compra</Link>
                  ):(
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                  )}
                
              </div>
            </div>
          </div>
        </div>   
      </div>
    )
}

export default ItemDetail