import { CartContext } from '../../context/CartContext'
import cart from'./assets/cart.svg'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const CartWidget = ()=>{
    const {totalQuantity} = useContext(CartContext)
    return(
        <Link to='/cart' className='CartWidget' style={{display: totalQuantity>0?'block':'none'}}>
            <img className='CartImg' src={cart} alt="cart-widget" height="30px"/>
            {totalQuantity}
        </Link>
    )
}
export default CartWidget