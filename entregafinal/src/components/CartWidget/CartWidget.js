import cart from'./assets/cart.svg'


const CartWidget = ()=>{
    return(
        <div>
            <img src={cart} alt="cart-widget" height="30px"/>
            0
        </div>
    )
}
export default CartWidget