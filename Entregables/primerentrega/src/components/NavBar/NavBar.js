import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => { 
    return (
        <nav>
            <Link to='/' class="button is-primary">
                <h3>Ecomm</h3>
            </Link>
            <div>
                <NavLink to={'/category/juguetes'}class="button is-primary" className={({isActive})=>isActive ? 'ActiveOption':'Option'}>Juguetes</NavLink>
                <NavLink to={'/category/vinchas'} class="button is-primary" className={({isActive})=>isActive ? 'ActiveOption':'Option'}>Vinchas</NavLink>
                <NavLink to={'/category/decoracion'} class="button is-primary" className={({isActive})=>isActive ? 'ActiveOption':'Option'}>Guirnaldas</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar