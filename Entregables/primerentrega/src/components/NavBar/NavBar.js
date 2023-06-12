import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => { 
    return (
        <nav>
            <div>
                <button class="button is-primary">Inicio</button>
                <button class="button is-primary">Vehiculos</button>
                <button class="button is-primary">Financiaciones</button>
                <button class="button is-primary">Contacto</button>
                <button class="button is-primary">Admin</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar