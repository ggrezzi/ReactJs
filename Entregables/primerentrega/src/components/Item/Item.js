import { Link } from "react-router-dom"


const Item = ({id, name, img, price, stock})=>{
    return (

        <>
        <div class='column is-one-quarter'>
        
        <div class="card equal-height">
            <div class="card-image has-text-centered">
                <figure class="image is-64x64 is-inline-block">
                    <img src={img} alt={name} />
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                    </div>
                    <div class="media-content">
                        <p class="title is-4">{name}</p>
                        <p class="subtitle is-6">Precio: ${price}</p>
                        <p class="subtitle is-6">Stock Disponible: {stock}</p>
                    </div>
                </div>

                <div class="content">
                    <Link to={'/item/$'+{id}} className="option" class="button is-primary">Ver detalle</Link>
                </div>
            </div>
        </div>
        </div></>
        
    )
}


export default Item